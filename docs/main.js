// (function(){
  var dictionary =
  [
    'woody','Archie Griffin', 'WOSU' ,'oval', 'mirror lake', 'horseshoe', 'moritz', 'scarlet',
  'gray', 'Brutus', 'buckeye leaf', 'ohio state', 'the union'
  ,'tbdbitl', 'OH-IO', 'script ohio', 'carmen ohio', 'Hagerty hall' , 'Fisher', 'John Glenn',
  'buckeyes' , 'Lee Horvath', 'Michael Redd', 'the Lantern', 'Morrill', 'Hayes' ,'st. john\'s'
  ,'excellence', 'Urban Meyer', 'Hoppalong Cassidy', 'Woody Hayes', 'Columbus', 'Orlando Pace',
  '14-0', 'Olentangy river', 'Les Wexner', 'Mike Conley', 'Ryan Shazier', 'Eddie George', 'Dr. Michael Drake',
  'RPAC' , 'Skull Session', '1870', 'Jack Nicklaus'
], target = document.getElementById("target"), count = 0, text, type, limit;

document.getElementById('submit').addEventListener("click", generate);
// 90 words = paragraph

   function rand() {Math.floor(Math.random() * dictionary.length - 1);}

function generate(event){
  event.preventDefault();
  limit = document.getElementById('quantity').value;
  type = parseInt(document.getElementById('type').value);
  console.log(type);
  if(type == 1){
while(count < limit){
  var randNum = rand();
count = count + dictionary[randNum].length;
text = text + " " + dictionary[randNum];
console.log(randNum);
}
}else if (type == 2) {
  for(i = 0; i < limit ; i ++){

var randNum = rand();
text = text + " " +  dictionary[randNum];
console.log(randNum);



  }

}else {
  for(i = 0; i < limit ; i ++){

    for(j = 0; j < 90 ; j ++){
var randNum = rand();
text = text + " " +  dictionary[randNum];
console.log(randNum);
  }
  text = text + "<br />";


}


}
  target.innerText = '';

  target.innerText = text;
}
// })();
