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
  ];
  var target = document.getElementById("target"), count;

document.getElementById('submit').addEventListener("click", generate);

function generate(event){
  event.preventDefault();
  count = document.getElementById('quantity').value;
  type = parseInt(document.getElementById('type').value);
  target.innerText = '';
  for(i = 0; i < count ; i ++){

var rand = Math.floor(Math.random() * (dictionary.length - 0) -1);

    target.innerText = target.innerText + " " + dictionary[rand];


  }
}
})();
