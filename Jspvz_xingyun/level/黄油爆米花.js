oS.Init({
	PName: [oCobCannon,oCobCannonNone,oCherryBomb],
	ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oConeheadZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oBucketheadZombie, oFootballZombie, oNewspaperZombie],
	PicArr: function() {
		var a = oSquash.prototype,
			b = a.PicArr;
		return ["images/interface/background3.jpg", "images/interface/Dave.gif", "images/interface/Dave2.gif", "images/interface/Dave3.gif", b[a.CardGif], b[a.NormalGif]]
	}(),
	Coord: 2,
	SunNum: 450,
	LF: [0, 1, 1, 2, 2, 1, 1],
	backgroundImage: "images/interface/background3.jpg",
	CanSelectCard: 1,
	LevelName: "黄油爆米花",
	LvlEName:"Cob",
	LevelEName:"Cob",
	LargeWaveFlag: {
		20: $("imgFlag1")
	},
	ShowScroll: false,
	InitLawnMower: function(){},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 2, [oDuckyTubeZombie1])
	},
	StartGame: function() {
		StopMusic(), AllAudioStop();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		CustomSpecial(oCobCannon, 1, 1);
		CustomSpecial(oCobCannon, 2, 1);
		CustomSpecial(oCobCannon, 5, 1);
		CustomSpecial(oCobCannon, 6, 1);
		PrepareGrowPlants(function() {
			oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
			BeginCool();
			oSym.addTask(1000, function() {
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeterContent"))
			}, [])
		})
	},
	StartGameMusic: "Kitanai Sekai"
}, {
	AZ: [
		//ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oConeheadZombie, oDuckyTubeZombie2, oDuckyTubeZombie3, oBucketheadZombie, oFootballZombie, oNewspaperZombie],
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 3, 1],
		[oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10]],
		[oDuckyTubeZombie2, 1, 6],
		[oDuckyTubeZombie3, 1, 6],
		[oConeheadZombie, 1, 1],
		[oBucketheadZombie, 1, 1],
		[oNewspaperZombie, 1, 1],
		[oFootballZombie, 2, 1]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [1, 2, 3, 10, 4, 5, 6, 15]
	},
	FlagToMonitor: {
		19: [ShowFinalWave, 0]
	}
}, {
	AutoSelectCard: function() {
		SelectCard(oCherryBomb.prototype.EName);
	}
});