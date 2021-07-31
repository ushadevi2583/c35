var dog,sadDog,database;
var foods,foodStock;

var addFood;
var foodObj;

// create feed and lastFed variable here
var feed, lastFed

function preload(){
  sadDog=loadImage("Dod.png");
 happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(1000, 400);

foodObj = new Food();
  
foodStock=database.ref('Food');
foodStock=on("value",ReadaStock);

dog=createSprite(800,200,150,150);
dog.addImage(sadDog);
dog.scale=0.15;

// create feed the dog button here


addFood=createButton("feed The Dog");
addFood.position(800,95);
addFood.mousePressed(addFoods);

feed=createButton("Add Food");
feed.position(700,95);
feed.mousePressed(feedDog)

}

function draw() {  
 background(46,139,87);
foodObj.display();

// write codeto read fedtime value from the database

fedTime=database.ref('FeedTime')
fedTime.on("value",fuction(data) {
  lastFed=data.val()
}) 


//write code to display text lastFed time here 

Fill(255,255,255)

if(lastFed>=12){
text("Last Feed: "+ lastFed%12+"PM",350,350)
}else if (lastFed==0){
  text("Last Feed:12 AM",350,350)
}else {
  text("Last Feed:" + lastFed+"AM",350,350)
}


drawSprites();
}

// function to read food Stock
function readStock(data){
  food=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happydog);

  // write code here to update food stock and last fed time
  var food_stock_val= foodObj.getFoodStock();
  if(food_stock-val<=0){
    foodObj.updateFoodStock(food_stock-val * 0);
  }else{
    foodObj.updateFoodStock(food_stock_val-1);
  }

  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:Hour()

  })

}

// function to add food in stock
function addFoods(){
  foodS++;
}


















