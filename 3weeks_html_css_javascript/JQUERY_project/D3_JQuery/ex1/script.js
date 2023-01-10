// $("h1").css("font-size","10rem").css("color","yellow").css("font-family","cursive")
// $("h1").addClass("big-title")

// console.log($("img").attr("src"))
// $("button").click(function(){
    
    // 	$("h1").css("color", "blue")
    // })
    
let index=237
const changeImageAttribute = (index) =>{
    const newAddress= `https://picsum.photos/id/${index}/200/300`
    $("img").attr("src",newAddress)
}

$("#previous").click(function(){
    changeImageAttribute(--index)
})

$("#next").click(function(){
    changeImageAttribute(++index)
})














// let index=237
// const previousButton= document.getElementById("previous")
// const nextButton= document.getElementById("next")
// const image = document.getElementById("image")

// previousButton.addEventListener("click",()=>{
//     index--
//     const newAddress = `https://picsum.photos/id/${index}/200/300`
//     console.log(newAddress)
//     image.setAttribute("src",newAddress)
// })