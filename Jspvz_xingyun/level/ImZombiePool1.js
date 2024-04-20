/*
	关卡设计者: 寒冰投手
	关卡植物: 5大喷菇 3南瓜头 3魅惑菇 4土豆地雷 8向日葵 4三线射手 3机枪射手 3仙人掌 10荷叶
*/
oS.Init({
	PName: [oFumeShroom, oPumpkinHead, oHypnoShroom, oPotatoMine, oSunFlower, oThreepeater, oGatlingPea, oCactus, oLilyPad],
	ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oScreenDoorZombie, oPoleVaultingZombie, oBalloonZombie],
	PicArr: ["images/interface/background4.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
	backgroundImage: "images/interface/background4.jpg",
	Coord: 2, DKind: 0, LF: [0, 1, 1, 2, 2, 1, 1],
	ShowScroll: false, ProduceSun: false,
	SunNum: 350, BrainsNum: 6, CardKind: 1,
	LevelName: "泳池奇遇",
	LvlEName: "ImZombiePool1",
	LoadMusic: "Mountains", StartGameMusic: "Mountains",
	ArP: {
		ArC: [1, 5], ArR: [1, 6], Auto: 1,
		P: {
			Arr: [0, 0, 0, 0, 0, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7], 
			Arr1: [3, 3, 3, 3], Arr2: [1, 1, 1]
		}
	},
	RandomGrow: function(Point, Arr) {
		Point.sort(function () { return Math.random() - 0.5; });
		Arr.sort(function () { return Math.random() - 0.5; });
		while (Point.length && Arr.length) CustomSpecial(oS.PName[Arr[Arr.length - 1]], Point[Point.length - 1][1], Point[Point.length - 1][0], 1), Point.length--, Arr.length--;
	}, 
	RiddleAutoGrow: function() {
		var k = oS.ArP, f = k.ArC, j = k.ArR, e = k.P, d = oS.PName, Arr = [];
		var SummonRange = function(Arr, l, r) {
			for (; l <= r; ++l) for (var j = f[0]; j <= f[1]; ++j) Arr.push([j, l]);
		};
		SummonRange(Arr, 3, 4), oS.RandomGrow(Arr, e.Arr); // 处理泳池的植物
		SummonRange(Arr, 1, 2), SummonRange(Arr, 5, 6), oS.RandomGrow(Arr, e.Arr1), oS.RandomGrow(Arr, e.Arr); // 处理剩余的植物
		SummonRange(Arr, 1, 6), oS.RandomGrow(Arr, e.Arr2); // 处理南瓜头
		for (var i = f[0]; i <= f[1]; ++i) CustomSpecial(oLilyPad, 3, i), CustomSpecial(oLilyPad, 4, i); // 荷叶
		for (var i = j[0]; i <= j[1]; ++i) CustomSpecial(oBrains, i, 0); // 脑子
		NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(6)[0] - 11) + "px;top:65px", EDAll);
	},
	StartGame: function() {
		oP.Monitor(), BeginCool();
		SetVisible($("dFlagMeter"), $("dTop"));
		oS.RiddleAutoGrow();
	}
});