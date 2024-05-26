
oS.Init({
    PName: [oPuffShroom1,oSnowPea1,oNutBowling,oHugeNutBowling,oBoomNutBowling,oHypnoShroom1,oLawnCleaner,oCoffeeBean],
    ZName: [oZombie,oConeheadZombie,oFlagZombie,oPoleVaultingZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oDancingZombie1,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie],
    PicArr: ["images/interface/background1unsodded_1.jpg"], 
    backgroundImage: "images/interface/background1unsodded_1.jpg",
	Coord:1,
	LF:[0,0,0,1,0,0,0],
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

    ], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1,5,7,10],
        a2: [2,10,17,25,45]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    }
});
