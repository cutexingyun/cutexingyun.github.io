oS.Init({
	PName: [oCherryBomb, oJalapeno, oPotatoMine, oGarlic, oWallNut],
	ZName: [oJackinTheBoxZombie],
	ShowScroll: true,
	SunNum: 25,
	PicArr: function() {
		var a = oPotatoMine.prototype,
			b = a.PicArr;
		return ["images/interface/background1.jpg", "images/interface/crater1.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1.jpg",
	CanSelectCard: 0,
	LevelName: "小游戏：十朵金花",
	LvlClearFunc: function() {
		oSym.TimeStep = 10
	},
	LvlEName: "TenFlowers",
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	StartGameMusic: "Watery Graves",
	StartGame: function() {
		oS.SunFlowerNum = 0;
		NewEle("DivTeach", "div", 0, {
			innerHTML: "你能保住至少１０朵向日葵吗？"
		}, EDAll);
		var a;
		for (a = 1; a < 7; a++) {
			CustomSpecial(oSunFlower, 1, a)
		}
		for (a = 1; a < 7; a++) {
			CustomSpecial(oSunFlower, 3, a)
		}
		for (a = 1; a < 7; a++) {
			CustomSpecial(oSunFlower, 5, a)
		}
		StopMusic();
		NewMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor();
			(function() {
				var b = 0;
				for (v in $P) {
					$P[v].EName == "oSunFlower" && ++b
				}
				b > 9 ? oSym.addTask(200, arguments.callee, []) : GameOver("请再接再厉！")
			})();
			BeginCool();
			oS.DKind && AutoProduceSun(25);
			oP.AddZombiesFlag();
			SetVisible($("dFlagMeterContent"));
			oSym.addTask(500, function() {
				ClearChild($("DivTeach"))
			}, [])
		})
	}
}, {
	AZ: [
		[oJackinTheBoxZombie, 3, 1]
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
		(function() {
			var a = 0;
			for (v in $P) {
				$P[v].EName == "oSunFlower" && ++a
			}
			a > 9 ? NewImg("imgSF", "images/interface/trophy.png", "left:417px;top:233px;z-index:256", EDAll, {
				onclick: function() {
					PlayAudio("winmusic");
					SelectModal(0);
					HiddenOptions();
					SetBlock($("dSurface"), $("iSurfaceBackground"));
					ShowNameDiv()
				}
			}) : GameOver("囧rz，失败乃兵家常事<br>请再接再厉！")
		})()
	}
});