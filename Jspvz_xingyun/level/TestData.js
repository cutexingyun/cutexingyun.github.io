
oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oMagnetShroom, oCabbage, oFlowerPot, oKernelPult, oCoffeeBean, oGarlic, oMelonPult, oGatlingPea, oTwinSunflower, oGloomShroom, oCattail, oWinterMelon, oSpikerock, oCobCannon],
    ZName: [oZombie,oConeheadZombie,oFlagZombie,oPoleVaultingZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie],
    PicArr: ["images/interface/background3.jpg"], 
    backgroundImage: "images/interface/background3.jpg",
	Coord:2,
	LF:[0,1,1,2,2,1,1],
	//ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1, 
    LevelName: "测试",  
    LvlEName: 1,  
    SunNum: 9900,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
     }
},
{
    AZ: [
//oZombie,oConeheadZombie,oFlagZombie,oPoleVaultingZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie
	[oZombie, 1, 1,[1]],
	[oConeheadZombie, 1, 1],
	[oFlagZombie, 1, 1],
	[oPoleVaultingZombie, 1, 1],
	[oBucketheadZombie, 1, 1,[1]]/*,
	[oNewspaperZombie, 1, 1],
	[oScreenDoorZombie, 1, 1],
	[oFootballZombie, 1, 1],
	[oDancingZombie, 1, 1],
	[oBackupDancer, 1, 1],
	[oDuckyTubeZombie1, 1, 1],
	[oDuckyTubeZombie2, 1, 1],
	[oDuckyTubeZombie3, 1, 1],
	[oSnorkelZombie, 1, 1],
	[oZomboni, 1, 1],
	[oDolphinRiderZombie, 1, 1],
	[oJackinTheBoxZombie, 1, 1],
	[oBalloonZombie, 1, 1],
	[oImp, 1, 1],
	[oDiggerZombie, 1, 1]
	*/
    ], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [],
        a2: [2]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    }
});
