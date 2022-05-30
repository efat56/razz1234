// On clicking remove button the item should be removed from DOM as well as localstorage.

let array=JSON.parse(localStorage.getItem("coffee"))||[];
let givehere=document.querySelector("#bucket");
let sum=0;
let sift=array.reduce(function(acc,elem){
    sum=sum+Number(elem.price);
},0)
let puttotal=document.querySelector("#total_amount").innerHTML=sum;
mozilla(array);

function mozilla(data){
    data.forEach(function(elem,index){
        
        let div= document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src",elem.image);
         
        let title=document.createElement("h3")
        title.innerText=`Type : ${elem.title}`;

        let price=document.createElement("h4")
        price.innerText=`price : ${elem.price}`;

        let btn=document.createElement("button");
        btn.innerText="remove-item";
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function(){
            coffee(elem)
        })
        div.append(image,title,price,btn)
        givehere.append(div);


        
    })
}
function coffee(elem,index){
    array.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(array))
    window.location.reload;
}

