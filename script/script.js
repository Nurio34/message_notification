
const btns = document.querySelectorAll(".container button")
const messagesCont = document.querySelector(".messages")
const arr =[]


    btns.forEach(btn => btn.addEventListener("click",e=>{

        const btnType = e.target.innerText

        const styles = ()=> {
            if(btnType === "Success") {
                iconType = "fa-check"
                bgClr = "green"
                clr = "white"
                timerClr ="green"
            }
            else if(btnType === "Error") {
                iconType = "fa-xmark"
                bgClr = "red"
                clr = "white"
                timerClr ="red"
            }
            else if(btnType === "Warning") {
                iconType = "fa-triangle-exclamation"
                bgClr = "transparent"
                clr = "rgb(184, 184, 3)"
                timerClr ="rgb(184, 184, 3)"
            }
            else {
                iconType = "fa-info"
                bgClr = "blue"
                clr = "white"
                timerClr ="blue"
            }
            return {iconType,bgClr,clr,timerClr}
        }

            createElement(btnType,styles)
    }))

function createElement(btnType,styles) {

    const messageEl = document.createElement("li")
        messageEl.className = "flex fw ac cg1 visible"
        messageEl.innerHTML = `
            <i class="fa-solid ${styles().iconType}" style="--bgClr: ${styles().bgClr}; --clr: ${styles().clr}"></i> 
            <p><span>${btnType}</span>: This is a <span>${btnType}</span> message </p>
            <button class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
            <div class="timer" style="background-color:${styles().timerClr}"></div>
        `
        messagesCont.appendChild(messageEl)

    const timerEls = document.querySelectorAll(`.timer`).forEach(timerEl=> {
            timerEl.addEventListener("animationend", (e)=> {
                removeEl(e.target.parentElement)
            })
        })

    const closeBtn = document.querySelectorAll(".closeBtn").forEach(btn=> {
        btn.addEventListener("click", (e)=> {
            removeEl(e.target.parentElement) 
        } )
    })
}

function removeEl(element) {

    element.className = "flex ac cg1 hidden"

    setTimeout(() => {
        messagesCont.removeChild(element)
    }, 1000);
}