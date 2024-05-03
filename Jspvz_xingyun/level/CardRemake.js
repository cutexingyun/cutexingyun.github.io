oS.Init({
	NextCard: {oPeashooter:oSunFlower,oSunFlower:oCherryBomb,oCherryBomb:oWallNut,oWallNut:oPotatoMine,oPotatoMine:oSnowPea,oSnowPea:oChomper,oChomper:oRepeater,oRepeater:oPuffShroom,oPuffShroom:oSunShroom,oSunShroom:oFumeShroom,oFumeShroom:oHypnoShroom,oHypnoShroom:oScaredyShroom,oScaredyShroom:oIceShroom,oIceShroom:oDoomShroom,oDoomShroom:oLilyPad,oLilyPad:oSquash,oSquash:oThreepeater,oThreepeater:oTangleKelp,oTangleKelp:oJalapeno,oJalapeno:oSpikeweed,oSpikeweed:oTorchwood,oTorchwood:oTallNut,oTallNut:oSeaShroom,oSeaShroom:oPlantern,oPlantern:oCactus,oCactus:oSplitPea,oSplitPea:oStarfruit,oStarfruit:oPumpkinHead,oPumpkinHead:oFlowerPot,oFlowerPot:oCoffeeBean,oCoffeeBean:oGarlic,oGarlic:oPeashooter,oGatlingPea:oTwinSunflower,oTwinSunflower:oGloomShroom,oGloomShroom:oSpikerock,oSpikerock:oGatlingPea},
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oGatlingPea, oTwinSunflower, oGloomShroom, oSpikerock],
	ZName: [oZombie,oZombie2,oZombie3,oConeheadZombie,oBucketheadZombie,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oPoleVaultingZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oBalloonZombie,oDolphinRiderZombie,oSnorkelZombie,oZomboni,oJackinTheBoxZombie],
	PicArr: ["images/interface/Taco.png","images/interface/background3.jpg"],
	backgroundImage: "images/interface/background3.jpg",
	CanSelectCard: 1,
	Coord: 2,
	SunNum: 2000,
	LF: [0, 1, 1, 2, 2, 1, 1],
	LevelName: "卡槽轮班",
	LvlEName: "CardRemake",
	LargeWaveFlag: {
		10: $("imgFlag4"), 20: $("imgFlag3"),
		30: $("imgFlag2"), 40: $("imgFlag1")
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3]);
	},
	StartGameMusic: "Kitanai Sekai",
	StartGame: function() {
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
			BeginCool();
			oS.DKind && AutoProduceSun(25);
			oSym.addTask(1500, function() {
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeterContent"));
			},[]);
		})
	}
}, {
	AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 3], [oPoleVaultingZombie, 1, 4], [oBucketheadZombie, 1, 9, [9,10]], [oDuckyTubeZombie1, 2, 6], [oDuckyTubeZombie2, 0, 8], [oDuckyTubeZombie3, 0, 10], [oDolphinRiderZombie, 1, 10], [oSnorkelZombie, 1, 14], [oNewspaperZombie, 1, 17], [oScreenDoorZombie, 1, 13], [oFootballZombie, 1, 19], [oJackinTheBoxZombie, 1, 22], [oBalloonZombie, 1, 27], [oZomboni, 1, 36, [40,40]]],
	FlagNum: 40,
	FlagToSumNum: {
		a1: [   3, 5,  9, 10, 13, 15, 19, 20, 23, 25, 29, 30, 32, 35, 37, 38, 39],
		a2: [1, 3, 5, 12, 7, 10, 12, 20, 14, 16, 18, 30, 19, 21, 24, 27, 30, 50]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowLargeWave, 0],
		29: [ShowLargeWave, 0],
		39: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, {
			onclick: function() {
				SelectModal(0);
				PlayAudio("winmusic");
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll)
	}
}, {
	SetNextCard: function (d) {
		if (!(h = ArCard[d])) return;
		var Next = oS.NextCard[(m = h.PName).prototype.EName], w = Next.prototype;
		ArCard[d].PName = Next , r = $(ArCard[d].DID) , r.firstChild.src = w.PicArr[w.CardGif];
		$("sSunNum" + d).innerText = w.SunNum, MonitorCard();
	},
	SetALlNextCard: function () {
		for (var i in ArCard) SetNextCard(i);
	},
	DecideMoveCard: function (j){
		if (oP.FlagZombies <= 20) SetNextCard(j);
		else if (oP.FlagNum != oP.FlagZombies) SetALlNextCard(j);
		else SetALlNextCard(j), SetNextCard(j);
	},
	GrowPlant : function (l, d, c, e, b) {
		var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e];
		if (k.CanGrow(l, e, b)) {
			PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
			if(!oS.CardKind) (new h).Birth(d, c, e, b, l); 
			else asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"),function(n, m) {EDPZ.appendChild(n);m.Birth(); },a);
			innerText(ESSunNum, oS.SunNum -= k.SunNum);
			i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime));
			oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {left: d - 30 + "px" , top: c - 30 + "px" , zIndex: 3 * e + 1 , visibility: "visible"})]);
			DecideMoveCard(j);
		};
		CancelPlant();
	}
});
