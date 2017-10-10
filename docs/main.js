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
], target = document.getElementById("target"), count = 0, text, type, limit, randNum = 0;

document.getElementById('submit').addEventListener("click", generate);
// 90 words = paragraph

   function generateRandomNumber() {

     return Math.floor(Math.random() * dictionary.length);
   }

function generate(event){
  event.preventDefault();
  limit = document.getElementById('quantity').value;
  type = parseInt(document.getElementById('type').value);
  randNum = generateRandomNumber();
  console.log("Rand num is " + randNum);
  console.log("The type is: " + type);
  console.log("Limit is: " + limit);
count = 0;
  if(type == 1){
while(count < limit){
count++;
text = text + " " + dictionary[(randNum + count)];
console.log(randNum);
}
randNum = 0;
}else if (type == 2) {
  for(i = 0; i < limit ; i ++){

text = text + " " +  dictionary[(randNum + i)];
console.log(randNum);
  }
randNum = 0;
}else {
  for(i = 0; i < limit ; i ++){
randNum++;
    for(j = 0; j < 90 ; j ++){
text = text + " " +  dictionary[(randNum + i)];
console.log(randNum);
  }
  text = text + "<br />";


}
randNum = 0;
count = 0;

}
  target.innerHTML = '';

  target.innerText = text;
}
// })();
