var // 定义火炬树桩类，继承自植物类
oTorchwood1 = InheritO(CPlants, {
 // 名称
 EName: "oTorchwood1",
 // 中文名称
 CName: "幽灵火炬树桩",
 // 宽度
 width: 73,
 // 高度
 height: 83,
 // 被攻击的点的半径
 beAttackedPointR: 0,
 // 阳光值
 SunNum: 200,
 // 图片数组
 PicArr: ["images/Card/Plants/Torchwood.png", "images/Plants/Torchwood/0.gif", "images/Plants/Torchwood/Torchwood.gif", "images/Plants/PB00.gif", "images/Plants/PB01.gif", "images/Plants/PB10.gif", "images/Plants/PB11.gif", "images/Plants/Torchwood/SputteringFire.gif"],
 // 音频数组
 AudioArr: ["firepea", "ignite", "ignite2"],
 // 提示
 Tooltip: "通过火炬树桩的豌豆将变为火球，妈妈再也不用我被吃了",
 // 产出
 Produce: '火炬树桩可以把穿过他的豌豆变成火球，可以造成两倍伤害。<p>特点：<font color="#FF0000">让穿过他的火球造成两倍伤害。火球也会对附近僵尸造成溅射伤害</font></p>每个人都喜欢并敬重火炬树桩。他们喜欢他的诚实和坚贞的友谊，以及增强豌豆伤害的能力。但他也有自己的秘密：他不识字！',
 // 私有出生函数
 PrivateBirth: function(c) {
  var a = c.R,
  b = c.C;
  oGd.$Torch[a + "_" + b] = c.id;
  oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0)
 },
 // 初始化触发函数
 InitTrigger: function() {},
 // 私有死亡函数
 PrivateDie: function(c) {
  var a = c.R,
  b = c.C;
  delete oGd.$Torch[a + "_" + b];
  oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 1)
 }
}),
/*
 * 向日葵类
 * 继承自 CPlants 类
 */
