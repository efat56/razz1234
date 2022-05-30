// Add the coffee to local storage with key "coffee"



async function indexfolder(){
    try{
        let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
        let take=await fetch(url);
        let cake=await take.json();
        appendhere(cake.menu.data)
    } catch (err){
        console.log(err)
    }
}
indexfolder();
let array=JSON.parse(localStorage.getItem("coffee"))||[];
let p= document.querySelector("#menu");

function  appendhere(data){
    data.forEach(function(elem,index){

        let div= document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src",elem.image);
         
        let title=document.createElement("h3")
        title.innerText=`Type : ${elem.title}`;

        let price=document.createElement("h4")
        price.innerText=`price : ${elem.price}`;

        let btn=document.createElement("button");
        btn.innerText="add to bucket";
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function(){
            buckets(elem)
        })
        div.append(image,title,price,btn)
        p.append(div);

        

    })
}

function buckets(elem){
    array.push(elem)
    localStorage.setItem("coffee",JSON.stringify(array))
}
if(array!=null){
    document.querySelector("#coffee_count").innerText=array.length
}
else{
    document.querySelector("#coffee_count").innerText=0

}