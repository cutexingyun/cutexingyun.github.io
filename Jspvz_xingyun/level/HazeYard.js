oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom],
	ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oConeheadZombie, oBucketheadZombie, oPoleVaultingZombie, oDolphinRiderZombie, oSnorkelZombie, oJackinTheBoxZombie, oZomboni],
	PicArr: function() {
		var a = "images/interface/fog",
			b = $User.Browser.IE && !$User.Browser.IE9 ? "gif" : "png";
		return ["images/interface/background4.jpg", "images/interface/trophy.png", a + "0." + b, a + "1." + b, a + "2." + b, a + "3." + b]
	}(),
	Coord: 2,
	SunNum: 175,
	LF: [0, 1, 1, 2, 2, 1, 1],
	backgroundImage: "images/interface/background4.jpg",
	CanSelectCard: 1,
	DKind: 0,
	HaveFog: 7,
	LevelName: "小游戏：阴霾小院",
	LvlEName: "HazeYard",
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag2"),
		30: $("imgFlag1")
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1])
	},
	StartGameMusic: "Loonboon"
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 3, 1],
		[oZombie3, 2, 1],
		[oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10, 19, 20, 25, 30]],
		[oConeheadZombie, 4, 1],
		[oBucketheadZombie, 2, 1],
		[oPoleVaultingZombie, 1, 10],
		[oDolphinRiderZombie, 1, 10, [10, 14, 15, 16, 18, 19, 20]],
		[oSnorkelZombie, 1, 15, [15, 16, 18, 20, 25, 30]],
		[oJackinTheBoxZombie, 1, 5, [5, 10, 15, 20, 25, 30]],
		[oZomboni, 1, 20, [20, 25, 30]]
	],
	FlagNum: 30,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
		a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowLargeWave, 0],
		29: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/Plantern.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				SelectModal(0)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
	}
});