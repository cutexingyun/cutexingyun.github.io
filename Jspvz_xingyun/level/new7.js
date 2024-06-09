oS.TsSsC = function() {
	v = confirm('请选择！（确定为简单，取消为困难）');
	if (v) {
		oS.Init({
			PName: ShengPlantList,
			ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie],
			PicArr: ["images/interface/background1.jpg"],
			backgroundImage: "images/interface/background1.jpg",
			CanSelectCard: 1,
			LevelName: "简单难度！",
			LvlEName: "TsSsC",
			LargeWaveFlag: {
				20: $("imgFlag1")
			}
		}, {
			AZ: [
				[oZombie, 1, 1],
				[oZombie2, 1, 1],
				[oZombie3, 1, 1],
				[oConeheadZombie, 5, 1],
				[oPoleVaultingZombie, 4, 1],
				[oBucketheadZombie, 4, 1]
			],
			FlagNum: 20,
			FlagToSumNum: {
				a1: [3, 4, 15, 19],
				a2: [1, 2, 3, 6, 20]
			},
			FlagToMonitor: {
				19: [ShowFinalWave, 0]
			}
		});
	} else {
		oS.Init({
			PName: ShengPlantList,
			ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie, oNewspaperZombie1, oFootballZombie, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3],
			PicArr: ["images/interface/background3.jpg"],
			Coord: 2,
			backgroundImage: "images/interface/background3.jpg",
			LF: [0, 1, 1, 2, 2, 1, 1],
			CanSelectCard: 1,
			LevelName: "困难难度！",
			LvlEName: "TsSsC",
			UserDefinedFlagFunc: function(a) {
				oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1])
			},
			LargeWaveFlag: {
				30: $("imgFlag1")
			}
		}, {
			AZ: [
				[oZombie, 1, 1],
				[oZombie2, 1, 1],
				[oZombie3, 1, 1],
				[oConeheadZombie, 5, 1],
				[oPoleVaultingZombie, 4, 1],
				[oBucketheadZombie, 4, 1],
				[oNewspaperZombie1, 1, 1],
				[oFootballZombie, 1, 5],
				[oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10, 19, 20, 25, 30]],
				[oDuckyTubeZombie2, 1, 6, [10, 20, 30]],
				[oDuckyTubeZombie3, 1, 6, [10, 20, 30]]
			],
			FlagNum: 30,
			FlagToSumNum: {
				a1: [3, 4, 15, 19, 25, 29],
				a2: [1, 2, 6, 8, 40, 6, 60]
			},
			FlagToMonitor: {
				29: [ShowFinalWave, 0]
			}
		});
	}
};
oS.TsSsC();