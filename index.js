let display = "";
$(".button.display").click((e)=>{
  display += e.target.textContent;
  $("#outputDisplay").text(display);
});

$("#calculate").click(() => {
  if(/\W\W/.test(display)){
    display = 'Invalid Input';
    $("#outputDisplay").text(display);
  }
  display = eval(display);
  if(eval(display) % 1 !== 0){
    display = display.toFixed(2);
  }
  $("#outputDisplay").text(display);
});

$("#clear").click(() => {
  display = "";
  $("#outputDisplay").text(display);
});

$("#delete").click(() => {
  display = display.slice(0, display.length-1);
  $("#outputDisplay").text(display);
});
