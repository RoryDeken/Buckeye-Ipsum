(function(){
  var dictionary =
  [
    'woody','Archie Griffin', 'WOSU' ,'oval', 'mirror lake', 'horseshoe', 'moritz', 'scarlet',
  'gray', 'Brutus', 'buckeye leaf', 'ohio state', 'the union'
  ,'tbdbitl', 'OH-IO', 'script ohio', 'carmen ohio', 'Hagerty hall' , 'Fisher', 'John Glenn',
  'buckeyes' , 'Lee Horvath', 'Michael Redd', 'the Lantern', 'Morrill', 'Hayes' ,'st. john\'s'
  ,'excellence', 'Urban Meyer', 'Hoppalong Cassidy', 'Woody Hayes', 'Columbus', 'Orlando Pace',
  '14-0', 'Olentangy river', 'Les Wexner', 'Mike Conley', 'Ryan Shazier', 'Eddie George', 'Dr. Michael Drake',
  'RPAC' , 'Skull Session', '1870', 'Jack Nicklaus'
],
stringDictionary = [];


var target = document.getElementById("target"), count = 0, text, type, limit, paragraph, spacing, bounds;

for(i=0; i < dictionary.length; i++){

    for(j=0; j < dictionary[i].length; j++){
      var ch = dictionary[i].charAt(j);
      stringDictionary.push(ch);
    }

}


document.getElementById('controls').addEventListener("change", generate);
limit = document.getElementById('quantity').value - 1;
type = parseInt(document.getElementById('type').value);

function printWords(type = 2){
  text = 'Buckeye Ipsum ';
bounds = 0;
if(type == 3){
  limit = paragraph * limit;
}
  for(i = 0; i < limit ; i ++){

    spacing = i % paragraph;
    console.log(spacing);

    if(bounds >= dictionary.length ){
      bounds = 0;
    }
    if(spacing == 0 && Number.isInteger(spacing) && i != 0){
      text = text + ".<br><br>";
    }
    text = text + " " +  dictionary[bounds];
    bounds = bounds + 1;

  }

}


function generate(event){
  event.preventDefault();
  limit = document.getElementById('quantity').value;
  type = parseInt(document.getElementById('type').value);
  paragraph = document.getElementById('paragraph-length').value;
count = 0;
if(limit > 0){
switch(type){
  case 1:
  text = '';
  bounds = 0;
  for(i = 0; i < limit ; i ++){
    if(bounds > stringDictionary.length){
      bounds = 0;
    }
    text = text + stringDictionary[bounds];
    bounds = bounds + 1;
  }


  break;

  case 2:
  printWords();
  break;

  case 3:
  printWords(3);
  break;



}
}else {
  text = '';
}
target.innerHTML = text;
text = '';

}
new ClipboardJS('#copy');
})();
