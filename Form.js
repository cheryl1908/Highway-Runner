class Form {
    constructor(){
        this.title=createElement("h1");
        this.name=createInput().attribute("placeholder","Name");
        this.button1=createButton("Play");
        this.button2=createButton("Understood");
        this.instructions=createDiv();
        this.greeting=createElement("h2");
        this.reset = createButton('Reset');
    }
    display(){
        this.title.html("Highway Runner");
        this.title.position(500,50);
        this.reset.position(displayWidth-100,20);
    
        this.name.position(550,150);
        this.button1.position(600,200);
        this.button1.mousePressed(()=>{
            this.name.hide();
            this.button1.hide();
            player.name = this.name.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.instructions.position(200,150);
            console.log(player);
            if(player.index===1){
                this.instructions.html("Welcome to Highway Runner!!!! The motive of this game is to surpass all the obstacles put forth before you by your opponent. The game provides you three lives and these lives reduce if you collide into an obstacle. Your opponent has the freedom to bring forth obstacles to stop your progress. To save yourself from the obstacles hit the arrow keys. Happy playing!!! ");
                this.button2.mousePressed(()=>{
                    this.instructions.hide();
                    this.button2.hide();
                    this.greeting.html("Hello"+ player.name);
                    this.greeting.position(550,150);
                    game.updateFlag1(true);    
                }) 
            } else if(player.index===2){
                this.instructions.html("Welcome to Highway Runner!!!! The motive of this game is to surpass all the obstacles put forth before you by your opponent. You are the opponent you can click anywhere on the screen to obstruct your opponents progress. The player has three lives and they reduce when the player collides with your vehicle. Happy playing!!");
                this.button2.mousePressed(()=>{
                    this.instructions.hide();
                    this.button2.hide(); 
                    this.greeting.html("Hello"+ player.name);
                    this.greeting.position(550,150);   
                    game.updateFlag2(true);
                }) 
            }
            this.button2.position(600,240);
        })
       
        
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref('/').update({
        players:null,
        CarsAtEnd:0,
        flag1:false,
        flag2:false
        })
      }); 
    }
    hide(){
        this.name.hide();
        this.button1.hide();
        this.button2.hide();
        this.instructions.hide();
        this.greeting.hide();
    }
}