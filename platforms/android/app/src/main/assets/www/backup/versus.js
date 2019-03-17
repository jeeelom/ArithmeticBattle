		$(document).ready(function()
		{
			$('#gameOverPage').hide();
		});
		
		
		//var current_score = 0;
		var gid2 = 0;
		var exid2 = 0;
		var gamestatus2 = 0;
		var nextPiece2 = 0;
		var fallspeed2 = 20;
		var speedtrigger2 = 0;
		var arrEquation2 = [] ;
		var y2 = 0;
		//positioning
		var xarr2 =[ 5 , 45 , 85 , 125 , 165 , 205 ];
		var xpos2 = getRandomNumber(5,0);
		var ypos2 = [ 240 , 200 , 160 , 120 , 80 , 40 , 1];
		var realNextYPos2;
		var arr2XPOS1 = [] , arr2XPOS2 = [] , arr2XPOS3 = [] , arr2XPOS4 = [] , arr2XPOS5 = [] , arr2XPOS6 = [];
		var disabled2 = 'operator2';
		//end positioning
		
		var disableChecker2;
		
		var operators2 = Array('+' , '-' , '/' , '*');	


		function start2()
		{	
			//$('#equationBar').attr('maxlength' , 1);

			
					var operand2 = getRandomNumber(9,1);
					var operator2 = getRandomNumber(3,0);

					var box2 = document.createElement("div");
					$(box2).addClass("moving2 box2");
					$(box2).attr('id', 'nBox2'+gid2);




					if (nextPiece2 <=1)
					{
						$(box2).addClass("operand2");
						$(box2).text(operand2);
						nextPiece2++;
					}
					else
					{
						$(box2).addClass("operator disabled");
						$(box2).text(operators2[operator2]);
						nextPiece2 = 0;
					}

			 disableChecker2 = setInterval(function()
			{
					if (disabled2 == 'operator2')
					{
						$('.operator2').addClass('disabled2');
						$('.operand2').removeClass('disabled2');
					}
					else if (disabled2 == 'operand2')
					{
						$('.operand2').addClass('disabled2');
						$('.operator2').removeClass('disabled2');
					}
			},1);


					
					box2.style.position = "absolute";
					box2.style.left = xarr2[xpos2] + 'px';
					realNextYPos2 = checkXPos2(xarr2[xpos2],$(box2).attr('id'));	

					$('#mainBoard2').append(box2);
					//console.log($(box).attr('class'));
					

					//--------------ACTION SCRIPTS
				
					$('.box2').click(function()
					{
						console.log($(this).attr('class'));

						$(this).addClass('highlighted2');
						var data = $(this).text();

						$('#equationBar2').val($('#equationBar2').val()+data);
						
						var back_id = $(this).attr('id');
						arrEquation2.push(back_id);

						if (isNaN(parseInt(data)))
						{
							disabled2 = 'operator2';
						}
						else
						{
							disabled2 = 'operand2';
						}

						console.log(error); // IMPORTANT PARA HINDI MAG DOBLE YUNG CLICK
					
					});

					//----------- END OF ACTION SCRIPTS
					gamestatus2 = 1;
				
		}

			function updatePos2()
			{

				
				 //var currentY = 0;
				 var update2 = setInterval(function()
				 {
				 		y2+=1;
				 		$('#nBox2'+gid2).css({
				 		top: y2  +'px'
				 		});
				 		console.log(realNextYPos2);
				 		

				 		if (y2==realNextYPos2)
				 		{

				 			//currentY++;
				 			xpos2 = getRandomNumber(5,0);
				 			$('#nBox2'+gid2).removeClass('moving2');
				 			$('#nBox2'+gid2).addClass('ready2');
				 			slideDown2();
				 			gid2++;
				 			y2=0;
				 			start2();

				  		}
				  		else if(realNextYPos2 == undefined )
				 		{
				 				gameOverSE.play();
				 				$('.box2').addClass('disabled2');
				 				$('#versus2').css(
				 				{
				 					opacity: 0.3
				 				});
				 				clearInterval2(disableChecker2);
				 				clearInterval2(update2);
				 				$('#nBox2'+gid2).css(
				 				{
				 					backgroundColor: 'red'
				 					//top: '-15px'
				 				});

				 				var old_highscore2 = $('#highest_score2').text();
				 				if(current_score2 > old_highscore2)
				 				{
				 					window.localStorage.setItem("highscore",current_score2);
				 				}

				 				$('#gameOverPage2').show();
				 			
				 		}


				 },fallspeed2);

			}

	//	function getRandomNumber(max,min){
	//		return Math.floor(Math.random()*(max-min+1))+min;
	//	}


		function checkXPos2($xpos , $id)
		{
			var nextYPos2;

			if ($xpos == 5) 
			{
				arr2XPOS1.push($id);
				nextYPos2 = ypos2[arr2XPOS1.length-1];
				
			}
			else if ($xpos == 45) 
			{
				arr2XPOS2.push($id);
				nextYPos2 = ypos2[arr2XPOS2.length-1];
				
			}
			else if ($xpos == 85) 
			{
				arr2XPOS3.push($id);
				nextYPos2 = ypos2[arr2XPOS3.length-1];
				
			}
			else if ($xpos == 125) 
			{
				arr2XPOS4.push($id);
				nextYPos2 = ypos2[arr2XPOS4.length-1];
				
			}
			else if ($xpos == 165) 
			{
				arr2XPOS5.push($id);
				nextYPos2 = ypos2[arr2XPOS5.length-1];
				
			}
			else if ($xpos == 205) 
			{
				arr2XPOS6.push($id);
				nextYPos2 = ypos[arr2XPOS6.length-1];
				
			}

			return nextYPos2;
		}





		function begin2()
		{
			start2();
			updatePos2();

		}


