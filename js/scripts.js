// business logic











// user interface

$(document).ready(Function(event){
  $("#grocList").submit(function(){
    event.preventdefault();

    const food1 = $("input#item1").val();
    const food2 = $("input#item2").val();
    const food3 = $("input#item3").val();
    const food4 = $("input#item4").val();
    const food5 = $("input#item5").val();

    let grocAr = [food1, food2, food3, food4, food5]
    grocAr.sort();
    let finalList = grocAr.map(function(food){
      return food.charAt(0).toUpperCase() + food.slice(1);
      });
    })
    console.log(finalList);
  });
});