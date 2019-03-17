		$(document).ready(function()
		{
			$('#gameOverPage').hide();
		});
		
		

		//SOUND DEFINITIONS

		var soundison = true;

		var menuMusic = document.createElement('audio');
		menuMusic.setAttribute('src','audios/AB bg music.mp3');
		menuMusic.loop = true;

		var btnclick =document.createElement('audio');
		btnclick.setAttribute('src' , 'audios/AB btn click.wav');

		var wrongSE = document.createElement('audio');
		wrongSE.setAttribute('src', 'audios/wrongSE.wav');
		
		var correctSE = document.createElement('audio');
		correctSE.setAttribute('src', 'audios/correctSE.wav');
		
		var gameOverSE = document.createElement('audio');
		gameOverSE.setAttribute('src', 'audios/gameOverSE.wav');

		var errorSE = document.createElement('audio');
		errorSE.setAttribute('src', 'audios/errorSE.wav');
		//----------
		var maxNum = 12;
		var current_score = 0;
		var gid = 0;
		var exid = 0;
		var gamestatus = 0;
		var nextPiece = 0;
		var fallspeed = 15
		var speedtrigger= 0;
		var arrEquation = [] ;
		var y = 0;
		//positioning
		var xarr =[ 13 , 59 , 104 , 149 , 194 , 239 ];
		var xpos = getRandomNumber(5,0);
		var ypos = [ 275 , 230 , 185 , 140 , 95 , 50 , 5];
		var realNextYPos;
		var arrXPOS1 = [] , arrXPOS2 = [] , arrXPOS3 = [] , arrXPOS4 = [] , arrXPOS5 = [] , arrXPOS6 = [];
		var disabled = 'operator';
		//end positioning
		
		var disableChecker;
		
		var operators = Array('+' , '-' , '+' , '+' , '/' , '*');	
		var addoperator = 3;

		function start()
		{	
			//$('#equationBar').attr('maxlength' , 1);

			if (gamestatus == 0 )
			{

				$('#answerBox').text(getRandomNumber(maxNum,2));
			}
					var operand = getRandomNumber(9,1);
					var operator = getRandomNumber(addoperator,0);

					var box = document.createElement("div");
					$(box).addClass("moving box");
					$(box).attr('id', 'nBox'+gid);




					if (nextPiece <=1)
					{
						$(box).addClass("operand");
						$(box).text(operand);
						nextPiece++;
					}
					else
					{
						$(box).addClass("operator disabled");
						$(box).text(operators[operator]);
						nextPiece = 0;
					}

			 disableChecker = setInterval(function()
			{
					if (disabled == 'operator')
					{
						$('.operator').addClass('disabled');
						$('.operand').removeClass('disabled');
					}
					else if (disabled == 'operand')
					{
						$('.operand').addClass('disabled');
						$('.operator').removeClass('disabled');
					}
			},1);


					
					box.style.position = "absolute";
					box.style.left = xarr[xpos] + 'px';
					realNextYPos = checkXPos(xarr[xpos],$(box).attr('id'));	

					$('#mainBoard').append(box);
					//console.log($(box).attr('class'));
					

					//--------------ACTION SCRIPTS
				
					$('.box').click(function()
					{
						//console.log($(this).attr('class'));

						$(this).addClass('highlighted');
						var data = $(this).text();

						$('#equationBar').val($('#equationBar').val()+data);
						
						var back_id = $(this).attr('id');
						arrEquation.push(back_id);

						if (isNaN(parseInt(data)))
						{
							disabled = 'operator';
						}
						else
						{
							disabled = 'operand';
						}

						console.log(error); // IMPORTANT PARA HINDI MAG DOBLE YUNG CLICK
					
					});

					//----------- END OF ACTION SCRIPTS
					gamestatus = 1;
				
		}

			function updatePos()
			{

				
				 //var currentY = 0;
				 var update = setInterval(function()
				 {
				 		y+=1;
				 		$('#nBox'+gid).css({
				 		top: y  +'px'
				 		});
				 		//console.log(realNextYPos);
				 		

				 		if (y==realNextYPos)
				 		{

				 			//currentY++;
				 			xpos = getRandomNumber(5,0);
				 			$('#nBox'+gid).removeClass('moving');
				 			$('#nBox'+gid).addClass('ready');
				 			slideDown();
				 			gid++;
				 			y=0;
				 			start();

				  		}
				  		else if(realNextYPos == undefined )
				 		{
				 				menuMusic.loop = false;
								menuMusic.pause();
				 				gameOverSE.play();
				 				$('.box').addClass('disabled');
				 				$('#single_page').css(
				 				{
				 					opacity: 0.3
				 				});
				 				clearInterval(disableChecker);
				 				clearInterval(update);
				 				$('#nBox'+gid).css(
				 				{
				 					backgroundColor: 'red'
				 					//top: '-15px'
				 				});

				 				var old_highscore = $('#highest_score').text();
				 				if(current_score > old_highscore)
				 				{
				 					window.localStorage.setItem("highscore",current_score);
				 				}

				 				$('#gameOverPage').show();
				 			
				 		}


				 },fallspeed);

			}

		function getRandomNumber(max,min){
			return Math.floor(Math.random()*(max-min+1))+min;
		}


		function checkXPos($xpos , $id)
		{
			var nextYPos;

			if ($xpos == 13) 
			{
				arrXPOS1.push($id);
				nextYPos = ypos[arrXPOS1.length-1];
				
			}
			else if ($xpos == 59) 
			{
				arrXPOS2.push($id);
				nextYPos = ypos[arrXPOS2.length-1];
				
			}
			else if ($xpos == 104) 
			{
				arrXPOS3.push($id);
				nextYPos = ypos[arrXPOS3.length-1];
				
			}
			else if ($xpos == 149) 
			{
				arrXPOS4.push($id);
				nextYPos = ypos[arrXPOS4.length-1];
				
			}
			else if ($xpos == 194) 
			{
				arrXPOS5.push($id);
				nextYPos = ypos[arrXPOS5.length-1];
				
			}
			else if ($xpos == 239) 
			{
				arrXPOS6.push($id);
				nextYPos = ypos[arrXPOS6.length-1];
				
			}

			return nextYPos;
		}





		function begin()
		{
			start();
			updatePos();

		}


