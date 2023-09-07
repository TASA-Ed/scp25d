function *start() {
  //Door
  game.createrole({RId: `DoorLc`, $name: `ddd1`, $bx: 70, $by: 50.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd2`, $bx: 66, $by: 50.25, $action: 0,  $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd3`, $bx: 70, $by: 54.25, $action: 0,  $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd4`, $bx: 62, $by: 50.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd5`, $bx: 62, $by: 54.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd6`, $bx: 58, $by: 55.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd7`, $bx: 58, $by: 49.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd8`, $bx: 54, $by: 54.25, $action: 0, $showName:false});
  game.createrole({RId: `DoorLc`, $name: `ddd9`, $bx: 54, $by: 50.25, $action: 0, $showName:false});
  game.createrole({RId: `Guard`, $name: `urgrin`, $bx: 66, $by: 52, $action: 0, $showName:false});
}

function *meng1(){ //地图事件 
  game.movehero(73,6);
}

function *meng2(){ //地图事件 
  game.movehero(7,46);
}