oS.Init({
    PName: [oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oSplitPea,oJalapeno,oSpikeweed,oRepeater,oTallNut,oPumpkinHead,oSquash,oFlowerPot,oTorchwood,oThreepeater,oGatlingPea,oTwinSunflower,oSpikerock,oFumeShroom,oCoffeeBean,oGloomShroom,oSunShroom,oPuffShroom,oScaredyShroom,oGarlic,oGraveBuster,oStarfruit,oLilyPad,oHypnoShroom,oIceShroom,oDoomShroom,oTangleKelp,oSeaShroom,oPlantern,oCactus,oBlover],
    ZName: [oBigFootballZombie,oBigBucketheadZombie ,oBigConeheadZombiebie,oSmallFootballZombie,oSmallConeheadZombie],
    PicArr: ["images/interface/background3.jpg"], 
    backgroundImage: "images/interface/background3.jpg",
	Coord:2,
    DKind: 0,
	LF:[0,1,1,2,2,1,1],
	//ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1, 
    LevelName: "全精英",  
    LvlEName: 1,  
    SunNum: 2000, 
    LargeWaveFlag: {
        30 : $("imgFlag3"),
        50 : $("imgFlag1")
     }
},
{
    AZ: [
	[oBigFootballZombie , 2, 2],
    [oBigBucketheadZombie,2,2],
    [oBigConeheadZombiebie,1,1],
    [oSmallFootballZombie,5,4],
    [oSmallConeheadZombie,1,1]
    
    ], 
    FlagNum: 50,
    FlagToSumNum: {
        a1: [3, 5,10,30,40],
        a2: [2, 4, 6,20,40,70]
    },
    FlagToMonitor: {
        25 : [ShowLargeWave, 0],
        49 : [ShowFinalWave, 0]
    }
});
