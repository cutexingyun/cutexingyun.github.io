oS.Init(
  {
    PName: [oGatlingPea2, oCactus, oPumpkinHead, oSunFlower, oSquash, oWallNut],
    ZName: [oBalloonZombie],
    PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    LevelName: "六一儿童节的气球",
    LvlEName: "1234",
    SunNum: 200,
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
    AZ: [[oBalloonZombie, 1, 1]],
    FlagNum: 20,
    FlagToSumNum: {
      a1: [3, 5, 9, 10, 13, 15, 19],
      a2: [1, 3, 5, 20, 10, 15, 20, 30],
    },
    FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
  }
);
