oS.Init({ // 本关名称为黑森林，黑夜场景，有满屏的墓碑和，铲子已丢失，开局有6500阳光等待使用，本关推荐使用杨桃
	PName: [oCoffeeBean, oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oCoffeeBean,oGraveBuster,oPumpkinHead,oCherryBomb,oFlowerPot,oPotatoMine,oStarfruit,oWallNut,oTallNut,oThreepeater,oSquash], // 空虚感
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie,oScreenDoorZombie, oFootballZombie, oDancingZombie, oPoleVaultingZombie, oBackupDancer], // 加载的僵尸列表
	CanSelectCard: 1, // 1将手动选卡
	PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/PointerDown.gif"], // 加载的图片
	backgroundImage: "images/interface/background2.jpg",
	SunNum: 6500,
	LF: [0, 1, 1, 1, 1, 1], // 草地
	ZF: [0, 1, 1, 1, 1, 1], // 每路僵尸可出现的种类
	LevelName: "黑森林", // CTitle
	LvlEName: "dark_forest", // ETitle
	StartGameMusic: "Ultimate battle", // 黑夜草坪BGM
	LargeWaveFlag: { // flag html
		10: $("imgFlag3"),
		20: $("imgFlag2"),
		30: $("imgFlag1")
	},
	UserDefinedFlagFunc: function(a) { // 每波自定义，a 是当前波
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oFootballZombie, oFootballZombie, oScreenDoorZombie, oDancingZombie, oBucketheadZombie]); // 最后一波
		oP.FlagZombies > 24 && oP.FlagZombies != oP.FlagNum && oP.SetTimeoutTomZombie([oFootballZombie, oFootballZombie, oDancingZombie, oDancingZombie, oBucketheadZombie]); // 25波以后增大舞王概率
		oP.FlagZombies == 20 && oP.SetTimeoutTomZombie([oFootballZombie, oDancingZombie, oConeheadZombie, oBucketheadZombie]); // 20波
		oP.FlagZombies >= 15 && oP.FlagZombies <= 19 && (Math.random() < 0.25) && oP.SetTimeoutTomZombie([oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oDancingZombie, oPoleVaultingZombie]); // 随机出 14~20 的
		oP.FlagZombies >= 11 && oP.FlagZombies <= 13 && (Math.random() < 0.1) && oP.SetTimeoutTomZombie([oZombie, oZombie2, oZombie3, oConeheadZombie, oNewspaperZombie, oScreenDoorZombie, oPoleVaultingZombie]); // 随机出 11~13 的
		oP.FlagZombies == 10 && oP.SetTimeoutTomZombie([oZombie, oZombie2, oZombie3, oPoleVaultingZombie]); // 15波
	},
	StartGame: function() { // 开始游戏时的函数
		AppearTombstones(1, 9, 40), StopMusic(), AllAudioStop(); // 升起墓碑，停止音乐
		PrepareGrowPlants(function() { // 开始游戏后执行的函数
			oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
			BeginCool(), PlayMusic(oS.StartGameMusic); // 开始冷却、放音乐
			oSym.addTask(1200, function() { // 关卡难度极大，故 12 秒准备
				oP.AddZombiesFlag(), SetVisible($("dFlagMeterContent")); // 开始第一波
			}, []);
		});
	}
}, {
	// AZ 是一个列表，用于存放出场僵尸的数据，列表里每一项均为列表，其作用是 [僵尸, 关卡预览显示数量, 第一次出场的波数, [一定会出场的波数列表]]，如 [oZombie, 5, 3, [1, 10, 20]] 会让僵尸在预览中出现 5 只，且仅在第三波以后出现，但是第 1、10、20 波会固定生成一只僵尸
	AZ: [[oZombie, 0, 1], [oZombie2, 2, 1], [oZombie3, 0, 1], [oConeheadZombie, 0, 4], [oBucketheadZombie, 0, 4, [7]],[oScreenDoorZombie, 0, 10, [1]], [oFootballZombie, 0, 16, [4, 7, 10]], [oDancingZombie, 0, 19, [10]], [oPoleVaultingZombie, 0, 15, [2]]],
	FlagNum: 30, // 本关波数
	FlagToSumNum: { // a1与a2对应，但是a1对应的波数非理解我们理解的波数，要 -1
		a1: [   3, 6, 8,  9, 10, 13, 15, 17, 19, 20, 23, 25, 27,  29],  // $SSml的特性，为了方便阅读采取这样的对齐
		a2: [1, 2, 5, 7, 30, 10, 13, 16, 19, 52, 23, 27, 40, 53, 101] // 出怪价值
	},
	FlagToMonitor: { // 大波函数
		9: [ShowLargeWave, 0],
		19: [ShowLargeWave, 0],
		29: [ShowFinalWave, 0]
	},
	FlagToEnd: function() { // 通关时执行的函数
		NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, { // 奖杯
			onclick: function() {SelectModal(0), PlayAudio("winmusic");} // 先 SelectModal 可以确保过关音乐正常播放
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll); // 箭头
	}
}, {}); // 大帅，到皇姑屯了！
//很好的关卡来自二十official