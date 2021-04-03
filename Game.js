class Game {
    constructor(){
  
    }  
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }

    getFlag1(){
      var flag1Ref  = database.ref('flag1');
      flag1Ref.on("value",function(data){
         flag1= data.val();
      })
    }
      getFlag2(){
        var flag2Ref  = database.ref('flag2');
        flag2Ref.on("value",function(data){
          flag2 = data.val();
        })
      }
        updateFlag1(flag1){
          database.ref('/').update({
            flag1:flag1
          });
        }
        updateFlag2(flag2){
          database.ref('/').update({
            flag2:flag2
          });
        }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      
      plr1=createSprite(627,568);
      plr1.addImage("plr_img",player1_img);

      plr2=createSprite(200,200);
      plr2.visible=false;
      plrs=[plr1,plr2]
      
    }
  
    play(){


      form.hide();
      Player.getPlayerInfo();

      //player.getCarsAtEnd();
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

        if (track.x < 1500){
          track.x = track.width/2;
        }
 
      var index=0;
      var x,y; 
      for(var plr in allPlayers){
        index=index+1;
        x=allPlayers[plr].x
        y=displayHeight-allPlayers[plr].y

        plrs[index-1].position.x=x
        plrs[index-1].position.y=y
        
        if(index===player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = plrs[0].position.y;
        }
      }
      
    }

      /*if(player.x>1800){
        player.x=900;
      }*/
      
        drawSprites();
        
  
    }
    /*spawnVehicles(){
      if(mouseClicked()){
        player.x=mouseX;
        player.y=mouseY;
      }
    }
  }*/  
}