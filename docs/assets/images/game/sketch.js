//Extension 1 Comment: my first extension was making the platform where the character can jump over canyons. The most difficult part of this extension was managing to make the character get up on the platform and fall down at the exact point where it finished. In the end I decided to implement a platform to pass over a big canyon surrounded by enemies.
//Extension 2 Comment: my second extension was making a lot of enemies to make difficult to finish the game. This part was not as difficult as the other extension because I decided to use a similar render as my game character only in an "evil" version. 
// The skills I enjoyed more learning were objects and arrays. I found them the most difficult part (along with constructor functions), and actually were the sleuth cases that took me the most time to solve.  

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x; 
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var trees_x;
var treePos_y; 
var collectables; 
var clouds;
var mountains;
var canyons;
var game_score; 
var flagpole; 
var lives; 
var platforms; 
var enemies; 


function setup()
{
	createCanvas(1024, 576);
    lives = 4; 
    textSize(25);
    startGame(); 
    
}

function startGame()
{
    
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false; 
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    trees_x=[100,300,500,700,1000, 2200,2300,2800,3100,3400,3450, 3600,4200,4250,4300]; 
    
    treePos_y = height/1.47; 
    
    collectables=
        [
            {x_pos:200, y_pos:floorPos_y-80, size:20, isFound:false},
            {x_pos:900, y_pos:floorPos_y-50, size:20, isFound:false},
            {x_pos:1700, y_pos:floorPos_y-50, size:20, isFound:false},
            {x_pos:2700, y_pos:floorPos_y-50, size:20, isFound:false},
            {x_pos:3700, y_pos:floorPos_y-50, size:20, isFound:false}
        ]; 
    
    clouds=
        [
            {x_pos:-200, y_pos:40},
            {x_pos:200, y_pos:70},
            {x_pos:600, y_pos:20},
            {x_pos:1000, y_pos:40},
            {x_pos:1400, y_pos:70},
            {x_pos:1800, y_pos:20},
            {x_pos:2100, y_pos:40},
            {x_pos:2500, y_pos:70},
            {x_pos:2800, y_pos:20},
            {x_pos:3100, y_pos:20},
            {x_pos:3500, y_pos:20},
            {x_pos:3800, y_pos:20},
        ]; 
    
    mountains=
        [
            {x_pos:330, y_pos:432},
            {x_pos:1030, y_pos:432},
            {x_pos:2030, y_pos:432},
            {x_pos:2330, y_pos:432},
            {x_pos:3030, y_pos:432},
            {x_pos:3330, y_pos:432},
            {x_pos:4030, y_pos:432}
        ]; 
    
    canyons=
        [
            {x_pos:150, width:100},
            {x_pos:850, width:100},
            {x_pos:1650, width:100},
            {x_pos:2650, width:100},
            {x_pos:3650, width:100},
            {x_pos:1400, width:500}
        
        ]; 
    
    platforms= []; 
    platforms.push(createPlatforms(1350,floorPos_y-90,600)); 
    
    game_score = 0;   
    
    flagpole = {isReached: false, x_pos: 4500}; 
    
    lives -= 1; 
    
    enemies = [];
    enemies.push(new Enemy(50,floorPos_y-10,100));
    enemies.push(new Enemy(2000,floorPos_y-10,100));
    enemies.push(new Enemy(2800,floorPos_y-10,100)); 
    enemies.push(new Enemy(3100,floorPos_y-10,100)); 
    enemies.push(new Enemy(3400,floorPos_y-10,100)); 
    enemies.push(new Enemy(4200,floorPos_y-10,100));  

}

function draw()
{
	background(100, 155, 255); 
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); 

     //scrolling effects
    push(); 
    translate(scrollPos,0);  
    
	// Draw scenery
    drawClouds();
    
    drawMountains();
    
    drawTrees(); 
    
    for (var i = 0; i < platforms.length; i++)
        {
            platforms[i].draw();
        }
    
    for (var i = 0; i < canyons.length; i++)
        {
            drawCanyon(canyons[i]);
            checkCanyon(canyons[i]);
        }
    
	for(var i = 0; i < collectables.length; i++)
	{
		if(collectables[i].isFound == false)
		{
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	}
    
        renderFlagpole(); 
    
    for (var i= 0; i < enemies.length; i++)
        {
            enemies[i].draw();  
            var isContact= enemies[i].checkContact(gameChar_world_x,gameChar_y);
            
            if(isContact == true)
                {
                    if (lives > 0)
                    {
                        startGame();
                        break;
                    } 
                }
        } 
    pop(); 
    
	// Draw game character.

drawGameChar();
text("score: " + game_score, 20,30); 
text("lives: " + lives, 20,70); 
    
if (lives < 1)
        {
            text("Game Over", width/2 - 100, height/2);
            return;
        }
else if (flagpole.isReached==true)
        {
            text("Level Complete",width/2+100, height/2 - 200);
            return;
        }
    
if (gameChar_y > height)
        {
            if (lives > 0) startGame(); 
        }
    

	// Logic to make the game character move or the background scroll.
if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
if(gameChar_y < floorPos_y+8)
 {
    var isContact = false; 
    for (var i= 0; i < platforms.length; i++)
        {
            if(platforms[i].checkContact(gameChar_world_x, gameChar_y)==true)
                {
                    isContact = true; 
                    break;
                }
                                    
        } 
     if (isContact == false)
        {
            gameChar_y +=2 
            isFalling= true; 
        }           

    }
else 
    {
        isFalling=false; 
    }
                    
if(isPlummeting == true)
    {
        gameChar_y +=15
    } 

    
if (flagpole.isReached==false)
    {
        checkFlagpole(); 
        
    }
	// Update real position of gameChar for collision detection.
	   gameChar_world_x = gameChar_x - scrollPos;
    
          
}


