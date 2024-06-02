
oS.Init({
    PName: ShengPlantList,
    ZName: [oNewspaperZombie2],
    PicArr: ["images/interface/background2.jpg"], 
    backgroundImage: "images/interface/background2.jpg",
	Coord:1,
    DKind: 0,
	LF:[0,1,1,1,1,1,1],
	//ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1, 
    LevelName: "二爷",  
    LvlEName: 1,  
    SunNum: 100,
    LargeWaveFlag: {
        10 : $("imgFlag3"),
        20 : $("imgFlag1")
     }
},
{
    AZ: [
    [oNewspaperZombie2,1,1,[1]]
    ], 
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1,5,7,10,15,20],
        a2: [10,10,20,50,50,50,50]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    }
});
