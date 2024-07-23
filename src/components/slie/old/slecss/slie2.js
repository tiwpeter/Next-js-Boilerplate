const fle = document.querySelector(".fle");
const arrowbtnsm = document.querySelectorAll(".antasin i");
const firstCarWidthf = fle.querySelector(".lo").offsetWidth;

//ต้องใช้ e.pageX เพื่อรับค่าตำแหน่ง X ของเมาส์ที่ได้เป็นพารามิเตอร์ในฟังก์ชัน dragging() ซึ่งเป็นตัวแทนเพื่อชี้ให้ถูกต้อง

let isDraggingGs = false, startW, startScrollRigt;

// add event lister for arrow button to scroll the fle left and right
arrowbtnsm.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            fle.scrollLeft -= firstCarWidthf; // เลื่อนไปทางซ้าย
        } else if (btn.id === "right") {
            fle.scrollLeft += firstCarWidthf; // เลื่อนไปทางขวา
        }
    });
});

const dragStartW = (e) => {
    isDraggingGs = true;
    // Record the inital cursor and scroll position of the fle
    startW = e.pageX;
    startScrollRigt = fle.scrollLeft;

      /* รูปแบบ CSS ที่ปรับเพิ่มเติมเมื่อ fle ถูกลาก */
   /* เปลี่ยน cursor เป็น grabbing เมื่อ fle ถูกลาก */
    fle.classList.add("dragging")
}


const draggingW = (e) => {
   // console.log(e.pageX);
   if (!isDraggingGs) return; // ถ้าไม่ได้ลากเมาส์อยู่จะไม่ทำงาน
   //up date moment **15.55
    fle.scrollLeft = startScrollRigt - (e.pageX - startW)
    

}

// stop move
const dragStopw = () => {
    isDraggingGs = false;
    fle.classList.remove("dragging")
}

fle.addEventListener("mousemove" , draggingW);
fle.addEventListener("mousedown", dragStartW);
fle.addEventListener("mouseup", dragStopw);


/*
const dragging = (e) => {
    fle.scrollLeft += e.pageX - startW; // ปรับไป แก้ เข้า   สาม ่ ่
    console.log(e.pageX);
}

fle.addEventListener("mousedown", (e) => {
    startW = e.pageX - fle.offsetLeft;
});*/