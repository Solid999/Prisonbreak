/*

start: {"x":1669.7158203125,"y":2487.720947265625,"z":45.824913024902344}
1. Kasten: {"x":1622.5760498046875,"y":2507.678955078125,"z":45.564876556396484}
2. Kasten: {"x":1760.6556396484375,"y":2519.219970703125,"z":45.56502151489258}
3. Kasten: {"x":1652.8013916015625,"y":2564.3681640625,"z":45.56485366821289}
4. Kasten: {"x":1609.0947265625,"y":2566.5625,"z":45.564857482910156}

*/



let starten = mp.colshapes.newCircle(1669.7158203125, 2487.720947265625, 1);
let stromkasten1 = mp.colshapes.newCircle(1622.5760498046875, 2507.678955078125, 1);
let stromkasten2 = mp.colshapes.newCircle(1760.6556396484375, 2519.219970703125, 1)
let stromkasten3 = mp.colshapes.newCircle(1652.8013916015625, 2564.3681640625, 1)
let stromkasten4 = mp.colshapes.newCircle(1609.0947265625, 2566.5625, 1)

console.log("[Jailbreak] Loaded!");

mp.events.add("start:", player =>{
    player.notify("Viel Glück!");
    let stromblip1 = mp.blips.new(354, new mp.Vector3(1622.5760498046875, 2507.678955078125, 45.564876556396484, 1),
    {
        name: 'Stromkasten1',
        color: 1,
        shortRange: true,
    });
});

function playerEnterColshapeHandler(player, shape) {
    if (shape == starten) {
        player.call("JailbreakStart");

    }

    // Stromkasten nummer 1
    if(shape == stromkasten1){
        player.playScenario("WORLD_HUMAN_HAMMERING");
        player.notify("Nur noch 3 übrig.");
        setTimeout(()=>{
            player.stopAnimation();
        },7000);

        let stromblip2 = mp.blips.new(354, new mp.Vector3(1760.6556396484375, 2519.219970703125, 45.56502151489258, 1),
    {
        name: 'Stromkasten2',
        color: 1,
        shortRange: true,
    });
    }
        // Stromkasten nummer 2
      if(shape == stromkasten2){
        player.playScenario("WORLD_HUMAN_HAMMERING");
        player.notify("Nur noch 2 übrig.");
        setTimeout(()=>{
            player.stopAnimation();
        },7000);

        let stromblip3 = mp.blips.new(354, new mp.Vector3(1652.8013916015625, 2564.3681640625, 45.56485366821289, 1),
        {
            name: 'Stromkasten3',
            color: 1,
            shortRange: true,
        });
        
      }
        // Stromkasten nummer 3
       if(shape == stromkasten3){
         player.playScenario("WORLD_HUMAN_HAMMERING");
         player.notify("Nur noch 1 übrig.");
         setTimeout(()=>{
            player.stopAnimation();
        },7000);

         let stromblip4 = mp.blips.new(354, new mp.Vector3(1609.0947265625, 2566.5625, 45.564857482910156, 1),
        {
            name: 'Stromkasten4',
            color: 1,
            shortRange: true,
        });
       }

        // Stromkasten nummer 4
        if(shape == stromkasten4){
            player.playScenario("WORLD_HUMAN_HAMMERING");
             player.notify("Gleich bist du fertig!");
             setTimeout(()=>{
                player.stopAnimation();
            },7000);
          

          setTimeout(()=>{
              player.position = new mp.Vector3(1767.19287109375,2411.711669921875,45.47990417480469);
              player.notify("Du bist nun entkommen!");
          },10000);
        }

    

}
mp.events.add('playerEnterColshape', playerEnterColshapeHandler);