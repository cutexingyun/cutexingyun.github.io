oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom,oGatlingPea],
	ZName: [oZombie, oZombie2, oZombie3, oNewspaperZombie],
	PicArr: function() {
		var a = oSunShroom.prototype,
			b = a.PicArr;
		return ["images/interface/background2.jpg", "images/interface/Dave.gif", "images/interface/Dave2.gif", "images/interface/Dave3.gif", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: 50,
	LevelName: "戴夫乞讨",
	LvlEName: 11,
	AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
	LargeWaveFlag: {
		10: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [1, 9, 22]
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie])
	},
	StartGameMusic: "Ultimate battle",
	LoadAccess: function(a) {
		NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
		NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
					PlayAudio("crazydaveshort1");
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(100, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [1])
						}
					}, []);
					innerText(c, "我要rtty币，" + $User.Visitor.UserName + "。(点击继续)");
					break;
				case 1:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [2])
						}
					}, []);
					innerText(c, "快给我rtty币(点击继续)");
					break;
				case 2:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [3])
						}
					}, []);
					innerText(c, "不给rtty币我就捣乱(点击继续)");
					break;
				case 3:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [4])
						}
					}, []);
					innerText(c,"给不给？(点击继续)");
					break;
				case 4:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [5])
						}
					}, []);
					innerText(c, "不给是吧？(点击继续)");
					break;
				case 5:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [6])
						}
					}, []);
					innerText(c, "不给的话送你机枪射手，祝你好运(点击继续)");
					break;
				case 6:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(200, function() {
						$("dDave").src = "images/interface/Dave.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [7])
						}
					}, []);
					innerText(c, "没了(点击继续)");
					break;
				case 7:
					$("dDave").src = "images/interface/Dave2.gif";
					ClearChild($("DivTeach"));
					oSym.addTask(50, function() {
						ClearChild($("dDave"));
						a(0)
					}, [])
			}
		})(0)
	}
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oNewspaperZombie, 2, 5]
	],
	FlagNum: 10,
	FlagToSumNum: {
		a1: [3, 5, 9],
		a2: [3, 5, 8, 19]
	},
	FlagToMonitor: {
		9: [ShowFinalWave, 0]
	}
}); 