// ---------------------
// Key control functions
// ---------------------

    function keyPressed()
    {
        {
	       if(keyCode == 37)
                {
                    console.log("left arrow")
                    isLeft=true 
                }
            else if (keyCode == 39)
                {
                    console.log("right arrow")
                    isRight=true
                }
            else if(keyCode==32)
                {
                    if(gameChar_y==floorPos_y+8)
                        {
                            isFalling=true;
                            gameChar_y-=100;
                        } 
                }
        };   
    }

function keyReleased()
    {
        if(keyCode == 37)
            {
                console.log("left arrow")
                isLeft=false
            }
        else if (keyCode == 39)
            {
                console.log("right arrow")
                isRight=false
            }
        else if (keyCode==32 )
            {
                if(gameChar_y!=floorPos_y+8)
                {
                    isFalling=false;
                } 
            }
    

    }


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
        //the game character
        if(isLeft && isFalling)
        {
            // add your jumping-left code
             //body in purple color
                fill(238,130,238);
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
                line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-40);  
                line(gameChar_x-12, gameChar_y-30, gameChar_x-20, gameChar_y-40); 
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-12, gameChar_y-11, 10, 5);   
                ellipse(gameChar_x+12, gameChar_y-11,10,5);  
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-5, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+1, gameChar_y-60, 2,3);  

        }
        else if(isRight && isFalling)
        {
            // add your jumping-right code
            //body in purple color
                fill(238,130,238); 
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
                line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-40);  
                line(gameChar_x-12, gameChar_y-30, gameChar_x-20, gameChar_y-40); 
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-12, gameChar_y-11, 10, 5);   
                ellipse(gameChar_x+12, gameChar_y-11,10,5);  
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-1, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+4.5, gameChar_y-60, 2,3);    

        }
        else if(isLeft)
        {
            // add your walking left code
            //Add your code here ...
            //body in purple color
                fill(238,130,238); 
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
                line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-30); 
                line(gameChar_x-13, gameChar_y-30, gameChar_x-20, gameChar_y-30); 
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-5, gameChar_y-8, 10, 5);  
                ellipse(gameChar_x+7, gameChar_y-8,10,5);  
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-5, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+1, gameChar_y-60, 2,3);  
        }
        else if(isRight)
        {
            // add your walking right code
            //body in purple color
                fill(238,130,238); 
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
                line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-30); 
                line(gameChar_x-13, gameChar_y-30, gameChar_x-20, gameChar_y-30); 
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-5, gameChar_y-8, 10, 5);  
                ellipse(gameChar_x+7, gameChar_y-8,10,5);  
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-1, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+4.5, gameChar_y-60, 2,3);    


        }
        else if(isFalling || isPlummeting)
        {
            // add your jumping facing forwards code
            //body in purple color
                fill(238,130,238); 
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
               line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-40);  
                line(gameChar_x-12, gameChar_y-30, gameChar_x-20, gameChar_y-40); 
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-12, gameChar_y-11, 10, 5);   
                ellipse(gameChar_x+12, gameChar_y-11,10,5);   
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-3, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+3, gameChar_y-60, 2,3);   

        }
        else
        {
            //facing front not movement
            //body in purple color
                fill(238,130,238); 
                rect(gameChar_x-12, gameChar_y-70, 25, 25);      
                rect(gameChar_x-12, gameChar_y-40, 25, 30);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);   
                line(gameChar_x, gameChar_y-45, gameChar_x, gameChar_y-40);   
                line(gameChar_x+13, gameChar_y-30, gameChar_x+20, gameChar_y-20);    
                line(gameChar_x-12, gameChar_y-30, gameChar_x-20, gameChar_y-20);  
                //feet
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(gameChar_x-5, gameChar_y-8, 10, 5);  
                ellipse(gameChar_x+7, gameChar_y-8,10,5);  
                //eyes and mouth
                fill(255,255,255); 
                strokeWeight(2); 
                ellipse(gameChar_x-3, gameChar_y-60, 6, 10);   
                ellipse(gameChar_x+3, gameChar_y-60, 6, 10);   
                stroke(0,0,0); 
                line(gameChar_x-3, gameChar_y-50, gameChar_x+3, gameChar_y-50); 
                fill(0,0,0); 
                ellipse (gameChar_x-3, gameChar_y-60, 2,3); 
                ellipse (gameChar_x+3, gameChar_y-60, 2,3);    


        }
    
    
    
    // draw game character
    fill(255); 
    noStroke(); 
    
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for(var i=0; i< clouds.length; i++)
        {
            fill(220,220,220);
            ellipse(clouds[i].x_pos+320,clouds[i].y_pos+110,80,45);
            ellipse(clouds[i].x_pos+305,clouds[i].y_pos+80,80,45);
            ellipse(clouds[i].x_pos+350,clouds[i].y_pos+90,80,45); 
        };
}

