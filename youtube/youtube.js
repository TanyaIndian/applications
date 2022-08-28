let tanyakey="AIzaSyBIr9nic1tdAWqj5Fxwc6HL-8Epw7Ifa4E"

show= async()=>{
    let come= document.querySelector("#movievalue").value
    if(come==""){
        alert("please type video name first")
    }
    else{


        try{

let come= document.querySelector("#movievalue").value
let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${tanyakey}&q=${come}&type=video&maxResults=20&part=snippet`)
let data= await res.json()
let r= data.items
//   console.log(data)
console.log(r)
display(r)
}

catch(err){
console.log("err",err)
}

}
}


trend= async()=>{
 
  

        try{


let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=latest&type=video&maxResults=20&part=snippet`)
let data= await res.json()
let r= data.items
//   console.log(data)
console.log(r)
display1(r)
}

catch(err){
console.log("err",err)
}

}


display1=(d)=>{
console.log(d)
document.querySelector("#container").innerHTML=""

d.forEach((el)=>{

const { id:{videoId},snippet:{title,thumbnails:{high}}}= el;
console.log(videoId)

console.log(high)
let div=document.createElement("div")

//   let i=document.createElement("iframe")
//      i.src=`https://www.youtube.com/embed/${videoId}`
//       i.setAttribute("allowfullscreen",true)

let tit=document.createElement("h5")
tit.textContent=title
var image=document.createElement("img")
image.src=high.url



div.append(image,tit)
document.querySelector("#container").append(div)



})
}
trend()











display=(d)=>{
console.log(d)
document.querySelector("#container").innerHTML=""

d.forEach((el)=>{

const { id:{videoId},snippet:{title,thumbnails:{high}}}= el;
console.log(videoId)

console.log(high)
let div=document.createElement("div")

//   let i=document.createElement("iframe")
//      i.src=`https://www.youtube.com/embed/${videoId}`
//       i.setAttribute("allowfullscreen",true)

let tit=document.createElement("h5")
tit.textContent=title
var image=document.createElement("img")
image.src=high.url

//   let locstore={

// title,videoId

//   }
image.addEventListener("click",function(){
next(videoId,title)


})




div.append(image,tit)
document.querySelector("#container").append(div)

 
})
}

function next(v,t){

localStorage.setItem("secpage",JSON.stringify(v,t))
window.location.href="youtube2.html"

}



// /______________________________________________________________________________________________________________/ 


var bhej= JSON.parse(localStorage.getItem("secpage"))

    var div=document.createElement("div")

    let i=document.createElement("iframe")

     i.src=`https://www.youtube.com/embed/${bhej}`
      i.setAttribute("allowfullscreen",true)
    
      

      document.querySelector("#dusra").append(i)

