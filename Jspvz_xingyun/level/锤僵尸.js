oS.Init({
	PName: [oCherryBomb,oIceShroom,oPotatoMine,oGraveBuster],
	ZName: [oZombie, oConeheadZombie, oBucketheadZombie],
	PicArr: function() {
		var a = oFumeShroom.prototype,
			b = a.PicArr;
		return ["images/interface/background2.jpg", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 0,
	DKind: 0,
	SunNum: 300,
	ShowScroll: false,
	LevelName: "锤僵尸",
	LvlEName: "ChuiZi",
	LevelEName: 'ChuiZi',
	LargeWaveFlag: {
	},
	Monitor: {
		f: AppearTombstones,
		ar: [7, 9, 6]
	},
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
	StartGameMusic: "Ultimate battle"
}, {
	AZ: [
		[oZombie, 1, 1],
		[oConeheadZombie, 2, 1],
		[oBucketheadZombie, 2, 1]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [],
		a2: [0]
	},
	FlagToMonitor: {
	}
});