// Function to draw mountains objects.
function drawMountains()
{
    for(var i=0; i<mountains.length; i++)
        
        {
            fill(128,128,0);
            triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos+150, mountains[i].y_pos, mountains[i].x_pos+75, mountains[i].y_pos-132); 
            triangle(mountains[i].x_pos+70, mountains[i].y_pos, mountains[i].x_pos+240, mountains[i].y_pos, mountains[i].x_pos+150, mountains[i].y_pos-182); 
        }; 
}

// Function to draw trees objects.
function drawTrees()
{
    for(var i=0; i < trees_x.length; i++) 
        {
            noStroke() 
            fill(160,82,45);
            rect(trees_x[i],treePos_y,10,40);
            fill(173,255,47);
            triangle(trees_x[i]-15, treePos_y, trees_x[i]+25, treePos_y, trees_x[i]+5,treePos_y-53); 
            triangle(trees_x[i]-15, treePos_y-23, trees_x[i]+25, treePos_y-23, trees_x[i]+5, treePos_y-53);       
        }; 

}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
        for(var i=0; i < canyons.length; i++)
        {
    
        fill(100, 155, 255);
        rect(t_canyon.x_pos, floorPos_y, t_canyon.width, 200); 
               
        }
  
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    
	if(gameChar_world_x > t_canyon.x_pos && gameChar_world_x < t_canyon.x_pos + t_canyon.width - 20 && gameChar_y >= floorPos_y)
	{
		isPlummeting = true;
	}

}


// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
   for(var i=0; i< collectables.length; i++)  
        {
            fill(220,185,0);
            strokeWeight(1);
            stroke(0);
            ellipse(t_collectable.x_pos, 
                    t_collectable.y_pos -25, 
                    t_collectable.size, 
                    t_collectable.size+10);  
        }
} 

// Function to check character has collected an item.


function checkCollectable(t_collectable)
{
	if (dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 50)
	{
    	t_collectable.isFound = true;
        game_score +=1; 
    }
}

function renderFlagpole()
{
    push();
            strokeWeight(5); 
            stroke(100); 
            line(flagpole.x_pos, floorPos_y, flagpole.x_pos,floorPos_y-250); 
            fill(255,0,0);
            noStroke();

            if (flagpole.isReached==true)
                {
                    rect(flagpole.x_pos,floorPos_y-250, 100, 50);  
                }
            else
                {
                    rect(flagpole.x_pos,floorPos_y-50, 100, 50); 
                }
    pop(); 
}

function checkFlagpole()
{
    if (dist(gameChar_world_x,0,flagpole.x_pos,0) <10) 
        {
            flagpole.isReached=true;    
        }
}

function createPlatforms(x,y,length)
{
    var p = 
        {
            x: x,
            y: y,
            length: length, 
            draw: function()
                {
                    fill(255,20,147);  
                    rect(this.x, this.y, this.length, 20); 
                },
            checkContact: function(gc_x, gc_y)
                {
                    if(gc_x > this.x && gc_x < this.x + this.length)
                        {
                           var d = this.y - gc_y; 
                            if (d >= 0 && d <10)
                            {
                                return true; 
                            }
                        }
                    return false; 
                }
        }
        return p; 
}

function Enemy(x,y,range)
{
    this.x = x; 
    this.y = y; 
    this.range = range; 
    this.currentX = x; 
    this.inc = 1; 
    this.update=function()
    {
        this.currentX += this.inc; 
        if (this.currentX >= this.x + this.range)
            {
                this.inc =-1; 
            }
        else if (this.currentX < this.x)
            {
                this.inc=1; 
            }
    }
    this.draw=function()
    {
        this.update(); 
        fill(0,0,0);
                
                rect(this.currentX-12, this.y-35, 15, 15);      
                rect(this.currentX-12, this.y-15, 15, 20);  
                //lines that make the neck and arms
                stroke(0,0,0);
                strokeWeight(2);    
                line(this.currentX-4, this.y-15, this.currentX-4, this.y-20);   
                line(this.currentX+2, this.y-11, this.currentX+8, this.y-20);  
                line(this.currentX-10, this.y-11, this.currentX-16, this.y-20); 
                strokeWeight(0); 
                fill(0,0,0); 
                ellipse(this.currentX-8, this.y+8, 7, 4);   
                ellipse(this.currentX+2, this.y+8, 7, 4);  
                fill(220,20,60);
                ellipse(this.currentX-7,this.y-30,4,4);
                ellipse(this.currentX,this.y-30,4,4);
         
    }
    this.checkContact = function(gc_x , gc_y) 
    {
        var d= dist(gc_x, gc_y, this.currentX, this.y);
        if (d < 20)
            {
                return true;
            }
        return false; 
    }
} 

