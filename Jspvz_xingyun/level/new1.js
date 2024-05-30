oS.Init(
  {
    PName:  [
    oPeashooter,
    oSunFlower,
    oCherryBomb,
    oWallNut,
    oPotatoMine,
    oSnowPea,
    oChomper,
    oRepeater,
    oPuffShroom,
    oSunShroom,
    oFumeShroom,
    oGraveBuster,
    oHypnoShroom,
    oScaredyShroom,
    oIceShroom,
    oDoomShroom,
    oLilyPad,
    oSquash,
    oThreepeater,
    oTangleKelp,
    oJalapeno,
    oSpikeweed,
    oTorchwood,
    oTallNut,
    oSeaShroom,
    oPlantern,
    oCactus,
    oBlover,
    oSplitPea,
    oStarfruit,
    oPumpkinHead,
    oMagnetShroom,
    oCabbage,
    oFlowerPot,
    oKernelPult,
    oCoffeeBean,
    oGarlic,
    oMelonPult,
    oGatlingPea,
    oTwinSunflower,
    oGloomShroom,
    oCattail,
    oWinterMelon,
    oSpikerock,
    oCobCannon,
  ],
    ZName: [
      oFootballZombie,
      oDiggerZombie,
      oJackinTheBoxZombie,
      oScreenDoorZombie,
      oBucketheadZombie,
    ],
    PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    LevelName: "金属狂潮",
    LvlEName: "StrongLevel",
    LargeWaveFlag: { 20: $("imgFlag1") },
    StartGameMusic: "Watery Graves",
    StartGame: function () {
      StopMusic();
      PlayMusic((oS.LoadMusic = oS.StartGameMusic));
      SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
      oS.InitLawnMower();
      PrepareGrowPlants(function () {
        oP.Monitor();
        BeginCool();
        AutoProduceSun(25);
        oSym.addTask(
          2000,
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
      [oFootballZombie, 1, 1],
      [oDiggerZombie, 1, 1],
      [oJackinTheBoxZombie, 1, 1],
      [oScreenDoorZombie, 5, 1],
      [oBucketheadZombie, 4, 1],
    ],
    FlagNum: 20,
    FlagToSumNum: { a1: [3, 4, 15, 19], a2: [1, 5, 8, 12, 40] },
    FlagToMonitor: { 19: [ShowFinalWave, 0] },
  }
);
