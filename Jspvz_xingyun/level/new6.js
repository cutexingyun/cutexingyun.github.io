oS.Init(
  {
    PName: ShengPlantList,
    ZName: [
      oDolphinRiderZombie,
      oDuckyTubeZombie1,
      oDuckyTubeZombie2,
      oDuckyTubeZombie3,
      oSnorkelZombie,
      oSmallDuckyTubeZombie1,
      oSmallSnorkelZombie,
    ],
    PicArr: ["images/interface/background7.jpg"],
    backgroundImage: "images/interface/background7.jpg",
    CanSelectCard: 1,
    Coord: 2,
    LF: [0, 2, 2, 2, 2, 2, 2],
    LevelName: "水战",
    LvlEName: "666",
    SunNum: 600,
    LvlClearFunc: function () {
      oSym.Clear();
    },
    LargeWaveFlag: { 10: $("imgFlag3"), 20: $("imgFlag1") },
    StartGameMusic: "Watery Graves",
    StartGame: function () {
      StopMusic();
      PlayMusic((oS.LoadMusic = oS.StartGameMusic));
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      oS.InitLawnMower();
      PrepareGrowPlants(function () {
        oP.Monitor({
          ar: [],
          f: function () {
            oSym.TimeStep = 2;
          },
        });
        BeginCool();
        AutoProduceSun(25);
        oSym.addTask(
          1500,
          function () {
            oP.AddZombiesFlag();
            SetVisible($("dFlagMeterContent"));
          },
          []
        );
      });
    },
  },
  {
    AZ: [
        [oDolphinRiderZombie,2 ,10,[5 ,10,15,20]],
        [oDuckyTubeZombie1,2 , 1,[5 ,10,15,20]],
        [oDuckyTubeZombie2,2 , 3,[5 ,10,15,20]],
        [oDuckyTubeZombie3,2 , 10,[10,15,20]],
        [oSnorkelZombie,2 , 7,[5 ,10,15,20]],
        [oSmallDuckyTubeZombie1,1 , 1,[5 ,10,15,20]],
        [oSmallSnorkelZombie,1 , 3,[5 ,10,15,20]],

    ],
    FlagNum: 20,
    FlagToSumNum: {
      a1: [3, 5, 9, 10, 13, 15, 19],
      a2: [1, 3, 5, 20, 10, 15, 20, 30],
    },
    FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
  }
);
