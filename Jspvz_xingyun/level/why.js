oS.Init({
	PName: [oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oSplitPea,oJalapeno,oSpikeweed,oRepeater,oTallNut,oPumpkinHead,oSquash,oFlowerPot,oTorchwood,oThreepeater,oGatlingPea,oTwinSunflower,oSpikerock,oFumeShroom,oCoffeeBean,oGloomShroom,oSunShroom,oPuffShroom,oScaredyShroom,oGarlic,oGraveBuster,oStarfruit,oLilyPad,oHypnoShroom,oIceShroom,oDoomShroom,oTangleKelp,oSeaShroom,oPlantern,oCactus,oBlover,oCattail],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie],
	PicArr: function() {
		var a = oSnowPea.prototype,
			b = a.PicArr;
		return ["images/interface/background1.jpg", "images/interface/crater1.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1.jpg",
	CanSelectCard:1 ,
	Coord: 12,
	LevelName: "魔法猫咪",
	LvlEName: why,
	LargeWaveFlag: {
		9: $("imgFlag1")
	},
	StartGame: function() {
		StopMusic(), AllAudioStop();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		CustomPlants(0, 2, 5);
		CustomPlants(0, 3, 9);
		CustomPlants(0, 4, 1);
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
			BeginCool();
			oS.DKind && AutoProduceSun(50);
			oSym.addTask(15000, function() {
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeterContent"))
			}, [])
		})
	}
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oConeheadZombie, 2, 1],
		[oPoleVaultingZombie, 1, 1]
	],
	FlagNum: 9,
	FlagToSumNum: {
		a1: [3, 5, 8],
		a2: [1, 2, 3, 9]
	},
	FlagToMonitor: {
		8: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/Catttail.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oSnowPea, 47)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
	}
});