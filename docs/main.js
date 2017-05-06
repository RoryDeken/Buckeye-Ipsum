(function(){
  var dictionary =
  [
    'woody','Archie Griff', 'oval', 'mirror lake', 'horseshoe', 'moritz', 'scarlet',
  'gray', 'Brutus', 'buckeye leaf', 'ohio state', 'the union'
  ,'tbdbitl', 'OH-IO', 'script ohio', 'carmen ohio', 'Hagerty hall' , 'Fisher', 'John Glenn',
  'buckeyes' , 'Lee Horvath', 'Michael Redd', 'st. john\'s' ,'excellence', 'Urban Meyer', 'Hoppalong Cassidy', 'Woody Hayes', 'Columbus', 'Orlando Pace', '14-0', 'Olentangy river', 'Les Wexner', 'Mike Conley', 'Ryan Shazier', 'Eddie George', 'Dr. Michael Drake', 'RPAC' , 'Skull Session', '1870'
  ];
  var target = document.getElementById("target"), count;

document.getElementById('submit').addEventListener("click", generate);

function generate(event){
  event.preventDefault();
  count = document.getElementById('quantity').value;
  for(i = 0; i < count ; i ++){


    target.innerText = target.innerText + " " + dictionary[i];


  }
}
})();
