// Thay đổi nội dung búc thư ở đây
var letterContent =" Thôi bình minh sắp tới rồi, Anh lại sắp phải làm việc rồi, không những thế chiều nay Anh còn phải thi nữa, hy vộng rằng tí nữa Anh sẽ nhận được lời chúc may mắn của Em. Anh biết Em có rất nhiều lý do để chưa đến bên Anh, nhưng không sao anh sẽ chờ em hay vui cười Em nhé. Anh mong em luôn cảm thấy mình hạnh phúc.💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})