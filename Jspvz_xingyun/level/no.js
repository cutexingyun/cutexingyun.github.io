oS.Init({
    PName: [oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oSplitPea,oJalapeno,oSpikeweed,oRepeater,oTallNut,oPumpkinHead,oSquash,oFlowerPot,oTorchwood,oThreepeater,oGatlingPea,oTwinSunflower,oSpikerock,oFumeShroom,oCoffeeBean,oGloomShroom,oSunShroom,oPuffShroom,oScaredyShroom,oGarlic,oGraveBuster,oStarfruit,oLilyPad,oHypnoShroom,oIceShroom,oDoomShroom,oTangleKelp,oSeaShroom,oPlantern,oCactus,oBlover],
    ZName: [oBucketheadZombie1,oConeheadZombie1],
    PicArr: ["images/interface/background2.jpg"], 
    backgroundImage: "images/interface/background2.jpg",
	Coord:1,
    DKind: 0,
	LF:[0,1,1,1,1,1],
	ZF:[0,0,0,0,0,0],
    CanSelectCard: 1, 
    LevelName: "死寂",  
    LvlEName: 1,  
    SunNum: 50, 
    LargeWaveFlag: {
        25 : $("imgFlag3"),
        50 : $("imgFlag1")
     }
},
{
    AZ: [
	[oBucketheadZombie1 , 12, 2],
    [oConeheadZombie1,5,1]
    ], 
    FlagNum: 50,
    FlagToSumNum: {
        a1: [1, 5,25,20,50],
        a2: [2, 4, 6,10,5,60]
    },
    FlagToMonitor: {
        20 : [ShowLargeWave, 0],
        49 : [ShowFinalWave, 0]
    }
});
