play.addEventListener('click', () =>{ p =   `${Math.round(95*Math.random())}` 

            a = parseInt(p)
            space.style.height = `${a}%`
            console.log(a)
            let b = 100-a
            console.log(b)
            bar.addEventListener("click", (e)=>{
    // space.style.height = `${Math.round(95*Math.random())}%`
    num.innerHTML = b + "%";
    value.classList.add('value')
    if(bar.value >= b-10 && bar.value <= b+10){
        console.log("right")
        result.innerHTML = "PASS"
    }else{
        console.log("wrong")
        result.innerHTML = "FAIL"
    }
    

})
value.classList.remove('value')
    num.innerHTML = " ";
    result.innerHTML = " ";
setInterval(()=>{
    show.innerText = bar.value + "%"

    },100)
    play.innerHTML = "replay"
}
)






