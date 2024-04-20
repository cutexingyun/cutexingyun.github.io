oS.Init({
	PName: [oPeashooter],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oPoleVaultingZombie],
	GameModal: 1,
	CanSelectCard: 0,
	backgroundImage: "images/interface/background1.jpg",
	LevelName: '攻守兼备',
	LvlEName: 'CanYouDigIt',
	StaticCard: 0,
	StartGame: function() {
		//开始
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($('tdShovel'), $('dFlagMeter'), $('dTop')); //有铲子
		SetHidden($('dSunNum')); //不显示阳光
		oS.InitLawnMower(); //剪草机
		PrepareGrowPlants(function() { //开局直接刷僵尸
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
					(function() { //移动卡片的计时器
						var i = ArCard.length,
							Ar, offsetTop;
						while (i--)(offsetTop = (Ar = ArCard[i])
							.PixelTop) > 60 * i && ($(Ar.DID)
							.style.top = (Ar.PixelTop = offsetTop - 1) + 'px');
						oSym.addTask(5, arguments.callee, []);
					})();
				},
				ar: []
			}); //全局监控计时器
			var i, j;
			for (i = 1; i < 6; i++)
				for (j = 1; j < 10; j++)
					CustomSpecial(oWallNut, i, j);
			oP.AddZombiesFlag();
			SetVisible($("dFlagMeterContent"));
		})
	}
}, {
	AZ: [
		[oZombie, 1, 1],
		[oZombie2, 1, 1],
		[oZombie3, 1, 1],
		[oConeheadZombie, 1, 5],
		[oBucketheadZombie, 1, 10],
		[oPoleVaultingZombie, 1, 15]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19],
		a2: [3, 6, 12, 20, 14, 26, 38, 50]
	}, //代表第1-3波强度是1，4-5是2，6-9是3，其余是10
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowFinalWave, 0]
	}
}, {
	GetChoseCard: function(id) {
		var i = ArCard.length;
		while (i--) ArCard[i].DID == id && (oS.ChoseCard = i, i = 0);
		return oS.ChoseCard;
	},
	ViewPlantTitle: function(i, e) { //模拟img.title
		var d = $('dTitle'),
			AC = ArCard[i],
			Pro = AC.PName.prototype;
		d.innerHTML = Pro.CName + '<br>' + Pro.Tooltip;
		SetStyle(d, {
			top: e.clientY + 18 + EBody.scrollTop || EElement.scrollTop + 'px',
			left: (EDAlloffsetLeft + 100) + 'px'
		});
	},
	ChosePlant: function(a, b) {
		a = window.event || a;
		var f = ArCard[oS.ChoseCard],
			e = a.clientX + EBody.scrollLeft || EElement.scrollLeft,
			d = a.clientY + EBody.scrollTop || EElement.scrollTop,
			c = f.PName.prototype;
		oS.Chose = 1;
		EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll)
			.cloneNode(false), "MovePlantAlpha", "", {
				visibility: "hidden",
				filter: "alpha(opacity=40)",
				opacity: 0.4,
				zIndex: 30
			},
			EDAll);
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
	GrowPlant: function(k, c, b, f, a) {
		var i = oS.ChoseCard,
			g = ArCard[i],
			h = g.PName,
			j = h.prototype,
			d = g.DID,
			e;
		j.CanGrow(k, f, a) &&
			function() {
				(new h)
				.Birth(c, b, f, a, k);
				oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
					left: c - 30 + "px",
					top: b - 40 + "px",
					zIndex: 3 * f,
					visibility: "visible"
				})]);
				ClearChild($("MovePlant"), $("MovePlantAlpha"));
				$("dCardList")
					.removeChild(e = $(d));
				e = null;
				ArCard.splice(i, 1);
				oS.ChoseCard = "";
				oS.Chose = 0;
				GroundOnmousemove = function() {}
			}()
	}
});