function clearStats()
{
				$('.operator').removeClass('highlighted');
				$('.operand').removeClass('highlighted');
				$('.operand').removeClass('disabled');

				disabled = 'operator';
				$('.operator').addClass('disabled');
				$('#equationBar').val('');
}

function slideDown()
{
	$('.ready').each(function()
	{

		var x = $(this).css('left');
		var id = $(this).attr('id');
		var uid;	
			if (x == "13px") 
			{
				uid = arrXPOS1.indexOf(id);
		//		console.log(ypos[uid] + 'id' + $(this).attr('id') + ' - ' + $(this).text());
				
			}
			else if (x == "59px") 
			{
				uid = arrXPOS2.indexOf(id);
				
		//		console.log(ypos[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
					
			}
			else if (x == "104px") 
			{
				uid = arrXPOS3.indexOf(id);
		//		console.log(ypos[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "149px") 
			{
				uid = arrXPOS4.indexOf(id);
		//		console.log(ypos[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "194px") 
			{
				uid = arrXPOS5.indexOf(id);
		//		console.log(ypos[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "239px") 
			{
				uid = arrXPOS6.indexOf(id);
		//		console.log(ypos[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}

			var newPos = ypos[uid];
			
			$(this).animate(
			{
					top: newPos+'px'
			});



	});
}

function back()
{
	var back_id = arrEquation.length - 1;
	
	var queryID = eval("'"+"#"+arrEquation[back_id]+"'");
	var data = $(queryID).text();
	var checkIfUndefined = $(queryID).html();

	var currentEquation = $('#equationBar').val();
	var newEquation = currentEquation.slice(0,back_id);
	arrEquation.splice(back_id,1);
	$('#equationBar').val(newEquation);
	
	$(queryID).removeClass('highlighted');
	if (checkIfUndefined == undefined)
	{
		//do nothing
	//	console.log(data);
	}
	else if (isNaN(parseInt(data)))
	{
		disabled = 'operand';
		$('.operator').removeClass('disabled');
	//	console.log(data);
	}
	else
	{
		disabled = 'operator';
		$('.operand').removeClass('disabled');
	//	console.log(data);	
	}

//	console.log(queryID + data);
}

function posUpdate(nr_id)
{
	$('.not-ready').each(function()
			{
				
				$(this).animate(
				{
					top: ypos[nr_id]+'px'
				});				
			});
}

function inc()
{
	var num = parseInt($('#answerBox').text());
	$('#answerBox').text(num+1);
	
	$('.moving').each(function()
	{
		$(this).removeClass('moving');
		$(this).addClass('ready');
	});
	xpos = getRandomNumber(5,0);
	y=0;
	gid++;
	slideDown();
	start();
	

}

function dec()
{
	var num = parseInt($('#answerBox').text());
	$('#answerBox').text(num-1);

	$('.moving').each(function()
	{
		$(this).removeClass('moving');
		$(this).addClass('ready');
	});
	xpos = getRandomNumber(5,0);
	y=0;
	gid++;
	slideDown();
	start();
	//$('#gameOverPage').show();	
}

function deleteFromArray()
{
	$('.highlighted').each(function()
	{
		var x = $(this).css('left');
		var id = $(this).attr('id');


			if ( x == "13px") 
			{
				arrXPOS1.splice(arrXPOS1.indexOf(id),1);
			}
			else if (x == "59px") 
			{
				arrXPOS2.splice(arrXPOS2.indexOf(id),1);	
			}
			else if (x == "104px") 
			{
				arrXPOS3.splice(arrXPOS3.indexOf(id),1);
			}
			else if (x == "149px") 
			{
				arrXPOS4.splice(arrXPOS4.indexOf(id),1);
			}
			else if (x == "194px") 
			{
				arrXPOS5.splice(arrXPOS5.indexOf(id),1);
			}
			else if (x == "239px") 
			{
				arrXPOS6.splice(arrXPOS6.indexOf(id),1);
			}

	});
}



//----
function extraBox()
{
					xpos = getRandomNumber(5,0);
					var operand = getRandomNumber(9,1);
					var operator = getRandomNumber(3,0);

					var box = document.createElement("div");
					$(box).addClass("box ready");
					$(box).attr('id', 'eBox'+exid);


					if (nextPiece <=1)
					{
						$(box).addClass("operand");
						$(box).text(operand);
						nextPiece++;
					}
					else
					{
						$(box).addClass("operator disabled");
						$(box).text(operators[operator]);
						nextPiece = 0;
					}
					
					box.style.position = "absolute";
					box.style.left = xarr[xpos] + 'px';
					realNextYPos = checkXPos(xarr[xpos],$(box).attr('id'));	

					$('#mainBoard').append(box);
					//console.log($(box).attr('class'));
					


				
}


function rematch()
{
	$('#gameOverPage').hide();
	$('#single_page').css({opacity: 1});
	$('.box').each(function()
	{
		$(this).remove();
	});

		 maxNum = 12;
		 current_score = 0;
		 gid = 0;
		 exid = 0;
		 gamestatus = 0;
		 nextPiece = 0;
		 fallspeed = 15
		 speedtrigger= 0;
		 arrEquation = [] ;
		 y = 0;
		
		 xpos = getRandomNumber(5,0);
	    
		 arrXPOS1 = [] , arrXPOS2 = [] , arrXPOS3 = [] , arrXPOS4 = [] , arrXPOS5 = [] , arrXPOS6 = [];
		 disabled = 'operator';
		
		
		
		
		begin();

		
	
}


function countdown()
{
	
    var elem = $('.count-num');
    var num = 4;
    var count = setInterval(function() 
    {
    	if (num < 1) 
    	{
    		clearInterval(count);
    		$('.countdown').hide();
    		menuMusic.play();
    		begin();
    	}
    	else
    	{
    			
	        if (elem.css('visibility') == 'hidden')
	         {
	         	$('.count-num').text(num);
	            elem.css('visibility', 'visible');

	        } 
	        else 
	        {
	            elem.css('visibility', 'hidden');
	            num--;
	        }
	        console.log(num);
	         
	     }
           
    }, 500);
}
