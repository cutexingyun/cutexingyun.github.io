// 初始化游戏参数
oS.Init({
    // 植物名称
    PName: [oCherryBomb, oIceShroom, oPotatoMine, oGraveBuster],
    // 僵尸名称
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
    // 图片数组
    PicArr: function() {
        var a = oFumeShroom.prototype,
            b = a.PicArr;
        return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
    }(),
    // 背景图片
    backgroundImage: "images/interface/background2.jpg",
    // 是否可以选择卡片
    CanSelectCard: 0,
    // DKind
    DKind: 0,
    // 初始阳光数量
    SunNum: 300,
    // 是否显示滚动条
    ShowScroll: false,
    // 关卡名称
    LevelName: "锤僵尸",
    // 关卡英文名称
    LvlEName: "ChuiZi",
    // 关卡英文名称
    LevelEName: 'ChuiZi',
    // 特殊波次标志
    LargeWaveFlag: {
        10: $("imgFlag3"),
        20: $("imgFlag2"),
        30: $("imgFlag1"),
	},
	// 监视器
	Monitor: {
	 f: AppearTombstones,
    ar: [7, 9, 12]  // 监视器参数
	},
    // 用户自定义标志函数
    UserDefinedFlagFunc: function(b) {
        var a = oP.FlagZombies;
        switch (true) {
            case a > 15:
                oP.SetTimeoutTomZombie([oZombie, oConeheadZombie, oBucketheadZombie]);
                break;
            case a > 10:
                oP.SetTimeoutTomZombie([oZombie, oConeheadZombie]);
                break;
            case a > 1:
                oP.SetTimeoutTomZombie([oZombie])
        }
    },
    // 开始游戏音乐
    StartGameMusic: "Ultimate battle"
},

 {
    // 属性数组
    AZ: [
        [oZombie, 1, 1],
        [oConeheadZombie, 2, 1],
        [oBucketheadZombie, 2, 1]
    ],
    // 初始旗帜数量
    FlagNum: 30,
    // 旗帜到总数映射
    FlagToSumNum: {
        a1: [30],
        a2: [0]
    },
    // 旗帜监视器
    FlagToMonitor: {
		 // 第9波监测配置
        9: [ShowLargeWave, 0],
        // 第19波监测配置
        19: [ShowLargeWave, 0],
        // 最终波监测配置
        29: [ShowFinalWave, 0]
	},
});