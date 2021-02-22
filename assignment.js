//  first part of assignment//
var kilometer = 5;

  function kilometerToMeter(kilometer) {

        var meter = kilometer * 1000 ;
        return meter ;      
  }
  var result = kilometerToMeter(7)
 console.log(result);

//    second part //
function budgetCalculator(watch , phone , laptop ) {
        var watchPrice = 50
        var totalWatchPrice = watch * watchPrice ; 
        var phonePrice = 100;
        var totalPhonePrice= phone * phonePrice; 
        var laptopPrice = 500 ;
        var totalLaptopPrice = laptop * laptopPrice; 
         var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice  
         return totalPrice 
   } 
   var totalBudget = budgetCalculator( 3,2,2);
   console.log(totalBudget)
   //  third part

   function hotelCost(stayingDays){
totalCost = 0
if (stayingDays <= 10) { 
       totalCost = stayingDays * 100
        
}  else if (stayingDays <=20) {
        var first10Days = 10*100 ;
        var remainingDays = stayingDays - 10 ;
        var second10Days = remainingDays * 80;
       totalCost = first10Days + next10Days;

        
} else { var first10Days = 10 * 100 ; 
        var second10Days = 10 * 80;
        remainingDays = stayingDays -20;
         nextStayingDays = remainingDays * 50;
        totalCost =  first10Days + second10Days + nextStayingDays;



}return totalCost;
} 
 var totalHotelCost = hotelCost(32);
 console.log(totalHotelCost);
   //  4th Part

function megaFriend(names) { 
        var lgth = [0]
       
         for (var i = 0; i < names.length; i++) {
        
          if (names.length > lgth ) {
                  var lgth = names[i].length
             
                  longest = names[i]
                  
          }
        
} return longest
  
}  

 var names = megaFriend(["lima","Pinky","Ema","Ipa","farhana" ,"Mou"])
console.log(names);


       
 

 