import json
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException
import time

def parse_comment(comment_text):
    if comment_text.startswith("message"):
        number = comment_text[len("message"):].strip()
        return {"message": number}
    return {"message": comment_text}

def parse_vote_text(vote_text):
    if vote_text.startswith("add_box"):
        number = vote_text[len("add_box"):].strip()
        return {"add_box": number}
    return {"vote_text": vote_text}

driver = webdriver.Chrome()

try:
    start_url = "https://pantip.com/"
    all_data = []
    driver.get(start_url)
    wait = WebDriverWait(driver, 10)

    while True:
        try:
            more_buttons = wait.until(
                EC.presence_of_all_elements_located((By.XPATH, '//a[contains(text(),"ดูเพิ่มเติม")]'))
            )
            for button in more_buttons:
                try:
                    driver.execute_script("arguments[0].click();", button)
                    time.sleep(2)  # รอให้หน้าโหลดหลังจากคลิก
                except Exception as e:
                    print(f"Error clicking 'ดูเพิ่มเติม' button: {e}")
            time.sleep(3)  # รอให้ข้อมูลโหลดหลังจากคลิกปุ่ม
        except Exception as e:
            print(f"No more 'ดูเพิ่มเติม' buttons found or error occurred: {e}")
            break

        try:
            elements = wait.until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'div.pt-block.pt-block-purple-2'))
            )

            for element in elements:
                block_data = {
                    "headers": {},
                    "titles": []
                }

                try:
                    hedertests = element.find_elements(By.CSS_SELECTOR, "div.pt-block-header")
                    for idx, hedertest in enumerate(hedertests):
                        text = hedertest.text
                        lines = text.split('\n', 2)
                        title = lines[0].strip()
                        second_title = lines[1].strip() if len(lines) > 1 else ""
                        t3 = lines[2].strip() if len(lines) > 2 else ""
                        t3_lines = t3.split('\n', 1)
                        t4 = t3_lines[1].strip() if len(t3_lines) > 1 else ""
                        t3 = t3_lines[0].strip()

                        block_data["headers"][title] = {
                            "title": title,
                            "second_title": second_title,
                            "t3": t3,
                            "t4": t4
                        }
                except StaleElementReferenceException as e:
                    print(f"StaleElementReferenceException while processing headers: {e}")
                    continue

                try:
                    list_items = element.find_elements(By.CSS_SELECTOR, 'li.pt-list-item')
                    for item in list_items:
                        h2_tag = item.find_element(By.CSS_SELECTOR, 'h2')
                        h5_tag = item.find_element(By.CSS_SELECTOR, 'h5') if item.find_elements(By.CSS_SELECTOR, 'h5') else None

                        if h2_tag:
                            a_tag = h2_tag.find_element(By.CSS_SELECTOR, 'a')
                            text_title = a_tag.text.strip()
                            link_title = a_tag.get_attribute('href')

                            title_data = {
                                "text_title": text_title,
                                "href_title": link_title,
                                "tags": [],
                                "User": [],
                                "info": [],
                                "comments": [],
                                "vote_text": []
                            }

                            tag_list = item.find_elements(By.CSS_SELECTOR, 'div.pt-list-item__tag')
                            for tag in tag_list:
                                a_tags = tag.find_elements(By.CSS_SELECTOR, 'a')
                                for a_tag in a_tags:
                                    tag_title = a_tag.text.strip()
                                    link_tag = a_tag.get_attribute('href')
                                    title_data["tags"].append({
                                        "tag_title": tag_title,
                                        "link_tag": link_tag
                                    })

                            if h5_tag:
                                a_user = h5_tag.find_element(By.CSS_SELECTOR, 'a') if h5_tag.find_elements(By.CSS_SELECTOR, 'a') else None
                                if a_user:
                                    text_user = a_user.text.strip()
                                    link_user = a_user.get_attribute('href')
                                    title_data["User"].append({
                                        "text_user": text_user,
                                        "link_user": link_user
                                    })
                                else:
                                    text_user = h5_tag.text.strip()
                                    title_data["User"].append({
                                        "text_user": text_user,
                                        "link_user": None
                                    })

                            info_list = item.find_elements(By.CSS_SELECTOR, 'div.pt-list-item__info')
                            for info in info_list:
                                span_tags = info.find_elements(By.CSS_SELECTOR, 'span')
                                for span in span_tags:
                                    span_text = span.text.strip()
                                    title_data["info"].append(span_text)

                            comment_list = item.find_elements(By.CSS_SELECTOR, 'span.pt-li_stats-comment')
                            for comment in comment_list:
                                comment_text = comment.text.strip()
                                title_data["comments"].append(parse_comment(comment_text))

                            voter = item.find_elements(By.CSS_SELECTOR, 'span.pt-li_stats-vote')
                            for vote in voter:
                                vote_text = vote.text.strip()
                                title_data["vote_text"].append(parse_vote_text(vote_text))

                            block_data["titles"].append(title_data)
                except StaleElementReferenceException as e:
                    print(f"StaleElementReferenceException while processing list items: {e}")
                    continue

                all_data.append(block_data)

        except Exception as e:
            print(f"Error occurred while extracting data: {e}")

        try:
            next_button = wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, "a.next"))
            )
            next_button.click()
            time.sleep(2)  # รอให้หน้าโหลด
        except Exception as e:
            print(f"Error navigating to the next page: {e}")
            break

    with open('spit3.json', 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=4)

finally:
    driver.quit()
