function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}
// const result = getConvertedValue("bus") ;
// console.log( result);

// --------2----------------
const allBtn = document.getElementsByClassName("add-btn");

// for (const btn of allBtn){
//     btn.addEventListener("click",function(event){
//         const set = event.target.innerText;
//         console.log(set);

//        const selectSet = document.getElementById("select-set");
//        const div=document.createElement("div");
//        div.classList.add("select-set")
//        const p1=document.createElement("p");
//        p1.innerText = set;

//        div.appendChild(p1)

//        selectSet.appendChild(div);
//     })
// }
// Economoy------------------

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const set = event.target.innerText;
        console.log(set);

        const selectSet = document.getElementById("select-set");


        event.target.setAttribute("disabled", false);
        event.target.parentNode.style.backgroundColour = "gray";









        const setClass = document.getElementById("set-class");
        const setPrice = document.getElementById("taka");


        // 
        
        
       
        // set left

        const setLeft = getConvertedValue("left");
        document.getElementById("left").innerText = setLeft - 1;
        const setCount = getConvertedValue("left");
        console.log(setCount);
        if(setCount  < 1){
            alert("No more set left")
            return setCount;
        }
    //    hight set count

        const noSet = getConvertedValue("no-more-set");
        document.getElementById("no-more-set").innerText = noSet - 1;
        const noCount = getConvertedValue("no-more-set");
        console.log(noCount);
        if(noCount  < 1){
            alert("No more set left")
            return noCount;
        }











        const div = document.createElement("div");
        div.classList.add("set-book")
        div.classList.add("select-set")
        div.classList.add("set-class")
        div.classList.add("taka")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = set;
        p2.innerText = "Economoy";
        p3.innerText = "550";

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectSet.appendChild(div);

        updateTotalCast("550")
        updateGrandTotal()

    })
}


// total cost-----------------------------

function updateTotalCast(value) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;

}

// update grant total --------------------
function updateGrandTotal() {
    const totalCost = getConvertedValue("total-cost");
    document.getElementById("grand-total").innerText = totalCost;

}
// coupon-code ----------------------
function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {

        document.getElementById("grand-total").innerText = totalCost;

    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode == "NEW15") {
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discounted;


        }

        else if (couponCode == "Couple 20") {
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else {
            alert("Please enter valid coupon code")
        }
    }
}

// set left ------------------------


