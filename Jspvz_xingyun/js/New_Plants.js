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
    PicArr: [
      "images/Card/Plants/Torchwood.png",
      "images/Plants/Torchwood/0.gif",
      "images/Plants/Torchwood/Torchwood.gif",
      "images/Plants/PB00.gif",
      "images/Plants/PB01.gif",
      "images/Plants/PB10.gif",
      "images/Plants/PB11.gif",
      "images/Plants/Torchwood/SputteringFire.gif",
    ],
    // 音频数组
    AudioArr: ["firepea", "ignite", "ignite2"],
    // 提示
    Tooltip: "通过火炬树桩的豌豆将变为火球，妈妈再也不用我被吃了",
    // 产出
    Produce:
      '火炬树桩可以把穿过他的豌豆变成火球，可以造成两倍伤害。<p>特点：<font color="#FF0000">让穿过他的火球造成两倍伤害。火球也会对附近僵尸造成溅射伤害</font></p>每个人都喜欢并敬重火炬树桩。他们喜欢他的诚实和坚贞的友谊，以及增强豌豆伤害的能力。但他也有自己的秘密：他不识字！',
    // 私有出生函数
    PrivateBirth: function (c) {
      var a = c.R,
        b = c.C;
      oGd.$Torch[a + "_" + b] = c.id;
      oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0);
    },
    // 初始化触发函数
    InitTrigger: function () {},
    // 私有死亡函数
    PrivateDie: function (c) {
      var a = c.R,
        b = c.C;
      delete oGd.$Torch[a + "_" + b];
      oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 1);
    },
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
    HP: 540,
    SunNum: 50,
    PicArr: [
      "images/Card/Plants/SunFlower.png",
      "images/Plants/SunFlower/0.gif",
      "images/Plants/SunFlower/SunFlower1.gif",
      "images/Plants/SunFlower/SunFlower.gif",
    ],
    Tooltip: "牺牲自己拖住僵尸",
    Produce:
      '向日葵，为你生产额外阳光的经济作物。尝试尽可能多种植吧！<p>阳光产量：<font color="#FF0000">中等</font></p>向日葵，也称坚果葵，全称会产阳光的坚果，它间接掌握着抵御僵尸的利器，它的瓜子就连僵尸也流连忘返，它也是i中的致富之宝，它足足有着坚果40分之3的血量，为群居性植物，常为一列至两列，纵列分布。',

    /*
     * 创建植物的 DOM 元素
     */
    BirthStyle: function (c, e, b, a) {
      var d = b.childNodes[1];
      d.src = "images/Plants/SunFlower/SunFlower.gif";
      d.style.clip = "rect(0,auto,74px,0)";
      d.style.height = "148px";
      EditEle(
        b,
        {
          id: e,
        },
        a,
        EDPZ
      );
    },

    /*
     * 改变植物的位置
     */
    ChangePosition: function (c, a) {
      var b = c.childNodes[1];
      a
        ? SetStyle(b, {
            clip: "rect(74px,auto,auto,auto)",
            top: "-74px",
          })
        : SetStyle(b, {
            clip: "rect(auto,auto,74px,auto)",
            top: 0,
          });
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
    InitTrigger: function () {},
  }),
  oGatlingPea1 = InheritO(oSnowPea, {
    EName: "oGatlingPea1",
    CName: "加特林plus",
    width: 88,
    height: 84,
    beAttackedPointR: 68,
    SunNum: 250,
    coolTime: 50,
    PicArr: [
      "images/Card/Plants/GatlingPea.png",
      "images/Plants/GatlingPea/0.gif",
      "images/Plants/GatlingPea/GatlingPea.gif",
      "images/Plants/PB-10.gif",
      "images/Plants/PeaBulletHit.gif",
    ],
    AudioArr: [
      "splat1",
      "splat2",
      "splat3",
      "plastichit",
      "shieldhit",
      "shieldhit2",
    ],
    Tooltip: "一次发射四颗冰豌豆",
    Produce:
      '加特林可以一次发射四颗豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">四倍</font></p>吾心已死，寒风刺骨',
    PrivateBirth: function (c) {
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
        F: oGd.MB1,
      });
      c.BulletEle = NewImg(
        0,
        c.PicArr[3],
        "left:" +
          a +
          "px;top:" +
          (c.pixelTop + 8) +
          "px;visibility:hidden;z-index:" +
          (c.zIndex + 2)
      );
    },
    NormalAttack1: oSnowPea.prototype.NormalAttack,
    NormalAttack: function (a) {
      this.NormalAttack1();
      oSym.addTask(
        15,
        function (d, b) {
          var c = $P[d];
          c && c.NormalAttack1();
          --b && oSym.addTask(15, arguments.callee, [d, b]);
        },
        [this.id, 3]
      );
    },
  }),
  oSnowPea1 = InheritO(oSnowPea, {
    EName: "oSnowPea1",
    CName: "双发寒冰射手",
    width: 73,
    height: 71,
    beAttackedPointR: 53,
	coolTime: 7.5,
    SunNum: 250,
    PicArr: [
      "images/Card/Plants/SnowRepeater.png",
      "images/Plants/SnowRepeater/0.gif",
      "images/Plants/SnowRepeater/SnowPea.gif",
      "images/Plants/PB-10.gif",
      "images/Plants/PeaBulletHit.gif",
    ],
    AudioArr: [
      "splat1",
      "splat2",
      "splat3",
      "plastichit",
      "shieldhit",
      "shieldhit2",
    ],
    Tooltip: "一次发射两寒冰豌豆",
    Produce:
      '双冰射手可以一次发射两颗冰豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">两倍</font></p>没错我的子弹是冰冷的，但似乎还留有余温',
    NormalAttack1: oSnowPea.prototype.NormalAttack,
    NormalAttack: function (a) {
      this.NormalAttack1();
      oSym.addTask(
        15,
        function (c) {
          var b = $P[c];
          b && b.NormalAttack1();
        },
        [this.id]
      );
    },
  }),
  oIceFumeShroom = InheritO(oFumeShroom, {
    EName: "oIceFumeShroom",
    CName: "Icy Fume-shroom",
    SunNum: 200,
    PicArr: [
      "images/Card/Plants/IcyFumeShroom.png",
      "images/Plants/IcyFumeShroom/0.gif",
      "images/Plants/IcyFumeShroom/FumeShroom.gif",
      "images/Plants/IcyFumeShroom/FumeShroomSleep.gif",
      "images/Plants/IcyFumeShroom/FumeShroomAttack.gif",
      "images/Plants/IcyFumeShroom/FumeShroomBullet.gif",
    ],
    Tooltip: "Shoots icy fumes that can pass through screen doors",
    Produce:
      '大喷菇喷出的臭气可以穿透铁丝网门。<p>Harm:<font color="#FF0000">普通，可穿透铁丝网门</font><br>Scope:<font color="#FF0000">臭气中的所有僵尸<br>白天睡觉</font></p>“我以前那份没前途的工作，是为一个面包房</font><br>生产酵母孢，”大喷菇说。“然后小喷菇，上帝</font><br>保佑它，告诉了我这个喷杀僵尸的机会。现在</font><br>我真觉得自己完全不同了。”',
    PrivateBirth: function (b) {
      var a = b.id;
      NewEle(
        a + "_Bullet",
        "div",
        "position:absolute;visibility:hidden;width:343px;height:62px;left:" +
          b.AttackedRX +
          "px;top:" +
          (b.pixelTop + 5) +
          "px;background:url(images/Plants/IcyFumeShroom/FumeShroomBullet.gif);z-index:" +
          (b.zIndex + 1),
        0,
        EDPZ
      );
    },
    NormalAttack: function () {
      PlayAudio("fume");
      var f = this,
        d = oZ.getArZ(f.AttackedLX, Math.min(f.AttackedRX + 330, oS.W), f.R),
        e = d.length,
        g,
        c = f.id,
        b = $(c),
        a = c + "_Bullet";
      while (e--) {
        (g = d[e]).Altitude < 2 && g.getSnowPea(g, 20);
      }
      b.childNodes[1].src = "images/Plants/IcyFumeShroom/FumeShroomAttack.gif";
      SetVisible($(a));
      ImgSpriter(
        a,
        c,
        [
          ["0 0", 9, 1],
          ["0 -62px", 9, 2],
          ["0 -124px", 9, 3],
          ["0 -186px", 9, 4],
          ["0 -248px", 9, 5],
          ["0 -310px", 9, 6],
          ["0 -372px", 9, 7],
          ["0 -434px", 9, -1],
        ],
        0,
        function (i, j) {
          var h = $(j);
          $P[j] &&
            ((h.childNodes[1].src =
              "images/Plants/IcyFumeShroom/FumeShroom.gif"),
            SetHidden($(i)));
        }
      );
    },
  }),
  oPuffShroom1 = InheritO(oPuffShroom, {
    EName: "oPuffShroom1",
    CName: "小喷菇",
    width: 40,
    height: 66,
    beAttackedPointL: 15,
    beAttackedPointR: 25,
    SunNum: 0,
    Stature: -1,
    PicArr: [
      "images/Card/Plants/PuffShroom.png",
      "images/Plants/PuffShroom/0.gif",
      "images/Plants/PuffShroom/PuffShroom.gif",
      "images/Plants/PuffShroom/PuffShroomSleep.gif",
      "images/Plants/ShroomBullet.gif",
      "images/Plants/ShroomBulletHit.gif",
    ],
    AudioArr: ["puff"],
    Tooltip: "向敌人发射短程孢子but双倍伤害",
    Produce:
      '小喷菇是免费的，不过射程很近。<p>伤害：<font color="#FF0000">中等</font><br>范围：<font color="#FF0000">近<br>白天要睡觉</font></p>小喷菇：“我也是最近才知道僵尸的存在，和很多蘑菇一样，我只是把他们想象成童话和电影里的怪物。不过这次的经历已经让我大开眼界了。',
    GetDX: CPlants.prototype.GetDX,
    getTriggerRange: function (a, b, c) {
      return [[b, Math.min(c + 250, oS.W), 0]];
    },
    PrivateBirth: function (a) {
      a.BulletEle = NewImg(
        0,
        "images/Plants/ShroomBullet.gif",
        "left:" +
          (a.AttackedLX - 46) +
          "px;top:" +
          (a.pixelTop + 40) +
          "px;visibility:hidden;z-index:" +
          (a.zIndex + 2)
      );
    },
    PrivateDie: function (a) {
      a.BulletEle = null;
    },
    NormalAttack: function () {
      PlayAudio("puff");
      var b = this,
        c = "PSB" + Math.random(),
        a = b.AttackedLX;
      EditEle(
        b.BulletEle.cloneNode(false),
        {
          id: c,
        },
        0,
        EDPZ
      );
      oSym.addTask(
        15,
        function (e) {
          var d = $(e);
          d && SetVisible(d);
        },
        [c]
      );
      oSym.addTask(
        1,
        function (j, d, e, f, g) {
          var i = GetC(e),
            h = oZ.getZ0(e, f);
          h && h.Altitude == 1
            ? (h.getPea(h, 40, 0),
              (SetStyle(d, {
                left: g + 38 + "px",
                width: "52px",
                height: "46px",
              }).src = "images/Plants/ShroomBulletHit.gif"),
              oSym.addTask(10, ClearChild, [d]))
            : (e += 5) < oS.W
            ? ((d.style.left = (g += 5) + "px"),
              oSym.addTask(1, arguments.callee, [j, d, e, f, g]))
            : ClearChild(d);
        },
        [c, $(c), a, b.R, a - 46]
      );
    },
  }),
  oGloomShroom1 = InheritO(oRepeater, {
    EName: "oGloomShroom1",
    CName: "曾哥plus",
    width: 88,
    height: 83,
    beAttackedPointR: 68,
    SunNum: 150,
    coolTime: 50,
    PicArr: [
      "images/Card/Plants/GloomShroom.png",
      "images/Plants/GloomShroom/0.gif",
      "images/Plants/GloomShroom/GloomShroom.gif",
      "images/Plants/GloomShroom/GloomShroomSleep.gif",
      "images/Plants/GloomShroom/GloomShroomAttack.gif",
      "images/Plants/GloomShroom/GloomShroomBullet.gif",
    ],
    AudioArr: ["kernelpult", "kernelpult2"],
    Tooltip: "曾哥plus他再也不需要大喷菇了",
    Produce:
      '伪娘终结者，喜欢围绕自身释放大量绵羊音<p><font color="#FF0000">必须种植在大喷菇上</font></p>起初人们一直非议他，后来曾哥用自己独特的绵羊音横扫了宇宙拆迁办，全世界都拜倒在他的脚下。“听说有个节目叫‘快男’？”曾哥说，“没有我在他们真应该感到羞愧。”他于是决定明年去看看。',
    BirthStyle: function (c, d, b, a) {
      oGd.$[c.R + "_" + c.C + "_1"] &&
        oGd.$[c.R + "_" + c.C + "_1"].Sleep &&
        ((c.canTrigger = 0),
        (c.Sleep = 1),
        (b.childNodes[1].src = c.PicArr[3]));
      EditEle(b, { id: d }, a, EDPZ);
    },
    GetDX: CPlants.prototype.GetDX,
    PrivateBirth: function (b) {
      var a = b.id;
      NewEle(
        a + "_Bullet",
        "div",
        "position:absolute;visibility:hidden;width:210px;height:200px;left:" +
          (b.pixelLeft - 60) +
          "px;top:" +
          (b.pixelTop - 65) +
          "px;background:url(images/Plants/GloomShroom/GloomShroomBullet.gif);z-index:" +
          (b.zIndex + 1),
        0,
        EDPZ
      );
    },
    PrivateDie: function (a) {
      ClearChild($(a.id + "_Bullet"));
    },
    getTriggerRange: function (c, d, e) {
      var f = GetX(this.C),
        b = (this.MinX = f - 120),
        a = (this.MaxX = f + 120);
      return [[b, a, 0]];
    },
    getTriggerR: function (c) {
      var b = (this.MinR = c > 2 ? c - 1 : 1),
        a = (this.MaxR = c < oS.R ? Number(c) + 1 : c);
      return [b, a];
    },
    NormalAttack: function () {
      var k = this,
        g,
        f = k.MaxR,
        c = k.MinX,
        b = k.MaxX,
        e,
        h,
        a,
        j = k.id,
        d = $(j),
        l = j + "_Bullet";
      for (g = k.MinR; g <= f; g++) {
        e = oZ.getArZ(c, b, g);
        for (h = e.length; h--; (a = e[h]).Altitude < 2 && a.getHit1(a, 80)) {}
      }
      oSym.addTask(
        100,
        function (i) {
          PlayAudio(
            ["kernelpult", "kernelpult2"][Math.floor(Math.random() * 2)]
          );
          --i && oSym.addTask(100, arguments.callee, [i]);
        },
        [4]
      );
      d.childNodes[1].src = "images/Plants/GloomShroom/GloomShroomAttack.gif";
      SetVisible($(l));
      ImgSpriter(
        l,
        j,
        [
          ["0 0", 9, 1],
          ["0 -200px", 9, 2],
          ["0 -400px", 9, 3],
          ["0 -600px", 9, 4],
          ["0 -800px", 9, 5],
          ["0 -1000px", 9, 6],
          ["0 -1200px", 9, 7],
          ["0 -1400px", 9, 8],
          ["0 -1600px", 9, 9],
          ["0 -1800px", 9, 10],
          ["0 -2000px", 9, 11],
          ["0 -2200px", 9, -1],
        ],
        0,
        function (m, n) {
          var i = $(n);
          $P[n] &&
            (i.childNodes[1].src = "images/Plants/GloomShroom/GloomShroom.gif");
          SetHidden($(m));
        }
      );
    },
  }),
  oHypnoShroom1 = InheritO(oFumeShroom, {
    EName: "oHypnoShroom1",
    CName: "魅惑菇",
    width: 71,
    height: 78,
    beAttackedPointL: 10,
    beAttackedPointR: 61,
    HP: 1000,
    coolTime: 30,
    PicArr: [
      "images/Card/Plants/HypnoShroom.png",
      "images/Plants/HypnoShroom/0.gif",
      "images/Plants/HypnoShroom/HypnoShroom.gif",
      "images/Plants/HypnoShroom/HypnoShroomSleep.gif",
    ],
    Tooltip: "让多只僵尸为你作战",
    Produce:
      '当僵尸吃下魅惑菇后，他将会掉转方向为你作战。<p>使用方法：<font color="#FF0000">单独使用，接触生效</font><br>特点：<font color="#FF0000">让一只僵尸为你作战<br>白天睡觉</font></p>魅惑菇声称：“僵尸们是我们的朋友，他们被严重误解了，僵尸们在我们的生态环境里扮演着重要角色。我们可以也应当更努力地让他们学会用我们的方式来思考。”',
    InitTrigger: function () {},
    getHurt: function (d, b, a) {
      var c = this;
      switch (b) {
        case 3:
          (c.HP -= a) < 1 && c.Die();
          break;
        case 0:
          (!c.Sleep && d.bedevil(d)) || ((c.HP -= a) < 1 && c.Die());
          //c.Die();
          break;
        default:
          c.Die();
      }
    },
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
    PicArr: [
      "images/Card/Plants/BoomWallNut.png",
      "images/Plants/WallNut/0.gif",
      "images/Plants/WallNut/WallNut.gif",
      "images/Plants/WallNut/Wallnut_cracked1.gif",
      "images/Plants/WallNut/Wallnut_cracked2.gif",
    ],
    Tooltip: "具有火炬的能力",
    Produce:
      '火炬坚果墙拥有足以让你用来保护其它植物的坚硬外壳。<p>韧性：<font color="FF0000">高</font></p>火炬坚果墙：“也许看起来，我与其他坚果没有区别，但我的内心是火热的！！”',
    // 私有出生函数
    PrivateBirth: function (c) {
      var a = c.R,
        b = c.C;
      oGd.$Torch[a + "_" + b] = c.id;
      oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0);
    },
    CanGrow: function (c, b, f) {
      var a = b + "_" + f,
        d = c[1],
        e = oS.ArP;
      return e
        ? oGd.$LF[b] == 1
          ? f > 0 &&
            f < e.ArC[1] &&
            !(oGd.$Crater[a] || oGd.$Tombstones[a] || d)
          : c[0] && !d
        : d && d.EName == "oWallNut"
        ? 1
        : oGd.$LF[b] == 1
        ? !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$Tombstones[a] || d)
        : c[0] && !d;
    },
    InitTrigger: function () {},
    HurtStatus: 0,
    getHurt: function (e, b, a) {
      var c = this,
        d = $(c.id).childNodes[1];
      !(b % 3)
        ? (c.HP -= a) < 1
          ? c.Die()
          : c.HP < 1334
          ? c.HurtStatus < 2 &&
            ((c.HurtStatus = 2),
            (d.src = "images/Plants/WallNut/Wallnut_cracked2.gif"))
          : c.HP < 2667 &&
            c.HurtStatus < 1 &&
            ((c.HurtStatus = 1),
            (d.src = "images/Plants/WallNut/Wallnut_cracked1.gif"))
        : c.Die();
    },
	 // 私有死亡函数
    PrivateDie: function (c) {
      var a = c.R,
        b = c.C;
      delete oGd.$Torch[a + "_" + b];
      oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 1);
    },
  });