function clearStats2()
{
				$('.operator2').removeClass('highlighted2');
				$('.operand2').removeClass('highlighted2');
				$('.operand2').removeClass('disabled2');

				disabled2 = 'operator2';
				$('.operator2').addClass('disabled2');
				$('#equationBar2').val('');
}

function slideDown2()
{
	$('.ready2').each(function()
	{

		var x = $(this).css('left');
		var id = $(this).attr('id');
		var uid;	
			if (x == "5px") 
			{
				uid = arr2XPOS1.indexOf(id);
				console.log(ypos2[uid] + 'id' + $(this).attr('id') + ' - ' + $(this).text());
				
			}
			else if (x == "45px") 
			{
				uid = arr2XPOS2.indexOf(id);
				
				console.log(ypos2[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
					
			}
			else if (x == "85px") 
			{
				uid = arr2XPOS3.indexOf(id);
				console.log(ypos2[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "125px") 
			{
				uid = arr2XPOS4.indexOf(id);
				console.log(ypos2[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "165px") 
			{
				uid = arr2XPOS5.indexOf(id);
				console.log(ypos2[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}
			else if (x == "205px") 
			{
				uid = arr2XPOS6.indexOf(id);
				console.log(ypos2[uid] + 'id' + $(this).attr('id')+ ' - ' + $(this).text());
				
			}

			var newPos2 = ypos2[uid];
			
			$(this).animate(
			{
					top: newPos2+'px'
			});



	});
}

function back2()
{
	var back_id = arrEquation.length - 1;
	
	var queryID = eval("'"+"#"+arrEquation[back_id]+"'");
	var data = $(queryID).text();
	var checkIfUndefined = $(queryID).html();

	var currentEquation = $('#equationBar').val();
	var newEquation = currentEquation.slice(0,back_id);
	arrEquation.splice(back_id,1);
	$('#equationBar2').val(newEquation);
	
	$(queryID).removeClass('highlighted2');
	if (checkIfUndefined == undefined)
	{
		//do nothing
		console.log(data);
	}
	else if (isNaN(parseInt(data)))
	{
		disabled2 = 'operand2';
		$('.operator2').removeClass('disabled2');
		console.log(data);
	}
	else
	{
		disabled2 = 'operator2';
		$('.operand2').removeClass('disabled2');
		console.log(data);	
	}

	console.log(queryID + data);
}

function posUpdate2(nr_id)
{
	$('.not-ready2').each(function()
			{
				
				$(this).animate(
				{
					top: ypos2[nr_id]+'px'
				});				
			});
}



function deleteFromArray2()
{
	$('.highlighted2').each(function()
	{
		var x = $(this).css('left');
		var id = $(this).attr('id');


			if ( x == "5px") 
			{
				arr2XPOS1.splice(arr2XPOS1.indexOf(id),1);
			}
			else if (x == "45px") 
			{
				arr2XPOS2.splice(arr2XPOS2.indexOf(id),1);	
			}
			else if (x == "85px") 
			{
				arr2XPOS3.splice(arr2XPOS3.indexOf(id),1);
			}
			else if (x == "125px") 
			{
				arr2XPOS4.splice(arr2XPOS4.indexOf(id),1);
			}
			else if (x == "165px") 
			{
				arr2XPOS5.splice(arr2XPOS5.indexOf(id),1);
			}
			else if (x == "205px") 
			{
				arr2XPOS6.splice(arr2XPOS6.indexOf(id),1);
			}

	});
}



//----
function extraBox2()
{
					xpos2 = getRandomNumber(5,0);
					var operand = getRandomNumber(9,1);
					var operator = getRandomNumber(3,0);

					var box = document.createElement("div");
					$(box).addClass("box2 ready2");
					$(box).attr('id', 'eBox2'+exid2);


					if (nextPiece2 <=1)
					{
						$(box).addClass("operand2");
						$(box).text(operand2);
						nextPiece2++;
					}
					else
					{
						$(box).addClass("operator2 disabled2");
						$(box).text(operators2[operator2]);
						nextPiece2 = 0;
					}
					
					box.style.position = "absolute";
					box.style.left = xarr[xpos] + 'px';
					realNextYPos2 = checkXPos2(xarr2[xpos2],$(box).attr('id'));	

					$('#mainBoard2').append(box);
					//console.log($(box).attr('class'));
					


				
	}



function moveExtrabox()
{
					 var y = 0;
				 //var currentY = 0;
				 var update = setInterval(function()
				 {
				 		y+=1;
				 		$('#eBox'+exid).css({
				 		top: y  +'px'
				 		});
				 		console.log(realNextYPos);
				 		

				 		if (y==realNextYPos)
				 		{

				 			//currentY++;
				 			xpos = getRandomNumber(5,0);
				 			//$('#nBox'+gid).removeClass('not-ready');
				 			//$('#nBox'+gid).addClass('ready');
				 			exid++;
				 			y=0;
				 			clearInterval(update);

				  		}
				  		else if(realNextYPos == undefined )
				 		{
				 				$('.box').addClass('disabled');
				 				$('#mainBoard').css(
				 				{
				 					backgroundColor: 'black'
				 				});
				 				clearInterval(disableChecker);
				 				clearInterval(update);
				 				$('#eBox'+exid).css(
				 				{
				 					backgroundColor: 'red'
				 					//top: '-15px'
				 				});

				 				
				 		}


				 },5);	
}





function reRoll()
{
	
	var newAns = getRandomNumber(18,4)
	$('#answerBox').text(newAns);
}

function getString(data)
{
	var newData = data.replace(/\d+/g, '');
	return newData;
}

function getNum(data)
{
	var newData = parseInt(data);
	return newData;
}