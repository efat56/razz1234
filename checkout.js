document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();
    let obj={
        name:form.name.value,
        number:form.number.value,
        address:form.address.value,
    };

    setTimeout(function(){
        alert("your order is acccepted")
    },0000)

    setTimeout(function(){
        alert ("your order is being prepared")
    },3000)

    setTimeout(function(){
        alert ("your order is being packed")
    },8000)

    setTimeout(function(){
        alert ("order is delivered")
    },12000)
}