// B. Code Challenge
function lucky(){
    let header = document.getElementById("header")
    let content = document.getElementById("content")
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let result = document.getElementById("result").textContent
    let array = [1,2,3,4,5,6,7,8,9,10]
    let test = 0
    
    btn.addEventListener('click', function(){
        let input_value = document.getElementById("input").value
        let arrayrandom = array[Math.floor(Math.random()*array.length)]
        
        if(input_value<1 || input_value>10 || isNaN(input_value)){
            alert("Trò chơi chỉ nhận số từ 1 đến 10. Ấn nút OK và thử lại")
            document.getElementById("input").value = ""
            document.getElementById("result").textContent="KẾT QUẢ"
        }

        else{

        if(input_value != arrayrandom){
            document.getElementById("result").textContent = `Bạn đã đoán sai. Số đúng là: `+arrayrandom
            test = test + 1
            if(test == 3){
                content.remove()
                header.insertAdjacentHTML('beforeend', `<div id="end">Bạn đã hết cơ hội, chúc may mắn lần sau</div>`)
            }
        }
        else {document.getElementById("result").textContent = "Bạn đã đoán đúng. Xin chúc mừng"
        test = 0
    }
        document.getElementById("input").value = ""
    }
    })
    
}

lucky()