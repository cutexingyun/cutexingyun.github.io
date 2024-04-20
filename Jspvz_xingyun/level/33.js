oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus],
	ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oDuckyTubeZombie2, oConeheadZombie, oBalloonZombie],
	PicArr: function() {
		var b = oBlover.prototype,
			c = b.PicArr,
			a = "images/interface/fog",
			d = $User.Browser.IE && !$User.Browser.IE9 ? "gif" : "png";
		return ["images/interface/background4.jpg", c[b.CardGif], c[b.NormalGif], a + "0." + d, a + "1." + d, a + "2." + d, a + "3." + d]
	}(),
	Coord: 2,
	SunNum: 50,
	LF: [0, 1, 1, 2, 2, 1, 1],
	backgroundImage: "images/interface/background4.jpg",
	CanSelectCard: 1,
	DKind: 0,
	HaveFog: 4,
	LevelName: "关卡 4-3",
	LvlEName: 33,
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2])
	},
	StartGameMusic: "Loonboon"
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oDuckyTubeZombie1, 1, 6, [6, 10, 20]],
		[oConeheadZombie, 1, 1],
		[oBalloonZombie, 1, 10, [7, 10]]
	],
	FlagNum: 10,
	FlagToSumNum: {
		a1: [3, 5, 9],
		a2: [1, 2, 3, 10]
	},
	FlagToMonitor: {
		9: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
		NewImg("imgSF", "images/Card/Plants/Blover.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oBlover, 34)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
	}
});