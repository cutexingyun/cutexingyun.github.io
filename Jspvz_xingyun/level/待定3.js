oS.Init({
	PName: [oCherryBomb,oWallNut,oPumpkinHead,oTallNut],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie,oJackinTheBoxZombie,oFootballZombie,oZomboni],
	PicArr: ["images/interface/background1.jpg", "images/interface/trophy.png"],
	backgroundImage: "images/interface/background1.jpg",//坚果
	CanSelectCard: 0,
	LevelName: "阻击战",
	LvlEName: 10,
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag1")
	},
	StaticCard: 0,
	LoadMusic: 'Faster',
	StartGameMusic: '2.75',
	StartGame: function() {
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		SetHidden($("dSunNum"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor({
				f: function() {
					(function() {
						var a = ArCard.length;
						if (a < 10) {
							var c = oS.PName,
								b = Math.floor(Math.random() * c.length),
								e = c[b],
								d = e.prototype,
								f = "dCard" + Math.random();
							ArCard[a] = {
								DID: f,
								PName: e,
								PixelTop: 600
							};
							NewImg(f, d.PicArr[d.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
								onmouseover: function(g) {
									ViewPlantTitle(GetChoseCard(f), g)
								},
								onmouseout: function() {
									SetHidden($("dTitle"))
								},
								onclick: function(g) {
									ChosePlant(g, oS.ChoseCard, f)
								}
							})
						}
						oSym.addTask(600, arguments.callee, [])
					})();
					(function() {
						var b = ArCard.length,
							a, c;
						while (b--) {
							(c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID).style.top = (a.PixelTop = c - 1) + "px")
						}
						oSym.addTask(5, arguments.callee, [])
					})()
				},
				ar: []
			});
			oP.AddZombiesFlag();
			SetVisible($("dFlagMeterContent"))
		})
	},
	LoadAccess: function(a) {
		NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
		NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
					PlayAudio("crazydaveshort1");
					c.onclick = null;
					$("dDave")
						.src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave")
							.src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [1])
						}
					}, []);
					innerText(c, "听，令人头疼的声音(点击继续)");
					break;
				case 1:
					PlayAudio("crazydaveshort" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave")
						.src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave")
							.src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [2])
						}
					}, []);
					innerText(c, " 你花园里没有豌豆了(点击继续)");
					break;
				case 2:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave")
						.src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave")
							.src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [3])
						}
					}, []);
					innerText(c, "这是一些坚果和樱桃。(点击继续)");
					break;
				case 3:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave")
						.src = "images/interface/Dave3.gif";
					oSym.addTask(100, function() {
						$("dDave")
							.src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [4])
						}
					}, []);
					innerText(c, "拿去(点击继续)");
					break;
				case 4:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave")
						.src = "images/interface/Dave3.gif";
					oSym.addTask(100, function() {
						$("dDave")
							.src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [5])
						}
					}, []);
					innerText(c, "不管发生什么，我先撤了。(点击继续)");
					break;
				case 5:
					$("dDave")
						.src = "images/interface/Dave2.gif";
					ClearChild($("DivTeach"));
					oSym.addTask(50, function() {
						ClearChild($("dDave"));
						a(0);
						StopMusic();
						PlayMusic(oS.LoadMusic = "Look up at the Sky")
					}, [])
			}
		})(0)
	}
}, {
	AZ: [
		[oZombie, 1, 1],
		[oZombie2, 1, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 5, 1],
		[oPoleVaultingZombie, 2, 1],
		[oBucketheadZombie, 5, 1],
                [oJackinTheBoxZombie, 1, 2],
                [oFootballZombie, 2, 3],
                [oZomboni,2,10]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [3, 6, 12, 20, 24, 36, 48, 60]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
		NewImg("imgSF", "images/Card/Plants/PuffShroom.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oPuffShroom, 51);
				if ( Store.get('Town_关卡进程') < 51) {
					Store.set('Town_关卡进程',51)
				}
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
	}
}, {
	GetChoseCard: function(b) {
		if (oS.Chose) {
			return
		}
		var a = ArCard.length;
		while (a--) {
			ArCard[a].DID == b && (oS.ChoseCard = a, a = 0)
		}
		return oS.ChoseCard
	},
	ChosePlant: function(a, b) {
		PlayAudio("seedlift");
		a = window.event || a;
		var f = ArCard[oS.ChoseCard],
			e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft,
			d = a.clientY + EBody.scrollTop || EElement.scrollTop,
			c = f.PName.prototype;
		oS.Chose = 1;
		EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", {
			visibility: "hidden",
			filter: "alpha(opacity=40)",
			opacity: 0.4,
			zIndex: 30
		}, EDAll);
		SetAlpha($(f.DID), 50, 0.5);
		SetHidden($("dTitle"));
		GroundOnmousemove = GroundOnmousemove1
	},
	CancelPlant: function() {
		ClearChild($("MovePlant"), $("MovePlantAlpha"));
		oS.Chose = 0;
		SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
		oS.ChoseCard = "";
		GroundOnmousemove = function() {}
	},
	GrowPlant: function(l, c, b, f, a) {
		var j = oS.ChoseCard,
			g = ArCard[j],
			i = g.PName,
			k = i.prototype,
			d = g.DID,
			e, h = oGd.$LF[f];
		k.CanGrow(l, f, a) && function() {
			PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
			(new i).Birth(c, b, f, a, l);
			oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
				left: c - 30 + "px",
				top: b - 40 + "px",
				zIndex: 3 * f,
				visibility: "visible"
			})]);
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			$("dCardList").removeChild(e = $(d));
			e = null;
			ArCard.splice(j, 1);
			oS.ChoseCard = "";
			oS.Chose = 0;
			GroundOnmousemove = function() {}
		}()
	},
	ViewPlantTitle: function(a) {
		var c = $("dTitle"),
			b = ArCard[a].PName.prototype;
		c.innerHTML = b.CName + "<br>" + b.Tooltip;
		SetStyle(c, {
			top: 60 * a + "px",
			left: "100px"
		})
	}
});
//本关作者：20official