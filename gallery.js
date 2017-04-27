var chico = [
   {description: "Selvester's Cafe",
    picture: "https://www.csuchico.edu/maps/images/buildings-photos/buildings-selvestors.jpg",
    from: "csuchico.edu"
   },
   {description: "The Rec",
   picture: "https://www.csuchico.edu/pdc/images/CP-2009-WREC/WREC-at-night.jpg",
   from: "csuchico.edu"
   },
   {description: "O'Connel",
    picture: "http://www.csuchico.edu/maps/images/buildings-photos/buildings-oconnell.jpg",
    from: "csuchico.edu"
   },
   {description: "Meriam Library",
    picture: "http://www.csuchico.edu/maps/campus/images/meriam.jpg",
    from: "csuchico.edu"
   },
   {description: "Glenn Hall",
    picture: "https://www.csuchico.edu/maps/images/buildings-photos/building-glenn.jpg",
    from: "csuchico.edu"
   }
 ];

var current;


function shuffleGallery()
{

  var len = chico.length;
  var randInt = Math.floor(Math.random() * len);
  //console.log(randInt);
  //console.log(current);

    while(randInt == current)
    {
      randInt = Math.floor(Math.random() * len);
    }


  current = randInt;
  console.log(chico[randInt]);
  document.getElementById("picture").src = chico[randInt].picture;
  document.getElementById("caption").innerHTML = chico[randInt].description;
  document.getElementById("source").innerHTML = chico[randInt].from;
}
