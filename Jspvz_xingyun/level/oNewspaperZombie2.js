
oS.Init({
    PName: ShengPlantList,
    ZName: [oZombie,oConeheadZombie,oTrashZombie,oNewspaperZombie2,oFlagZombie,oJalapenoZombie,oPoleVaultingZombie,oZombiejump,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oDancingZombie1,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie],
    PicArr: ["images/interface/background3.jpg"], 
    backgroundImage: "images/interface/background3.jpg",
	Coord:2,
	LF:[0,1,1,2,2,1,1],
	//ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1, 
    LevelName: "二爷",  
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

    [oNewspaperZombie2,1,1,[1]]


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
