var Jailbreak = null;

mp.events.add('JailbreakStart', (player,message)=>{
    if(!Jailbreak){
        Jailbreak = mp.browsers.new('package://Jailbreak/ui.html')
        mp.gui.cursor.show(true,true);
        mp.events.callRemote("starten");
    }
});

mp.events.add("jailbreak:Starten", player =>{
    Jailbreak.destroy();
    Jailbreak = null;
    mp.events.callRemote("start:")
    mp.gui.cursor.show(false,false);
});