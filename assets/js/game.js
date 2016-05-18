var goku = {
	name: "Goku",
	hp: 300,
	atk: 10,
	matk: 10,
	catk: 10,
	fought: false,
	victory: $('#gokuWin')[0],
	death: $('#gokuLoss')[0]
}

var krillin = {
	name: "Krillin",
	hp: 200,
	atk: 6,
	matk: 6,
	catk: 10,
	fought: false,
	victory: $('#krillinWin')[0],
	death: $('#krillinLoss')[0]
}

var gohan = {
	name: "Gohan",
	hp: 250,
	atk: 8,
	matk: 8,
	catk: 20,
	fought: false,
	victory: $('#gohanWin')[0],
	death: $('#gohanLoss')[0]
}

var hercule = {
	name: "Hercule",
	hp: 250,
	atk: 5,
	matk: 5,
	catk: 5,
	fought: false,
	victory: $('#herculeWin')[0],
	death: $('#herculeLoss')[0]
}

var cellJr = {
	name: "Cell Jr.",
	hp: 100,
	atk: 10,
	matk: 10,
	catk: 10,
	fought: false
}


var gokuPickQuote = $("#gokuPick")[0];
var krillinPickQuote = $("#krillinPick")[0];
var gohanPickQuote = $("#gohanPick")[0];
var herculePickQuote = $("#herculePick")[0];
var krillinEnemyQuote  = $("#krillinEnemyPick")[0];
var popSound = $("#pop")[0];
var hitSound = $("#hit")[0];
var playerChoice;
var enemyKrillinChar = "<img id = 'enemyKrillinChar' src = 'assets/images/krillinChar.png'>";
var newValue2;
var playerObject;
var enemyObject;
var removalString; 
  
  var hitBtn = $('health-bar2'),
      reset = $('button.reset'),
      hBar1 = $('.health-bar1'),
      bar1 = hBar1.find('.bar1'),
      hit1 = hBar1.find('.hit1'),
      hBar2 = $('.health-bar2'),
      bar2 = hBar2.find('.bar2'),
      hit2 = hBar2.find('.hit2');
  
  function takeHp1(){
  	$('.health-bar1').attr("data-value",playerObject.hp);
    var total = playerObject.hp,
    	value = hBar1.data('value');
    
    
    var damage = enemyObject.catk;
    newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    // show hit bar and set the width
    hit1.css('width', hitWidth);
    hBar1.data('value', newValue);
    setTimeout(function(){
      hit1.css({'width': '0'});
      bar1.css('width', barWidth + "%");
    }, 500); 
    
  }
  
  function takeHp2(){
  	$('.health-bar2').attr("data-value",enemyObject.hp);
    var total2 = enemyObject.hp,
        value2 = hBar2.data('value');
    
    
    var damage2 = playerObject.matk;
    var newValue2 = value2 - damage2;
    // calculate the percentage of the total width
    var barWidth2 = (newValue2 / total2) * 100;
    var hitWidth2 = (damage2 / value2) * 100 + "%";
    
    // show hit bar and set the width
    hit2.css('width', hitWidth2);
    hBar2.data('value', newValue2);
    console.log(hBar2.data('value'));
    
    setTimeout(function(){
      hit2.css({'width': '0'});
      bar2.css('width', barWidth2 + "%");
    }, 500); 
    
  }

  function doOver(){
  	/*hBar1.data('value', enemyObject.hp);
    
    hit1.css({'width': '0'});
    
		bar1.css('width', '100%');
*/
	hBar2.data('value', enemyObject.hp);
    
    hit2.css({'width': '0'});
    
		bar2.css('width', '100%');
  }


