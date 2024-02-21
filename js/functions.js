function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}
// const result = getConvertedValue("bus") ;
// console.log( result);

// --------2----------------
const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn){
    btn.addEventListener("click",function(event){
        const set = event.target.innerText;
        console.log(set);

       const selectSet = document.getElementById("select-set");
       const div=document.createElement("div");
       div.classList.add("select-set")
       const p1=document.createElement("p");
       p1.innerText = set;
       
       div.appendChild(p1)
       
       selectSet.appendChild(div);
    })
}