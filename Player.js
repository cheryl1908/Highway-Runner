class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.x=0;
      this.y=0;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    getCarsAtEnd(){
      var ref=database.ref('CarsAtEnd');
      ref.on("value",(data)=>{
      this.rank=data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
    static updateCarsAtEnd(rank){
      database.ref('/').update({
        CarsAtEnd: rank
      })
    }
    update(){
      console.log("inside update");
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        y:this.y,
        x:this.x
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  