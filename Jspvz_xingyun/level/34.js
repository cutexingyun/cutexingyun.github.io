oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover],
    ZName: [oZombie, oZombie2, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oConeheadZombie, oBalloonZombie, oDolphinRiderZombie],
    PicArr: ["images/interface/background4.jpg","images/interface/Taco.png"],
    Coord: 2,
    SunNum: 50,
    LF: [0, 1, 1, 2, 2, 1, 1],
    backgroundImage: "images/interface/background4.jpg",
    CanSelectCard: 1,
    DKind: 0,
    HaveFog: 4,
    LevelName: "关卡 4-4",
    LvlEName: 34,
    LargeWaveFlag: {
        10:$("imgFlag3"),
		20:$("imgFlag1")
    },
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3])
    },
    StartGameMusic: "Loonboon"
},
{
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10, 19, 20]], [oDuckyTubeZombie2, 1, 6, [10, 20]], [oDuckyTubeZombie3, 1, 6, [10, 20]],[oConeheadZombie, 3, 1],[oBalloonZombie, 1, 10,[10,20]], [oDolphinRiderZombie, 1, 10, [10, 20]]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19],
        a2: [1, 2, 3, 10, 4, 5, 6, 15]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/interface/trophy.png", "left:627px;top:325px;clip:rect(auto,auto,auto,auto)", EDAll, {
            onclick: function() {
				SelectModal(0);
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
    }
});