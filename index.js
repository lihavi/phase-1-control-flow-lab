function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if (someNumber<= 400){
    return "This one is on me!"
  }
  else if (someNumber < 2500){
    return `I will gladly take your thirty bucks.`
  }
  else  {
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === `NYC`? "Ok, sounds good.": "No go."
}
  


function switchOnCharmFromTip(tip){
switch(tip){
  case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
      break;
      default: 'if anything else';
      return 'Bye.'
}
}


