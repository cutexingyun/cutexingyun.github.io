oS.Init(
  {
    PName: [
      oSnowPea1,
      ofirePeashooter,
      oDoomShroom1,
      oSunPeashooter,
      ofireWallNut,
      oIceFumeShroom,
      oTorchwood1,
      oSunFlower1,
      oGatlingPea1,
      oGatlingPea2,
      oWinterMelon1,
      oPuffShroom1,
      oHypnoShroom1,
      oGloomShroom1,
      oCoffeeBean,
    ],
    ZName: [
      oZombie,
      oTrashZombie,
      oZombiejump,
      oJalapenoZombie,
      oSmallZombie,
      oSmallFlagZombie,
      oSmallConeheadZombie,
      oSmallFootballZombie,
    ],
    PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    Coord: 1,
    CanSelectCard: 1,
    DKind: 1,
    LevelName: "隐藏植物",
    LvlEName: 1,
    SunNum: 250,
    LargeWaveFlag: {
      10: $("imgFlag3"),
      20: $("imgFlag1"),
    },
  },
  {
    AZ: [
      //oZombie,oConeheadZombie,oFlagZombie,oPoleVaultingZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie
      [oZombie, 1, 1, [1]],
      [oTrashZombie, 1, 5],
      [oZombiejump,1, 5],
      [oJalapenoZombie, 1, 5],
      [oSmallZombie, 1, 1],
      [oSmallConeheadZombie, 1, 2],
      [oSmallFootballZombie, 1, 5],
    ],
    FlagNum: 20,
    FlagToSumNum: {
      a1: [     2, 3, 5, 7, 10, 15, 20],
      a2: [0,  0, 0, 17, 25, 45, 60, 60],
    },
    FlagToMonitor: {
      9: [ShowLargeWave, 0],
      19: [ShowFinalWave, 0],
    },
  }
);
