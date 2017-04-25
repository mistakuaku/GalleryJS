var chico = ["Selvester's Cafe", "The Rec", "O'Connel", "Meriam Library", "Glenn Hall"];
var current;

function shuffleGallery()
{

  var len = chico.length;
  var randInt = Math.floor(Math.random() * len);
  //console.log(randInt);
  //console.log(current);
  if (randInt == current)
  {
    while(randInt == current)
    {
      randInt = Math.floor(Math.random() * len);
    }
  }

  current = randInt;
  console.log(chico[randInt]);


}
