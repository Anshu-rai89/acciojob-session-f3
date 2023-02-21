var product = new Object();
// You have to pass key value in string
product["name"] = "IPhone";
product.category = "phone";
product.price= 40000;
product.category = ["phone", "iphone", "apple", "mid-range"];
product.isAvailable = true;
product.giveDiscount = function (discountPercentage) {
    console.log(product);
   // It allow us to refer to same object using which it is getting created
     var discountValue =  Math.floor(this.price * (discountPercentage /100 ))
     return this.price - discountValue;
};

console.log(product.giveDiscount());

var product = {
    name: "IPhone",
    price: 20000,
    giveDiscount :function (discountPercentage) { console.log(product);
   // It allow us to refer to same object using which it is getting created
     var discountValue =  Math.floor(this.price * (discountPercentage /100 ))
     return this.price - discountValue;
}
};

const user = {
    name : "Anshu",
    weight : 65, 
    isOverWeight: function () {
        return this.weight > 50 
    }
}

user.isOverWeight();
console.log(product.giveDiscount());
console.log(this);

console.log("Ans", eval("+1+2-3*5-"));