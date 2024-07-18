from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

#id
query = "korea"

driver = webdriver.Chrome()
driver.get(f"https://pantip.com/forum/{query}")


elem = driver.find_element(By.CLASS_NAME, "pt-list-item__title")
#print(elem.text)
print(elem.get_attribute("outerHTML"))

time.sleep(4)
driver.close()