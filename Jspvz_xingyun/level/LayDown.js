(function () {
	var Normal_Zombie_Wave = [3, 5, 10, 15, 20, 25, 30, 35, 40]; // 默认僵尸出现的波 

	oS.Init({
		PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oTorchwood, oGatlingPea, oGloomShroom, oTwinSunflower],
		ZName: [oBackupDancer, oZombie, oZombie2, oZombie3, oPoleVaultingZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDolphinRiderZombie, oSnorkelZombie, oZomboni, oJackinTheBoxZombie, oBalloonZombie],
		StageCard_1: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater],
		StageCard_2: [oSunFlower, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom],
		StageCard_3: [oCherryBomb, oDoomShroom, oSunFlower, oRepeater, oFumeShroom, oGloomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oTwinSunflower],
		StageCard_4: [oCherryBomb, oSunFlower, oRepeater, oFumeShroom, oSpikeweed, oGatlingPea, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit, oPumpkinHead, oTorchwood],
		StageZCard_1: [oZombie, oPoleVaultingZombie, oConeheadZombie, oBucketheadZombie],
		StageZCard_2: [oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie],
		StageZCard_3: [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDolphinRiderZombie, oSnorkelZombie],
		StageZCard_4: [oZomboni, oJackinTheBoxZombie, oBalloonZombie],
		PicArr: (function() { // 加载的图片
			var b = oBlover.prototype, c = b.PicArr, a = "images/interface/fog", d = $User.Browser.IE && !$User.Browser.IE9 ? "gif": "png";
			return ["images/interface/background4.jpg", c[b.CardGif], c[b.NormalGif], a + "0." + d, a + "1." + d, a + "2." + d, a + "3." + d];
		})(),
		Coord: 2, SunNum: 400, LF: [0, 1, 1, 2, 2, 1, 1],
		backgroundImage: "images/interface/background4.jpg",
		CanSelectCard: 0, DKind: 0, HaveFog: 6, StaticCard: 0, AutoMoveFog: false, 
		LevelName: "你敢放下它么", LvlEName: "LayDown",
		StartGameMusic: "2.75", SummonCoolTime: 55, // 生成卡片的间隔
		LargeWaveFlag: {
			10: $("imgFlag4"), 20: $("imgFlag3"),
			30: $("imgFlag2"), 40: $("imgFlag1"),
		},
		UserDefinedFlagFunc: function(a){ oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 4, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3]); },
		StartGame: function() {
			StopMusic(), PlayMusic(oS.LoadMusic = oS.StartGameMusic);
			SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop")), oS.InitLawnMower();

			NewEle("DivTeach", "div", 0, { innerHTML: "在最后一波结束之前获得4000阳光！" }, EDAll);
			oSym.addTask(500, function() { ClearChild($("DivTeach")); }, []); // 提示字

			oSym.addTask(100, function() { (oP.FlagZombies != 31) ? oSym.addTask(100, arguments.callee) : oGd.MoveFogLeft(); }); // 雾
			oSym.addTask(100, function(NowFlag) { // 夜晚墓碑
				if (oP.FlagZombies >= NowFlag) 	oP.SetTimeoutTomZombie(oS.StageZCard_2), AppearTombstones(4, 9, 1, function (R) { return R != 3 && R != 4; }), NowFlag += 3;
				if (NowFlag < 18) oSym.addTask(100, arguments.callee, [NowFlag]);
			}, [11]);

			PrepareGrowPlants(function() {
				oP.Monitor({
					f: function() {
						oGd.MoveFogRight();

						(function() {
							var a = ArCard.length;
							if (a < 10) { // 如果卡片数量不够多
								oS.SummonCoolTime = Math.min(400, oS.SummonCoolTime + 5); // 间隔时间逐渐加长
								var c, NowFlag = oP.FlagZombies, CType = Math.floor(Math.max(0, NowFlag - 1) / 10) + 1;
								if (GetRandom(8)) c = oS["StageZCard_" + CType];
								else c = $SSml(NowFlag, 
									[0, 10, 11, 20, 21, 24, 30, 31], 
									[
										[],
										oS["StageCard_1"], // 0 ~ 9
										[oCherryBomb, oSunFlower], // 10
										oS["StageCard_2"], // 11 ~ 19
										GetRandom(2) ? oS["StageCard_2"] : [oDoomShroom], // 20
										[oLilyPad], // 21 ~ 23
										oS["StageCard_3"], // 24 ~ 29
										GetRandom(2) ? oS["StageCard_2"] : [oCherryBomb, oJalapeno], // 30
										oS["StageCard_4"] // 31 ~ ...
									]
								);
							
								var b = Math.floor(Math.random() * c.length), e = c[b], d = e.prototype, f = "dCard" + Math.random();
								ArCard[a] = { DID: f, PName: e, PixelTop: 600 };
								NewImg(f, d.PicArr[d.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
									onclick: function(g) {
										ClearChild($("MovePlant"), $("MovePlantAlpha"));
										for(var Idx in ArCard) SetAlpha($(ArCard[Idx]["DID"]), 100, 1);
										ViewPlantTitle(GetChoseCard(f), g); ChosePlant(g, oS.ChoseCard, oS.ChoseCard)
									}
								});
							}
							oSym.addTask(oS.SummonCoolTime, arguments.callee, [])
						})();

						(function() { // 卡片移动，要适应不同的倍速
							var b = ArCard.length, a, c, d, SPX = 0.5 * (oSym.NowStep / 1), STk = oSym.NowStep;
							while (b--) a = ArCard[b], c = a.PixelTop, d = 60 * b, $(a.DID).style.top = (a.PixelTop = (c > 60 * b) ? (c - SPX) : (d)) + "px";
							oSym.addTask(STk, arguments.callee, [])
						})();
					}, ar: []
				});
				oSym.addTask(700, function () { oP.AddZombiesFlag(), SetVisible($("dFlagMeterContent")); }, []);
			})
		}
	}, {
		AZ: [[oZombie, 4, 1, Normal_Zombie_Wave], [oZombie2, 3, 1, Normal_Zombie_Wave], [oZombie3, 2, 1, [1, 3, 5, 8, 10, 13, 15, 17, 20, 25, 30, 35, 40]], [oPoleVaultingZombie, 2, 3, Normal_Zombie_Wave], [oConeheadZombie, 4, 1, Normal_Zombie_Wave], [oBucketheadZombie, 2, 1, Normal_Zombie_Wave],  [oNewspaperZombie, 2, 11, [11, 12, 13, 14, 17, 20, 31, 32, 34, 36, 38, 40]], [oScreenDoorZombie, 1, 15, [15, 16, 17, 19, 25, 30, 35, 39, 40]], [oFootballZombie, 2, 17, [17, 20, 24, 28, 30, 34, 38, 40]], [oDancingZombie, 1, 19, [19, 20, 30, 40]], [oDuckyTubeZombie1, 1, 21, [21, 23, 25, 28, 30, 32, 33, 34, 35, 36, 38, 40]], [oDuckyTubeZombie2, 1, 22, [22, 27, 28, 37, 39, 40]], [oDuckyTubeZombie3, 1, 24, [24, 29, 32, 38, 40]], [oDolphinRiderZombie, 1, 26, [26, 29, 30, 31, 35, 39, 40]], [oSnorkelZombie, 1, 29, [30, 34, 40]], [oZomboni, 1, 31, [31, 35, 36, 37, 40]], [oJackinTheBoxZombie, 1, 34, [34, 35, 38, 39, 40]], [oBalloonZombie, 1, 35, [38, 40]]],
		FlagNum: 40, ZTimeStep: 10, // 移动速度增加
		FlagToSumNum: {
			a1: [   3,  5,  9, 10, 12, 15, 19, 20, 23, 25, 29, 30, 32, 36, 38, 39],
			a2: [6, 9, 14, 25, 20, 24, 30, 50, 36, 42, 48, 60, 50, 60, 70, 80, 95]
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowLargeWave, 0],
			39: [ShowFinalWave, 0]
		},
		FlagToEnd: function() {
			if(oS.SunNum < 4000) return ClearChild($("DivA")), GameOver("囧rz，失败乃兵家常事<br>阳光未达标，请再接再厉！");
			NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, { onclick: function() { SelectModal(0), PlayAudio("winmusic"); } });
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll);
		}
	}, {
		GetRandom: function (R) { return Math["floor"](Math["random"]() * R) == 0; }, 
		GetChoseCard: function(b) {
			var a = ArCard.length;
			while (a--) ArCard[a].DID == b && (oS.ChoseCard = a, a = 0);
			return oS.ChoseCard
		},
		ChosePlant: function(a, b) {
			PlayAudio("seedlift"); a = window.event || a;
			var f = ArCard[oS.ChoseCard = b], e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft, d = a.clientY + EBody.scrollTop || EElement.scrollTop, c = f.PName.prototype;
			EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", { visibility: "hidden", filter: "alpha(opacity=40)", opacity: 0.4, zIndex: 30 }, EDAll);
			SetAlpha($(f.DID), 50, 0.5);
			SetHidden($("dTitle"));
			oS.Chose = 1, GroundOnmousemove = GroundOnmousemove1;
		},
		CancelPlant: function() {
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			oS.Chose = 0, oS.ChoseCard = "";
			for(var Idx in ArCard) SetAlpha($(ArCard[Idx].DID), 100, 1);		
			GroundOnmousemove = function() {};
		},
		GrowPlant: function(l, c, b, f, a) {
			var j = oS.ChoseCard, g = ArCard[j], i = g.PName, k = i.prototype, d = g.DID, e, h = oGd.$LF[f], n = k.name;

			if (k.CanGrow(l, f, a)) {
				if (n == "Zombies") SummonZombie(i, f, a);
				else (new i).Birth(c, b, f, a, l);

				PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
				oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), { left: c - 30 + "px", top: b - 40 + "px", zIndex: 3 * f, visibility: "visible" })]);
				$("dCardList").removeChild(e = $(d)), ArCard.splice(j, 1);
			}

			for(var Idx in ArCard) SetAlpha($(ArCard[Idx].DID), 100, 1);
			
			oS.ChoseCard = "", oS.Chose = 0;
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			GroundOnmousemove = function() {};
		},
		ViewPlantTitle: function(a) {},
		MonitorCard: function(a) {},
		SummonZombie: function(id, e, b) { ++oP.NumZombies, asyncInnerHTML((a = new id).CustomBirth(e, b, 1, "auto"), function(n, m) { EDPZ.appendChild(n); m.Birth(); }, a); return a; }
	});
})();