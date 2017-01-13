var car = {
   brand: "Honda",
    model: “Civic”,
   numberOfDoors: 4,
   automatic: true,
   color: “blue”,
   miles: 0,
   driveOneMile: function(){
       miles++;
       return this.miles;
   } 
};

console.log(car.color);