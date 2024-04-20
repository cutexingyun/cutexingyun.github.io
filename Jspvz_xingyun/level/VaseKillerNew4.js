// VaseKillerNew4
oS.Init({
	PName: [oCherryBomb, oRepeater, oGatlingPea, oGarlic, oTallNut, oTorchwood, oBlover, oLilyPad, oCoffeeBean, oDoomShroom],
	ZName: [oZombie, oZombie2, oZombie3, oPoleVaultingZombie, oBucketheadZombie, oDuckyTubeZombie1, oDuckyTubeZombie3, oBalloonZombie, oJackinTheBoxZombie],
	PicArr: ["images/interface/background3.jpg","images/interface/trophy.png","images/interface/PointerDown.gif","images/interface/Stripe.png"], 
	backgroundImage: "images/interface/background3.jpg", 
	DKind: 1, ShowScroll: false, ProduceSun: false, 
	LevelName: "不可犹豫", LvlEName: "VaseKillerNew4", 
	Coord: 2, HaveFog: 0, LF: [0, 1, 1, 2, 2, 1, 1], 
	CanSelectCard: 0, StartGameMusic: "Mountains", SunNum: 150, 
	RiddleAutoGrow: function() {
		var P = oS.VaseArP, L = P.Left, R = P.Right, GNum = P.GreenNum, ZNum = P.ZombieNum, VaseList = [], GroundList = [];
		var SummonAll = function () { // 生成罐子函数
			while (VaseList.length && GroundList.length) {
				var Top = VaseList[VaseList.length - 1], Pos = GroundList[GroundList.length - 1];

				var ret = oFlowerVase.prototype.SpecialBirth(Pos[0], Pos[1], 0, Top); // 生成罐子

				ret.CardTime = 750, ret.AutoSummonBase = false; // 特殊设置卡片时间 生成底座后，关闭删除该底座的权限

				--VaseList.length, --GroundList.length;
			}
		};

		// 生成水路罐子列表 格子列表（水路） 并打乱 生成
		for (var O in P.WaterZombieP) VaseList.push({ "Type": "Zombie", "Value": oS.ZName[P.WaterZombieP[O]] });
		for (L = P.Left; L <= R; ++L) for (var Q = 1; Q <= oS.R; ++Q) if (oGd.$LF[Q] == 2) GroundList.push([Q, L]);
		VaseList.sort(function () { return Math.random() - 0.5; });
		GroundList.sort(function () { return Math.random() - 0.5; });
		SummonAll(), VaseList.length = 0; // 清空泳池的僵尸


		// 加入植物、阳光罐，顶满泳池 并打乱 生成
		for (var O in P.PlantP) VaseList.push({ "Type": "Plants", "Value": oS.PName[P.PlantP[O]] });
		for (var O in P.SunP) VaseList.push({ "Type": "SunNum", "Value": P.SunP[O] });
		VaseList.sort(function () { return Math.random() - 0.5; });
		GroundList.sort(function () { return Math.random() - 0.5; });
		SummonAll(), GroundList.length = 0; // 如果加入的这些都没有顶满水路，那么直接放弃水路生成


		// 加入陆地僵尸 并加入剩余格子 打乱 生成
		for (var O in P.ZombieP) VaseList.push({ "Type": "Zombie", "Value": oS.ZName[P.ZombieP[O]] });
		for (L = P.Left; L <= R; ++L) for (var Q = 1; Q <= oS.R; ++Q) if (oGd.$LF[Q] != 2) GroundList.push([Q, L]);
		VaseList.sort(function () { return Math.random() - 0.5; });
		GroundList.sort(function () { return Math.random() - 0.5; });
		SummonAll(), VaseList.length = 0;


		// 获取场上所有罐子位置
		for (L = P.Left; L <= R; ++L) for (var Q = 1; Q <= oS.R; ++Q) GroundList.push([Q, L]);
		GroundList.sort(function () { return Math.random() - 0.5; });
		while (GroundList.length && (ZNum > 0 || GNum > 0)) {
			var Pos = GroundList[GroundList.length - 1], Val = oGd.$[Pos[0] + "_" + Pos[1] + "_1"];
			if (Val && Val.EName == "oFlowerVase" && Val.VaseValue.Type == "Zombie" && ZNum > 0) Val.InitImage(2, Val.XRay), Val.CardTime = 500, --ZNum;
			if (Val && Val.EName == "oFlowerVase" && Val.VaseValue.Type == "Plants" && GNum > 0) Val.InitImage(1, Val.XRay), Val.CardTime = 500, --GNum;
			--GroundList.length;
		}
	}, 
	StartGame: function() {
		oP.Monitor(), SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		StopMusic(), PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		for (var i in ArCard) DoCoolTimer(i, 0);
		var f = function () { // 检测这一部分是否结束
			if (oFlowerVase.prototype.GetLevelStatus()) oP.FlagToEnd();
			else oSym.addTask(100, f, []);
		};

		oS.RiddleAutoGrow(), f(); // f 的调用一定要在生成罐子后面

		// oSym.addTask(1000, oGd.MoveFogLeft, []); // 生成雾
	}, 

	VaseArP : {
		GreenNum: 5, ZombieNum: 6, Left: 4, Right: 9, 
		ZombieP: [0, 0, 1, 1, 2, 2, 3, 4, 4, 4, 4, 7], 
		WaterZombieP: [5, 5, 6, 6, 6, 6, 7, 8], 
		PlantP: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6], 
		SunP: [] 
	}
}, 0, {
	AutoSelectCard: function() {
		SelectCard("oCherryBomb"), SelectCard("oLilyPad"), SelectCard("oCoffeeBean"), SelectCard("oTallNut");
	}
});
