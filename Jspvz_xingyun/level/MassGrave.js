/*
 * 初始化游戏参数和关卡信息
 */
oS.Init({
    // 植物名称
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oPumpkinHead, oSquash, oFumeShroom, oGloomShroom, oGarlic],
    // 僵尸名称
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oNewspaperZombie, oBucketheadZombie],
    // 图片数组
    PicArr: function() {
        var a = oFumeShroom.prototype,
            b = a.PicArr;
        return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
    }(),
    // 背景图片
    backgroundImage: "images/interface/background2.jpg",
    // 可选卡片数
    CanSelectCard: 1,
    // DKind参数
    DKind: 0,
    // 初始阳光数量
    SunNum: 100,
    // 关卡名称
    LevelName: "小游戏：乱葬岗",
    // 关卡英文名称
    LvlEName: "MassGrave",
    // 特殊波次标志
    LargeWaveFlag: {
        10: $("imgFlag3"),
        20: $("imgFlag2"),
        30: $("imgFlag1")
    },
    // 关卡监控配置
    Monitor: {
        f: AppearTombstones,
        ar: [5, 9, 12]
    },
    // 用户自定义标志函数
    UserDefinedFlagFunc: function(b) {
        var a = oP.FlagZombies;
        switch (true) {
            case a > 20:
                oP.SetTimeoutTomZombie([oConeheadZombie, oConeheadZombie, oBucketheadZombie]);
                break;
            case a > 15:
                oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie]);
                break;
            case a > 10:
                oP.SetTimeoutTomZombie([oZombie, oConeheadZombie]);
                break;
            case a > 5:
                oP.SetTimeoutTomZombie([oZombie])
        }
    },
    // 开始游戏音乐
    StartGameMusic: "Ultimate battle"
}, {
    // 战斗波次配置
    AZ: [
        [oZombie, 1, 1],
        [oZombie2, 1, 1],
        [oZombie3, 1, 1],
        [oConeheadZombie, 2, 1],
        [oNewspaperZombie, 3, 1],
        [oBucketheadZombie, 2, 1]
    ],
    // 总波数
    FlagNum: 30,
    // 波次对应僵尸数量配置
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
        a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25]
    },
    // 波次监控配置
    FlagToMonitor: {
        // 第9波监测配置
        9: [ShowLargeWave, 0],
        // 第19波监测配置
        19: [ShowLargeWave, 0],
        // 最终波监测配置
        29: [ShowFinalWave, 0]
    }
    
});