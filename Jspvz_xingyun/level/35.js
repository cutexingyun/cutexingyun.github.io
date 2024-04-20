oS.Init({
	PName: [oCherryBomb, oPeashooter, oSquash, oSnowPea, oHypnoShroom, oRepeater2], 
	ZName: [oZombie, oZombie2, oZombie3, oBucketheadZombie, oFootballZombie, oJackinTheBoxZombie, oDancingZombie, oBackupDancer], 
	PicArr: ["images/interface/background2.jpg","images/interface/trophy.png","images/interface/PointerDown.gif","images/interface/Stripe.png","images/Card/Plants/SplitPea.png"], 
	backgroundImage: "images/interface/background2.jpg", 
	DKind: 0, ShowScroll: false, 
	ProduceSun: false, CanSelectCard: 0, 
	LvlEName: "35", LevelName: "关卡 4-5", 
	SunNum: 0, StartGameMusic: "Mountains", 
	VaseArP: {}, // 暂时留空
	VaseList: [
		{
			GreenNum: 0, // 绿色罐子数量
			Left: 7, Right: 9, // 生成的列范围
			ZombieP: [0, 0, 1, 2, 3], // 僵尸罐子
			PlantP: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2], // 植物罐子
			SunP: [], // 阳光罐子列表
		}, 
		{
			GreenNum: 2, // 绿色罐子数量
			Left: 6, Right: 9, // 生成的列范围
			ZombieP: [0, 0, 1, 1, 2, 3, 4], // 僵尸罐子
			PlantP: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3], // 植物罐子
			SunP: [], // 阳光罐子列表
		}, 
		{
			GreenNum: 3, // 绿色罐子数量
			Left: 5, Right: 9, // 生成的列范围
			ZombieP: [0, 0, 1, 1, 2, 2, 3, 3, 5, 6], // 僵尸罐子
			PlantP: [1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], // 植物罐子
			SunP: [], // 阳光罐子列表
		} 
	], 
	RiddleAutoGrow: function() {
		var P = oS.VaseArP, L = P.Left, R = P.Right, GNum = P.GreenNum, VaseList = [], GroundList = [];

		// 生成罐子列表
		for (var O in P.ZombieP) VaseList.push({ "Type": "Zombie", "Value": oS.ZName[P.ZombieP[O]] });
		for (var O in P.PlantP) VaseList.push({ "Type": "Plants", "Value": oS.PName[P.PlantP[O]] });
		for (var O in P.SunP) VaseList.push({ "Type": "SunNum", "Value": P.SunP[O] });

		// 生成格子列表
		for (; L <= R; ++L) for (var Q = 1; Q <= oS.R; ++Q) GroundList.push([Q, L]);

		// 打乱两者
		VaseList.sort(function () { return Math.random() - 0.5; });
		GroundList.sort(function () { return Math.random() - 0.5; });

		// 生成罐子
		while (VaseList.length && GroundList.length) {
			var Top = VaseList[VaseList.length - 1], Pos = GroundList[GroundList.length - 1];

			oFlowerVase.prototype.SpecialBirth(Pos[0], Pos[1], (Top.Type == "Plants"? GNum-- > 0: 0), Top); // 生成罐子

			--VaseList.length, --GroundList.length
		}
	}, 
	StartGame: function() { // 开始游戏基本设置
		oP.Monitor(), oS.InitLawnMower();
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		for (var i in ArCard) DoCoolTimer(i, 0);
	}, 
	LoadAccess: function (CallBack) {
		oS.VaseArP = oS.VaseList[0]; // 第一部分的罐子
		oS.RiddleAutoGrow(), StopMusic(), PlayMusic(oS.LoadMusic = 'Faster'), GameStage(1, CallBack);
	}
}, {
	FlagToEnd: function() {
		NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
		NewImg("imgSF", "images/Card/Plants/SplitPea.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() { GetNewCard(this, oSplitPea, 36); }
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll);
	}
}, {
	AutoSelectCard: function() { // 只选择樱桃炸弹
		SelectCard(oCherryBomb.prototype.EName);
	}, 
	CreateSpeaking: function (TextArr, CallBack) { // 创建一个对话
		// 创建戴夫等元素
		var Count = 0, DivA = NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
		var DivTeach = NewEle("DivTeach", "div", "z-index:170", 0, EDAll), dDave = NewImg("dDave", "images/interface/Dave.gif", "z-index:160;left:0;top:81px", EDAll);
		var Func = function () {
			DivTeach.onclick = Func;
			if (TextArr[Count]) { // 没到末尾的情况
				dDave.src = TextArr[Count][0], PlayAudio(TextArr[Count][3]["toString"]()); // 控制图片、音频
				oSym.addTask(TextArr[Count][1], function (Ver) { // 图片冷却
					if (Count - 1 == Ver) dDave.src = TextArr[Ver][2]; // 如果仍然是这一句，并且到了冷却期，则切换图片
				}, [Count]); // 偏移

				if (TextArr[Count][5]) TextArr[Count][5](); // 如果有回调函数，执行

				innerText(DivTeach, TextArr[Count][4]["toString"]()), ++Count; // 显示文字
			} else if (Count != null) { // 执行回调操作
				dDave.src = "images/interface/Dave2.gif", Count = null;
				oSym.addTask(50, function () { ClearChild(DivA, dDave, DivTeach), CallBack(); });
			}
		};

		Func(); // 执行
	}, 
	ShowEffect: function () {
		var Div = NewEle("Div" + Math.random(), "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=1);opacity:1;z-index:160", 0, EDAll);
		var f = function (Alpha, Mul, TimeStep) {
			SetAlpha(Div, Alpha, Alpha / 100);
			if (Alpha <= 0) SetAlpha(Div, 0, 0), ClearChild(Div);
			else oSym.addTask(TimeStep, f, [Alpha - Mul, Mul, TimeStep]);
		};

		PlayAudio("hugewave"), f(100, 5, 4);
	}, 
	ClearGround: function () { // 清除场上植物、僵尸之类的
		CancelShovel(), CancelPlant(); // 取消铲子
		SetHidden($("dCardList"), $("dPZ")); // 隐藏

		for (var O in $P) { // 遍历每一个植物
			var C = $P[O].C, R = $P[O].R; // 获取
			if (C >= 1 && C <= oS.C && R >= 1 && R <= oS.R) $P[O].Die(); // 如果在范围内，杀死它
		}

		for (var O in $Z) $Z[O].DisappearDie(); // 清除僵尸
		for (var O in ArCard) if (isNaN(O)) delete ArCard[O], ClearChild($(O)); // 隐藏移动卡片
 		for (var O in $P) SetVisible($(O)); // 显示可能隐藏的植物
	}, 
	GameStage: function (Stage, CallBack) {
		switch (Stage) {
			case 1: // 第一阶段
				var RandomDave = { "toString": function () { return "crazydavelong" + Math.floor(1 + Math.random() * 3); } };
				
				CreateSpeaking([
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"我和我的哥们，弗莱科斯卡斯特·哈维，以前在无聊的时候就打花瓶。（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"那么弗莱科斯卡斯特现在不在镇上，正好你来和我一起吧！（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"按照你的意愿，砸到什么就看运气吧！（点击继续）"
					], 
				], function () { // 停止音乐，开始游戏
					StopMusic(), PlayMusic(oS.LoadMusic = "Mountains"), CallBack();
					var f = function () { // 检测这一部分是否结束
						if (oFlowerVase.prototype.GetLevelStatus()) ClearChild($("DivTeach")), GameStage(2);
						else oSym.addTask(100, f, []);
					}, f2 = function () { // 检测行为
						var Num = 0; for (var O in $P) if ($P[O].EName == "oFlowerVase") ++Num; // 统计花瓶数量
						if (Num != 15) innerText($("DivTeach"), "摧毁全部僵尸和花瓶，结束这一关卡！");
						else oSym.addTask(100, f2, []);
					}, DivTeach = NewEle("DivTeach", "div", "z-index:170;pointer-events:none;", 0, EDAll); // IE 其实并不能对此 CSS 起作用，但是为了大部分浏览器体验还是加上了

					f(), f2(), innerText($("DivTeach"), "点击一只花瓶，看看里面有什么！");
				});
				break;

			case 2: // 第二阶段
				var RandomDave = { "toString": function () { return "crazydavelong" + Math.floor(1 + Math.random() * 3); } };

				ShowEffect(), ClearGround(), oS.VaseArP = oS.VaseList[1]; // 第一部分的罐子
				
				CreateSpeaking([
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"哥们，你把这些花瓶全都打破了，干得漂亮！（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"就像我打碎所有垃圾桶时那样漂亮！（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 100, "images/interface/Dave.gif", "crazydaveshort1", 
						"来，我给你更多的花瓶。（点击继续）", function () {
							SetVisible($("dPZ")), oS.RiddleAutoGrow(), PlayAudio("plant1");
						}
					], 
					[
						"images/interface/Dave3.gif", 100, "images/interface/Dave.gif", "crazydaveshort2", 
						"别砸太快了。（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", RandomDave, 
						"你不想冒出一大堆僵尸，让你手忙脚乱吧，哈哈。（点击继续）"
					]
				], function() {
					var f = function () { // 检测这一部分是否结束
						if (oFlowerVase.prototype.GetLevelStatus()) GameStage(3);
						else oSym.addTask(100, f, []);
					}; 
					f(), SetVisible($("dCardList"));
				});
				break;

			case 3: 
				var RandomDave = { "toString": function () { return "crazydavelong" + Math.floor(1 + Math.random() * 3); } };

				ShowEffect(), ClearGround(), oS.VaseArP = oS.VaseList[2]; // 第一部分的罐子
				
				CreateSpeaking([
					[
						"images/interface/Dave3.gif", 100, "images/interface/Dave.gif", "crazydaveshort1", 
						"好极了！（点击继续）"
					], 
					[
						"images/interface/Dave3.gif", 100, "images/interface/Dave.gif", "crazydaveshort2", 
						"这应该是最后一批了。（点击继续）", function () {
							SetVisible($("dPZ")), oS.RiddleAutoGrow(), PlayAudio("plant1");
						}
					], 
					[
						"images/interface/Dave3.gif", 200, "images/interface/Dave.gif", "crazydaveshort2", 
						"打败他们，之后你的工作就完成了！（点击继续）"
					]
				], function() {
					var f = function () { // 检测这一部分是否结束
						if (oFlowerVase.prototype.GetLevelStatus()) oP.FlagToEnd(); // 结束关卡
						else oSym.addTask(100, f, []);
					}; 
					f(), SetVisible($("dCardList"));
				});
				break;
		}
	}
});