oSunFlower1 = InheritO(CPlants, {
    EName: "oSunFlower1",
    CName: "炮灰葵",
    width: 73,
    height: 74,
    beAttackedPointR: 53,
    coolTime: 0,
    HP:540,
    SunNum: 50,
    PicArr: ["images/Card/Plants/SunFlower.png", "images/Plants/SunFlower/0.gif", "images/Plants/SunFlower/SunFlower1.gif", "images/Plants/SunFlower/SunFlower.gif"],
    Tooltip: "牺牲自己拖住僵尸",
    Produce: '向日葵，为你生产额外阳光的经济作物。尝试尽可能多种植吧！<p>阳光产量：<font color="#FF0000">中等</font></p>向日葵，也称坚果葵，全称会产阳光的坚果，它间接掌握着抵御僵尸的利器，它的瓜子就连僵尸也流连忘返，它也是i中的致富之宝，它足足有着坚果40分之3的血量，为群居性植物，常为一列至两列，纵列分布。',
    
    /*
     * 创建植物的 DOM 元素
     */
    BirthStyle: function(c, e, b, a) {
     var d = b.childNodes[1];
     d.src = "images/Plants/SunFlower/SunFlower.gif";
     d.style.clip = "rect(0,auto,74px,0)";
     d.style.height = "148px";
     EditEle(b, {
      id: e
     },
     a, EDPZ)
    },
    
    /*
     * 改变植物的位置
     */
    ChangePosition: function(c, a) {
     var b = c.childNodes[1];
     a ? SetStyle(b, {
      clip: "rect(74px,auto,auto,auto)",
      top: "-74px"
     }) : SetStyle(b, {
      clip: "rect(auto,auto,74px,auto)",
      top: 0
     })
    },
    /*
     * 私有函数，当向日葵被复制时，产生阳光
     */
    /*PrivateBirth: function(a) {
     oS.ProduceSun ? oSym.addTask(500,
     function(d, c, b) {
      $P[d] && (a.ChangePosition($(d), 1), oSym.addTask(100,
      function(h, g, f, e) {
       $P[h] && (AppearSun(Math.floor(g + Math.random() * 41), f, 25, 0), oSym.addTask(100,
       function(i) {
        $P[i] && a.ChangePosition($(i), 0)
       },
       [h]), oSym.addTask(2400, e, [h, g, f]))
      },
      [d, c, b, arguments.callee]))
     },
     [a.id, GetX(a.C) - 40, GetY(a.R)]) : a.getHurt = function(f, c, b) {
      var e = this;
      switch (c) {
      case 0:
       var d = (e.HP -= b); ! (d % 100) && (AppearSun(Math.floor(GetX(e.C) - 40 + Math.random() * 41), GetY(e.R), 25, 0), oSym.addTask(50,
       function(h, g) {
        AppearSun(Math.floor(GetX(h) - 40 + Math.random() * 41), GetY(g), 25, 0)
       },
       [e.C, e.R]), d < 1 ? e.Die() : oSym.addTask(50,
       function(h, g) {
        AppearSun(Math.floor(GetX(h) - 40 + Math.random() * 41), GetY(g), 25, 0)
       },
       [e.C, e.R]));
       break;
      case 3:
       (e.HP -= b) < 1 && e.Die();
       break;
      default: // 如果是非自然原因死亡，直接把剩余价值压榨出来
       if (e.HP > 0) AppearSun(Math.floor(GetX(e.C) - 40 + Math.random() * 41), GetY(e.R), Math.floor(e.HP / 1.5 / 25) * 25, 0);
       e.Die();
      }
     }
    },*/
    
    /*
     * 初始化触发器
     */
    InitTrigger: function() {}
   }),
   oGatlingPea1 = InheritO(oSnowPea, {
	EName: "oGatlingPea1",
	CName: "加特林plus",
	width: 88,
	height: 84,
	beAttackedPointR: 68,
	SunNum: 250,
	coolTime: 50,
	PicArr: ["images/Card/Plants/GatlingPea.png", "images/Plants/GatlingPea/0.gif", "images/Plants/GatlingPea/GatlingPea.gif", "images/Plants/PB-10.gif", "images/Plants/PeaBulletHit.gif"],
	AudioArr: ["splat1", "splat2", "splat3", "plastichit", "shieldhit", "shieldhit2"],
	Tooltip: "一次发射四颗冰豌豆",
	Produce: '加特林可以一次发射四颗豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">四倍</font></p>吾心已死，寒风刺骨',
	PrivateBirth: function(c) {
		var b = c.AttackedLX,
		a = b - 40;
		c.BulletClass = NewO({
			X: b,
			R: c.R,
			D: 0,
			Attack: 20,
			Kind: c.BKind,
			ChangeC: 0,
			pixelLeft: a,
			F: oGd.MB1
		});
		c.BulletEle = NewImg(0, c.PicArr[3], "left:" + a + "px;top:" + (c.pixelTop + 8) + "px;visibility:hidden;z-index:" + (c.zIndex + 2))
	},
	NormalAttack1: oSnowPea.prototype.NormalAttack,
	NormalAttack: function(a) {
		this.NormalAttack1();
		oSym.addTask(15,
		function(d, b) {
			var c = $P[d];
			c && c.NormalAttack1(); --b && oSym.addTask(15, arguments.callee, [d, b])
		},
		[this.id, 3])
	}
}),
oSnowPea1 = InheritO(oSnowPea, {
	EName: "oSnowPea1",
	CName: "双发寒冰射手",
	width: 73,
	height: 71,
	beAttackedPointR: 53,
	SunNum: 250,
	PicArr: ["images/Card/Plants/SnowRepeater.png", "images/Plants/SnowRepeater/0.gif", "images/Plants/SnowRepeater/SnowPea.gif", "images/Plants/PB-10.gif", "images/Plants/PeaBulletHit.gif"],
	AudioArr: ["splat1", "splat2", "splat3", "plastichit", "shieldhit", "shieldhit2"],
	Tooltip: "一次发射两寒冰豌豆",
	Produce: '双冰射手可以一次发射两颗冰豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">两倍</font></p>没错我的子弹是冰冷的，但似乎还留有余温',
	NormalAttack1: oPeashooter.prototype.NormalAttack,
	NormalAttack: function(a) {
		this.NormalAttack1();
		oSym.addTask(15,
		function(c) {
			var b = $P[c];
			b && b.NormalAttack1()
		},
		[this.id])
	}	
}),
ofireWallNut = InheritO(CPlants, {
	EName: "ofireWallNut",
	CName: "火炬坚果墙",
	width: 65,
	height: 73,
	beAttackedPointR: 45,
	SunNum: 50,
	HP: 3000,
	coolTime: 30,
	PicArr: ["images/Card/Plants/BoomWallNut.png", "images/Plants/WallNut/0.gif", "images/Plants/WallNut/WallNut.gif", "images/Plants/WallNut/Wallnut_cracked1.gif", "images/Plants/WallNut/Wallnut_cracked2.gif"],
	Tooltip: "具有火炬的能力",
	Produce: '火炬坚果墙拥有足以让你用来保护其它植物的坚硬外壳。<p>韧性：<font color="FF0000">高</font></p>火炬坚果墙：“也许看起来，我与其他坚果没有区别，但我的内心是火热的！！”',
	 // 私有出生函数
    PrivateBirth: function(c) {
    var a = c.R,
    b = c.C;
    oGd.$Torch[a + "_" + b] = c.id;
    oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0)
    },
    CanGrow: function(c, b, f) {
		var a = b + "_" + f,
		d = c[1],
		e = oS.ArP;
		return e ? oGd.$LF[b] == 1 ? f > 0 && f < e.ArC[1] && !(oGd.$Crater[a] || oGd.$Tombstones[a] || d) : c[0] && !d: d && d.EName == "oWallNut" ? 1 : oGd.$LF[b] == 1 ? !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$Tombstones[a] || d) : c[0] && !d
	},
	InitTrigger: function() {},
	HurtStatus: 0,
	getHurt: function(e, b, a) {
		var c = this,
		d = $(c.id).childNodes[1]; ! (b % 3) ? (c.HP -= a) < 1 ? c.Die() : c.HP < 1334 ? c.HurtStatus < 2 && (c.HurtStatus = 2, d.src = "images/Plants/WallNut/Wallnut_cracked2.gif") : c.HP < 2667 && c.HurtStatus < 1 && (c.HurtStatus = 1, d.src = "images/Plants/WallNut/Wallnut_cracked1.gif") : c.Die()
	}
});