$(document).ready(function() {
	//Tosses inital character select buttons off-screen
function tossEm(){
	$(".gokuButton").animate({left:"-=2000px"}, "normal");
	$(".krillinButton").animate({left:"-=2000px"}, "normal");
	$(".gohanButton").animate({left:"-=3000px"}, "normal");
	$(".herculeButton").animate({left:"-=3000px"}, "normal");
	$("#pick").hide();
	$("#playerChoice").text(playerChoice);
	$("#choiceDisplay").css('visibility', 'visible');
	$("#playerCharacter").css('display', 'block');
}
	//Hides enemy select buttons
function hideEnemies() {
	$("#enemyGoku").css('display', 'none');
	$("#enemyKrillin").css('display', 'none');
	$("#enemyGohan").css('display', 'none');
	$("#enemyHercule").css('display', 'none');
}

function defeat(){
	setTimeout(function(){ $("#choiceDisplay").text("You've defeated " + enemyObject.name + "!");}, 0010);
		
		$(removalString).fadeOut(1500);
		console.log(removalString);
		setTimeout(function(){ bringEm();}, 0001);
		setTimeout(function(){ $("#choiceDisplay").text("Choose your next enemy");}, 5000);	
		if(krillin.fought == true){
			setTimeout(function(){ $("#krillinDowner").css('display', 'none');},1001);
		}
		$('.health-bar2').css('visibility', 'hidden');
		doOver();
		
}
	//plays respective loss quote
function deathQuote() {
	enemyObject.death.play();
}

function victoryQuote(){
	playerObject.victory.play();
}
//Shows enemy select, minus the player character
function bringEm() {
	if(playerChoice == "Goku"){
		$("#enemyCharacter").css('display', 'block');
		$("#enemyGoku").css('display', 'none');
		
		if(krillin.fought ==false){
		setTimeout(function(){ $("#enemyKrillin").css('visibility', 'visible');}, 3000);
		setTimeout(function(){$("#enemyKrillin").css('display', 'block');},3001);
		setTimeout(function(){ popSound.play();}, 3002);
		}
		if(gohan.fought ==false){
		setTimeout(function(){ $("#enemyGohan").css('visibility', 'visible');}, 3700);
		setTimeout(function(){$("#enemyGohan").css('display', 'block');},3701);
		setTimeout(function(){ popSound.play();}, 3702);
		}
		if(hercule.fought ==false){	
		setTimeout(function(){ $("#enemyHercule").css('visibility', 'visible');}, 4400);
		setTimeout(function(){$("#enemyHercule").css('display', 'block');},4401);
		setTimeout(function(){ popSound.play();}, 4402);
		}

	}

	if(playerChoice == "Krillin"){
		$("#enemyCharacter").css('display', 'block');
		$("#enemyKrillin").css('display', 'none');
		if(goku.fought ==false){
		setTimeout(function(){ $("#enemyGoku").css('visibility', 'visible');}, 3000);
		setTimeout(function(){$("#enemyGoku").css('display', 'block');},3001);
		setTimeout(function(){ popSound.play();}, 3002);
		}
		if(gohan.fought ==false){
		setTimeout(function(){ $("#enemyGohan").css('visibility', 'visible');}, 3700);
		setTimeout(function(){$("#enemyGohan").css('display', 'block');},3701);
		setTimeout(function(){ popSound.play();}, 3702);
		}
		if(hercule.fought ==false){	
		setTimeout(function(){ $("#enemyHercule").css('visibility', 'visible');}, 4400);
		setTimeout(function(){$("#enemyHercule").css('display', 'block');},4401);
		setTimeout(function(){ popSound.play();}, 4402);
		}
	}
	if(playerChoice == "Gohan"){
		$("#enemyCharacter").css('display', 'block');
		$("#enemyGohan").css('display', 'none');
		if(goku.fought ==false){
		setTimeout(function(){ $("#enemyGoku").css('visibility', 'visible');}, 3000);
		setTimeout(function(){$("#enemyGoku").css('display', 'block');},3001);
		setTimeout(function(){ popSound.play();}, 3002);
		}
		if(krillin.fought ==false){
		setTimeout(function(){ $("#enemyKrillin").css('visibility', 'visible');}, 3700);
		setTimeout(function(){$("#enemyKrillin").css('display', 'block');},3701);
		setTimeout(function(){ popSound.play();}, 3702);	
		}
		if(hercule.fought ==false){
		setTimeout(function(){ $("#enemyHercule").css('visibility', 'visible');}, 4400);
		setTimeout(function(){$("#enemyHercule").css('display', 'block');},4401);
		setTimeout(function(){ popSound.play();}, 4401);
		}	
	}

	if(playerChoice == "Hercule"){
		$("#enemyCharacter").css('display', 'block');
		$("#enemyHercule").css('display', 'none');
		if(goku.fought ==false){
		setTimeout(function(){ $("#enemyGoku").css('visibility', 'visible');}, 3000);
		setTimeout(function(){$("#enemyGoku").css('display', 'block');},3001);
		setTimeout(function(){ popSound.play();}, 3002);
		}
		if(krillin.fought ==false){
		setTimeout(function(){ $("#enemyKrillin").css('visibility', 'visible');}, 3700);
		setTimeout(function(){$("#enemyKrillin").css('display', 'block');},3701);
		setTimeout(function(){ popSound.play();}, 3702);	
		}
		if(gohan.fought ==false){
		setTimeout(function(){ $("#enemyGohan").css('visibility', 'visible');}, 4400);
		setTimeout(function(){$("#enemyGohan").css('display', 'block');},4401);
		setTimeout(function(){ popSound.play();}, 4402);
		}
	}
}

//Sets behavior for inital character select buttons
$(".gokuButton").on("click", function(){
				playerChoice = "Goku";
				playerObject = goku;
				goku.fought =true;
	    		tossEm();
	    		$("#playerCharacter").prepend("<img id = 'gokuChar' src = 'assets/images/gokuChar.png'>");
	    		gokuPickQuote.play();
	    		$('.health-bar1').css('visibility', 'visible');
	    		setTimeout(function(){ $("#choiceDisplay").text("Choose your first opponent.");}, 2000);
	    		bringEm();
			});

$(".KrillinButton").on("click", function(){
				playerChoice = "Krillin";
				playerObject = krillin;
	    		tossEm();
	    		krillin.fought =true;
	    		$("#playerCharacter").prepend("<div id =krillinUpper></div>");
	    		$("#playerCharacter").prepend("<img id = 'krillinChar' src = 'assets/images/krillinChar.png'>");
				$("#playerCharacter").prepend("<div id =krillinDowner1></div>");
				krillinPickQuote.play();
				$('.health-bar1').css('visibility', 'visible');
	    		setTimeout(function(){ $("#choiceDisplay").text("Choose your first opponent.");}, 2000);
	    		bringEm();
	    		});
$(".gohanButton").on("click", function(){
				playerChoice = "Gohan";
				playerObject = gohan;
				gohan.fought = true;
	    		tossEm();
	    		$("#playerCharacter").prepend("<div id =krillinUpper></div>");
	    		$("#playerCharacter").prepend("<img id = 'gohanChar' src = 'assets/images/gohanChar.png'>");
	    		gohanPickQuote.play();
	    		$('.health-bar1').css('visibility', 'visible');
	    		setTimeout(function(){ $("#choiceDisplay").text("Choose your first opponent.");}, 2000);
	    		bringEm();
	    		});							

$(".herculeButton").on("click", function(){
				playerChoice = "Hercule";
				playerObject = hercule;
				hercule.fought = true;
	    		tossEm();
	    		$("#playerCharacter").prepend("<div id =krillinUpper></div>");
				$("#playerCharacter").prepend("<img id = 'herculeChar' src = 'assets/images/herculeChar.png'>");
	    		herculePickQuote.play();
	    		$('.health-bar1').css('visibility', 'visible');
	    		setTimeout(function(){ $("#choiceDisplay").text("Choose your first opponent.");}, 2000);
	    		bringEm();
	    		});

//sets behavior for enemy select buttons
$("#enemyGoku").on("click", function(){
	hideEnemies();
	enemyObject = goku;
	removalString= "#enemy" + enemyObject.name + "Char";
	$('.health-bar2').attr("data-value",enemyObject.hp);
	$('.health-bar2').css('visibility', 'visible');
	$("#enemyCharacter").prepend("<img id = 'enemyGokuChar' src = 'assets/images/gokuChar.png'>");
	gokuPickQuote.play();
	goku.fought = true;
	setTimeout(function(){ $("#choiceDisplay").text("Click your opponent's HP to attack.");}, 1000);
	});	

$("#enemyKrillin").on("click", function(){
	hideEnemies();
	enemyObject = krillin;
	removalString= "#enemy" + enemyObject.name + "Char";
	$('.health-bar2').attr("data-value",enemyObject.hp);
	$('.health-bar2').css('visibility', 'visible');
	$("#enemyCharacter").prepend(enemyKrillinChar);
	$("#enemyCharacter").prepend("<div id =krillinDowner></div>")
	krillinEnemyPick.play();
	krillin.fought = true;
	setTimeout(function(){ $("#choiceDisplay").text("Click your opponent's HP to attack.");}, 1000);
	});

$("#enemyGohan").on("click", function(){
	hideEnemies();
	enemyObject = gohan;
	removalString= "#enemy" + enemyObject.name + "Char";
	$('.health-bar2').attr("data-value",enemyObject.hp);
	$('.health-bar2').css('visibility', 'visible');
	$("#enemyCharacter").prepend("<img id = 'enemyGohanChar' src = 'assets/images/gohanChar.png'>");
	gohanPickQuote.play();
	gohan.fought = true;
	setTimeout(function(){ $("#choiceDisplay").text("Click your opponent's HP to attack.");}, 1000);
	});

$("#enemyHercule").on("click", function(){
	hideEnemies();
	enemyObject = hercule;
	removalString= "#enemy" + enemyObject.name + "Char";
	$('.health-bar2').attr("data-value",enemyObject.hp);
	$('.health-bar2').css('visibility', 'visible');
	$("#enemyCharacter").prepend("<img id = 'enemyHerculeChar' src = 'assets/images/herculeChar.png'>");
	herculePickQuote.play();
	hercule.fought = true;
	setTimeout(function(){ $("#choiceDisplay").text("Click your opponent's HP to attack.");}, 1000);
	});	

//sets behavior for player attacks
$('.health-bar2').on("click", function(){
	
	if (hBar2.data('value')<=0){
		defeat();
		setTimeout(function(){ deathQuote();}, 0011);
		setTimeout(function(){ victoryQuote();}, 3500);
		
	}

	/*else if(((goku.fought = true) && (krillin.fought = true)) && ((gohan.fought = true) && (hercule.fought = true))){
			$("#choiceDisplay").text("You win!");
		}*/

	else{
	takeHp1();
	takeHp2();
	playerObject.matk+=playerObject.atk;
	hitSound.play();
	console.log(hBar2.data('value'));
	}

});

});
