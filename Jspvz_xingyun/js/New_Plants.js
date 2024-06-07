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
    Produce: '火炬树桩可以把穿过他的豌豆变成火球，可以造成两倍伤害。<p>特点：<font color="#FF0000">让穿过他的火球造成两倍伤害。火球也会对附近僵尸造成溅射伤害</font></p>每个人都喜欢并敬重火炬树桩。他们喜欢他的诚实和坚贞的友谊，以及增强豌豆伤害的能力。但他也有自己的秘密：他不识字！',
    // 私有出生函数
    PrivateBirth: function(c) {
      var a = c.R,
        b = c.C;
      oGd.$Torch[a + "_" + b] = c.id;
      oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0);
    },
    // 初始化触发函数
    InitTrigger: function() {},
    // 私有死亡函数
    PrivateDie: function(c) {
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
    Produce: '向日葵，为你生产额外阳光的经济作物。尝试尽可能多种植吧！<p>阳光产量：<font color="#FF0000">中等</font></p>向日葵，也称坚果葵，全称会产阳光的坚果，它间接掌握着抵御僵尸的利器，它的瓜子就连僵尸也流连忘返，它也是i中的致富之宝，它足足有着坚果40分之3的血量，为群居性植物，常为一列至两列，纵列分布。',

    /*
     * 创建植物的 DOM 元素
     */
    BirthStyle: function(c, e, b, a) {
      var d = b.childNodes[1];
      d.src = "images/Plants/SunFlower/SunFlower.gif";
      d.style.clip = "rect(0,auto,74px,0)";
      d.style.height = "148px";
      EditEle(
        b, {
          id: e,
        },
        a,
        EDPZ
      );
    },

    /*
     * 改变植物的位置
     */
    ChangePosition: function(c, a) {
      var b = c.childNodes[1];
      a
        ?
        SetStyle(b, {
          clip: "rect(74px,auto,auto,auto)",
          top: "-74px",
        }) :
        SetStyle(b, {
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
    InitTrigger: function() {},
  }),
  ofirePeashooter = InheritO(CPlants, {
    EName: "ofirePeashooter",
    CName: "红温射手",
    width: 71,
    height: 71,
    beAttackedPointR: 51,
    SunNum: 150,
    BKind: 0,
    AudioArr: [
      "splat1",
      "splat2",
      "splat3",
      "plastichit",
      "shieldhit",
      "shieldhit2",
    ],
    PicArr: [
      "images/Card/Plants/firePeashooter.png",
      "images/Plants/Peashooter/0.gif",
      "images/Plants/Peashooter/Peashooter.gif",
      "images/Plants/PB10.gif",
      "images/Plants/PeaBulletHit.gif",
    ],
    Tooltip: "向敌人射出火豌豆",
    Produce: '豌豆射手，你的第一道防线。它们通过发射豌豆来攻击僵尸。<p>伤害：<font color="#FF0000">中等</font></p>一棵植物，怎么能如此快地生长，并发射如此多的豌豆呢？豌豆射手：“努力工作，奉献自己，再加上一份阳光，高纤维和氧化碳均衡搭配，这种健康早餐让一切成为可能。”', // 设置 oPeashooter 对象的 Produce 属性为包含描述信息的字符串

    PrivateBirth: function(a) {
      a.BulletEle = NewImg(
        0,
        a.PicArr[3],
        "left:" +
        (a.AttackedLX - 40) +
        "px;top:" +
        (a.pixelTop + 3) +
        "px;visibility:hidden;z-index:" +
        (a.zIndex + 2)
      );
    },
    PrivateDie: function(a) {
      a.BulletEle = null;
    },

    NormalAttack: function() {
      var a = this,
        b = "PB" + Math.random();

      EditEle(
        a.BulletEle.cloneNode(false), {
          id: b,
        },
        0,
        EDPZ
      );

      oSym.addTask(
        15,

        function(d) {
          var c = $(d);
          c && SetVisible(c);
        },
        [b]
      );

      oSym.addTask(
        1,

        function(f, j, h, c, n, i, m, k, o, g) {
          var l,
            e = GetC(n),
            d = oZ["getZ" + c](n, i);
          m == 0 &&
            g[i + "_" + e] &&
            k != e &&
            (PlayAudio("firepea"),
              (m = 1),
              (h = 40),
              (k = e),
              (j.src = "images/Plants/PB" + m + c + ".gif"));
          d && d.Altitude == 1 ?
            (d[{
                "-1": "getSnowPea",
                0: "getPea",
                1: "getFirePea",
              } [m]](d, h, c),
              (SetStyle(j, {
                left: o + 28 + "px",
                width: "52px",
                height: "46px",
              }).src = "images/Plants/PeaBulletHit.gif"),
              oSym.addTask(10, ClearChild, [j])) :
            (n += l = !c ? 5 : -5) < oS.W && n > 100 ?
            ((j.style.left = (o += l) + "px"),
              oSym.addTask(1, arguments.callee, [f, j, h, c, n, i, m, k, o, g])) :
            ClearChild(j);
        },
        [b, $(b), 40, 0, a.AttackedLX, a.R, 0, 0, a.AttackedLX - 40, oGd.$Torch]
      );
    },
  });
(oGatlingPea1 = InheritO(oSnowPea, {
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
  NormalAttack: function(a) {
    this.NormalAttack1();
    oSym.addTask(
      15,
      function(d, b) {
        var c = $P[d];
        c && c.NormalAttack1();
        --b && oSym.addTask(15, arguments.callee, [d, b]);
      },
      [this.id, 3]
    );
  },
})),
(oGatlingPea2 = InheritO(oPeashooter, {
  EName: "oGatlingPea2",
  CName: "加特林",
  width: 88,
  height: 84,
  beAttackedPointR: 68,
  SunNum: 250,
  coolTime: 7.5,
  PicArr: [
    "images/Card/Plants/GatlingPea.png",
    "images/Plants/GatlingPea/0.gif",
    "images/Plants/GatlingPea/GatlingPea.gif",
    "images/Plants/PB00.gif",
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
  Tooltip: "一次发射四颗豌豆",
  Produce: '加特林可以一次发射四颗豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">四倍</font></p>当加特林宣布他要参军的时候，他的父母很为他担心，他们异口同声地对他说：“亲爱的，但这太危险了。”加特林拒绝让步，“生活本就危险，”他这样回答着，此时他的眼睛里，正闪烁着钢铁般的信念。',
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
  NormalAttack1: oPeashooter.prototype.NormalAttack,
  NormalAttack: function(a) {
    this.NormalAttack1();
    oSym.addTask(
      15,
      function(d, b) {
        var c = $P[d];
        c && c.NormalAttack1();
        --b && oSym.addTask(15, arguments.callee, [d, b]);
      },
      [this.id, 3]
    );
  },
})),
(oSnowPea1 = InheritO(oSnowPea, {
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
  Produce: '双冰射手可以一次发射两颗冰豌豆<p>伤害：<font color="#FF0000">中等(每颗)</font><br>发射速度：<font color="#FF0000">两倍</font></p>没错我的子弹是冰冷的，但似乎还留有余温',
  NormalAttack1: oSnowPea.prototype.NormalAttack,
  NormalAttack: function(a) {
    this.NormalAttack1();
    oSym.addTask(
      15,
      function(c) {
        var b = $P[c];
        b && b.NormalAttack1();
      },
      [this.id]
    );
  },
})),
(oWinterMelon1 = InheritO(oCabbage, {
  EName: "oWinterMelon1",
  CName: "冰瓜投手",
  width: 230,
  height: 140,
  beAttackedPointR: 140,
  SunNum: 200,
  AttackGif: 4,
  Attack: 80,
  coolTime: 50,
  AudioArr: [
    "CabbageAttack1",
    "CabbageAttack2",
    "melonimpact1",
    "melonimpact2",
  ],
  PicArr: (function() {
    var b = "images/Plants/WinterMelon/",
      arr = [];
    for (var i = 1; i <= 7; i++) {
      arr.push(b + "piece" + i + ".webp");
    }
    return [
      "images/Card/Plants/WinterMelonpult.png",
      b + "0.gif",
      b + "0.gif",
      b + "bullet.png",
      b + "Attack.gif",
    ].concat(arr);
  })(),
  Tooltip: "向敌人抛出带有溅射的冰西瓜瓣",
  Produce: '冰瓜投手能对成群僵尸造成大量伤害并减速他们。<p>伤害：<font color="#FF0000">高</font><br>范围：<font color="#FF0000">投掷</font><br>特点：<font color="#FF0000">西瓜会对附近僵尸造成溅射伤害并减速他们</font></p>冰瓜投手试着让自己紧绷的神经冷静下来，他听到僵尸步步逼近。他能做到吗？有人能做到吗？',
  PrivateBirth(a) {
    a.BulletEle = NewImg(
      0,
      a.PicArr[3],
      "left:" +
      (a.pixelLeft + 50) +
      "px;top:" +
      (a.pixelTop + 10) +
      "px;width:55px;visibility:hidden;z-index:" +
      (a.zIndex + 2)
    );
  },
  CheckLoop(zid, direction) {
    var self = this;
    var pid = self.id;
    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(290, (_) => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },
  HitZombie(zombieTarget, self, x2, zY) {
    if ($Z[zombieTarget.id]) {
      zombieTarget.getSnowPea(zombieTarget, 0);
      zombieTarget.getHit2(zombieTarget, self.Attack);
    }
    //PlayAudio(self.AudioArr.slice(2, 4).random());
    for (var i = Math.max(1, self.R - 1); i <= Math.min(self.R + 1, 5); i++) {
      for (var zombie of oZ.getArZ(x2 - 50, x2 + 70, i)) {
        if (zombie != zombieTarget) {
          var attack = self.Attack;
          if (zombie.isPuppet) {
            attack += 60;
          }
          zombieTarget.getSnowPea(zombie, 0);
          zombie.getHit2(
            zombie,
            zombie.isPuppet ?
            Math.floor(attack / 1.5) :
            Math.floor(attack / 3)
          );
        }
      }
    }
    var obj = [];
    for (var i = 0; i < Math.round(5 + Math.random() * 4); i++) {
      var vy = 0.5 - Math.random() * 3;
      var ay = 0.2;
      var vx = Math.random() * 2 - 1;
      var rotate = Math.random() * 0.25 * (vx > 0 ? 1 : -1);
      var alpha = Math.random() * 0.8 + 1;
      var baseY = 50;
      var dy = baseY + Math.random() * 18 - 9;
      var ly = GetY(self.R) - 30 - (zY - 20) + (dy - baseY);
      obj.push({
        src: self.PicArr[Math.floor(Math.random() * 7) + 5],
        rotate: Math.random() * 360,
        x: 50 + Math.random() * 18 - 9,
        y: dy,
        width: Math.round(18 + (Math.random() * 6 - 2)),
        height: Math.round(18 + (Math.random() * 6 - 2)),
        move() {
          var self = this;
          self.x += vx;
          self.y += vy;
          vy += ay;
          self.y = Math.min(ly, self.y);
          if (self.y == ly) {
            vy = -vy / 3;
            rotate /= 1.2;
          }
          self.rotate += rotate;
          self.alpha = Math.max(0, Math.min(alpha, 1));
          alpha -= 0.05;
        },
      });
    }
  },
  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif] + "?" + this.id;
  },
  NormalAttack(zid) {
    var self = this;
    var ele = $(self.id);
    var zombieTarget = oZ.getRangeLeftZ(
      self.pixelLeft + self.beAttackedPointR,
      oS.W,
      self.R,
      true
    );
    //alert(zombieTarget);
    if (!zombieTarget) return;
    var bullet = EditEle(
      self.BulletEle.cloneNode(), {
        id: "CB" + Math.random(),
      },
      0,
      EDPZ
    );
    self.AttackAnim(ele, self);
    oSym.addTask(
      265,
      (_) =>
      $P[self.id] &&
      (ele.childNodes[1].src = self.PicArr[self.NormalGif] + "?" + this.id)
    );
    oSym.addTask(105, (_) => {
      //PlayAudio(self.AudioArr.slice(0, 2).random());
      SetVisible(bullet);
      var x = self.pixelLeft + 80;
      var y = self.pixelTop;
      var zomRelativePos = zombieTarget.HeadPosition[zombieTarget.isAttacking] ?
        zombieTarget.HeadPosition[zombieTarget.isAttacking] :
        zombieTarget.HeadPosition[0];
      var s =
        Number.parseInt(zombieTarget.Ele.style.left) +
        zomRelativePos.x -
        x -
        !zombieTarget.isAttacking *
        zombieTarget.Speed *
        zombieTarget.DeltaDirectionSpeed[zombieTarget.FangXiang] *
        10 *
        1;
      var x2 = x + s;
      var gravity = 0.2;
      var vy = -8;
      var vx = -(gravity * s) / (2 * vy);
      var lastTime = 0;
      var zY =
        Number.parseInt(zombieTarget.Ele.style.top) + zomRelativePos.y - 20;
      var [lastX, lastY] = [x, y];
      var defAngle = Math.floor(Math.random() * 20 - 10);
      var rotSpd = Math.floor(Math.random() * 6 + 3);
      var bulletShadow = NewEle(
        `${self.id}_B_${Math.random()}_Shadow`,
        "div",
        `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${
            self.pixelTop + self.height - 10
          }px;`, {
          className: "Shadow",
        },
        EDPZ
      );
      (function drawFrame() {
        //NewImg("imgSF", "images/Plants/WinterMelon/bullet.png", `left:${x}px;top:${y}px`, EDAll, {});
        vy += gravity;
        bullet.style.left = (x += vx) + "px";
        bulletShadow.style.left = x + "px";
        bullet.style.top = (y += vy) + "px";
        bullet.style.transform = `rotate(${(defAngle += rotSpd)}deg)`;
        if (!$Z[zombieTarget.id]) {
          zY = GetY(self.R) - 70;
        }
        if ((x >= x2 - 0 && y >= zY && vy > 0) || s < 40) {
          ClearChild(bullet);
          self.HitZombie(zombieTarget, self, x, y);
          ClearChild(bulletShadow);
          return;
        }
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
        oSym.addTask(timeToCall, drawFrame);
        lastTime = currTime + timeToCall;
        [lastX, lastY] = [x, y];
      })();
    });
  },
})),
(oSunPeashooter = InheritO(oPeashooter, {
  EName: "oSunPeashooter",
  CName: "向日葵豌豆",
  Tooltip: "生产阳光，发射子弹",
  Produce: "生产阳光，发射子弹。",
  SunNum: 150,
  OSunNum: 150,
  ChangePosition: function() {},
  PrivateBirth: function(a) {
    a.BulletEle = NewImg(
      0,
      a.PicArr[3],
      "left:" +
      (a.AttackedLX - 40) +
      "px;top:" +
      (a.pixelTop + 3) +
      "px;visibility:hidden;z-index:" +
      (a.zIndex + 2)
    );
    oS.ProduceSun ?
      oSym.addTask(
        500,
        function(d, c, b) {
          $P[d] &&
            (a.ChangePosition($(d), 1),
              oSym.addTask(
                100,
                function(h, g, f, e) {
                  $P[h] &&
                    (AppearSun(Math.floor(g + Math.random() * 41), f, 25, 0),
                      oSym.addTask(
                        100,
                        function(i) {
                          $P[i] && a.ChangePosition($(i), 0);
                        },
                        [h]
                      ),
                      oSym.addTask(2400, e, [h, g, f]));
                },
                [d, c, b, arguments.callee]
              ));
        },
        [a.id, GetX(a.C) - 40, GetY(a.R)]
      ) :
      (a.getHurt = function(f, c, b) {
        var e = this;
        switch (c) {
          case 0:
            var d = (e.HP -= b);
            !(d % 100) &&
            (AppearSun(
                Math.floor(GetX(e.C) - 40 + Math.random() * 41),
                GetY(e.R),
                25,
                0
              ),
              oSym.addTask(
                25,
                function(h, g) {
                  AppearSun(
                    Math.floor(GetX(h) - 40 + Math.random() * 41),
                    GetY(g),
                    25,
                    0
                  );
                },
                [e.C, e.R]
              ),
              d < 1 ?
              e.Die() :
              oSym.addTask(
                50,
                function(h, g) {
                  AppearSun(
                    Math.floor(GetX(h) - 40 + Math.random() * 41),
                    GetY(g),
                    50,
                    0
                  );
                },
                [e.C, e.R]
              ));
            break;
          case 3:
            (e.HP -= b) < 1 && e.Die();
            break;
          default: // 如果是非自然原因死亡，直接把剩余价值压榨出来
            if (e.HP > 0)
              AppearSun(
                Math.floor(GetX(e.C) - 40 + Math.random() * 41),
                GetY(e.R),
                Math.floor(e.HP / 1.5 / 25) * 25,
                0
              );
            e.Die();
        }
      });
  },
  NormalAttack: function() {
    // 在当前作用域中声明变量 a，并赋值为 this
    var a = this,
      // 在当前作用域中声明变量 b，赋值为 "PB" 加上一个随机数
      b = "PB" + Math.random();
    // 调用 EditEle 方法，在 b 的基础上添加 id 属性，值为 b
    EditEle(
      a.BulletEle.cloneNode(false), {
        id: b,
      },
      0,
      EDPZ
    );
    // 调用 oSym.addTask 方法，设置定时任务，延迟 15 帧
    oSym.addTask(
      15,
      // 匿名函数，参数为 d
      function(d) {
        var c = $(d);
        c && SetVisible(c);
      },
      [b]
    );
    // 调用 oSym.addTask 方法，设置定时任务，延迟 1 帧
    oSym.addTask(
      1,
      // 匿名函数，参数为 f, j, h, c, n, i, m, k, o, g
      function(f, j, h, c, n, i, m, k, o, g) {
        var l,
          e = GetC(n),
          d = oZ["getZ" + c](n, i);
        m == 0 &&
          g[i + "_" + e] &&
          k != e &&
          (PlayAudio("firepea"),
            (m = 1),
            (h = 40),
            (k = e),
            (j.src = "images/Plants/PB" + m + c + ".gif"));
        d && d.Altitude == 1 ?
          (d[{
              "-1": "getSnowPea",
              0: "getPea",
              1: "getFirePea",
            } [m]](d, h, c),
            (SetStyle(j, {
              left: o + 28 + "px",
              width: "52px",
              height: "46px",
            }).src = "images/Plants/PeaBulletHit.gif"),
            oSym.addTask(10, ClearChild, [j])) :
          (n += l = !c ? 5 : -5) < oS.W && n > 100 ?
          ((j.style.left = (o += l) + "px"),
            oSym.addTask(1, arguments.callee, [f, j, h, c, n, i, m, k, o, g])) :
          ClearChild(j);
      },
      [b, $(b), 20, 0, a.AttackedLX, a.R, 0, 0, a.AttackedLX - 40, oGd.$Torch]
    );
  },
})),
(oIceFumeShroom = InheritO(oFumeShroom, {
  EName: "oIceFumeShroom",
  CName: "冰喷菇",
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
  Produce: '大喷菇喷出的臭气可以穿透铁丝网门。<p>Harm:<font color="#FF0000">普通，可穿透铁丝网门</font><br>Scope:<font color="#FF0000">臭气中的所有僵尸<br>白天睡觉</font></p>“我以前那份没前途的工作，是为一个面包房</font><br>生产酵母孢，”大喷菇说。“然后小喷菇，上帝</font><br>保佑它，告诉了我这个喷杀僵尸的机会。现在</font><br>我真觉得自己完全不同了。”',
  PrivateBirth: function(b) {
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
  NormalAttack: function() {
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
      function(i, j) {
        var h = $(j);
        $P[j] &&
          ((h.childNodes[1].src =
              "images/Plants/IcyFumeShroom/FumeShroom.gif"),
            SetHidden($(i)));
      }
    );
  },
})),
(oPuffShroom1 = InheritO(oPuffShroom, {
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
  Produce: '小喷菇是免费的，不过射程很近。<p>伤害：<font color="#FF0000">中等</font><br>范围：<font color="#FF0000">近<br>白天要睡觉</font></p>小喷菇：“我也是最近才知道僵尸的存在，和很多蘑菇一样，我只是把他们想象成童话和电影里的怪物。不过这次的经历已经让我大开眼界了。',
  GetDX: CPlants.prototype.GetDX,
  getTriggerRange: function(a, b, c) {
    return [
      [b, Math.min(c + 250, oS.W), 0]
    ];
  },
  PrivateBirth: function(a) {
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
  PrivateDie: function(a) {
    a.BulletEle = null;
  },
  NormalAttack: function() {
    PlayAudio("puff");
    var b = this,
      c = "PSB" + Math.random(),
      a = b.AttackedLX;
    EditEle(
      b.BulletEle.cloneNode(false), {
        id: c,
      },
      0,
      EDPZ
    );
    oSym.addTask(
      15,
      function(e) {
        var d = $(e);
        d && SetVisible(d);
      },
      [c]
    );
    oSym.addTask(
      1,
      function(j, d, e, f, g) {
        var i = GetC(e),
          h = oZ.getZ0(e, f);
        h && h.Altitude == 1 ?
          (h.getPea(h, 40, 0),
            (SetStyle(d, {
              left: g + 38 + "px",
              width: "52px",
              height: "46px",
            }).src = "images/Plants/ShroomBulletHit.gif"),
            oSym.addTask(10, ClearChild, [d])) :
          (e += 5) < oS.W ?
          ((d.style.left = (g += 5) + "px"),
            oSym.addTask(1, arguments.callee, [j, d, e, f, g])) :
          ClearChild(d);
      },
      [c, $(c), a, b.R, a - 46]
    );
  },
})),
(oGloomShroom1 = InheritO(oRepeater, {
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
  Produce: '伪娘终结者，喜欢围绕自身释放大量绵羊音<p><font color="#FF0000">必须种植在大喷菇上</font></p>起初人们一直非议他，后来曾哥用自己独特的绵羊音横扫了宇宙拆迁办，全世界都拜倒在他的脚下。“听说有个节目叫‘快男’？”曾哥说，“没有我在他们真应该感到羞愧。”他于是决定明年去看看。',
  BirthStyle: function(c, d, b, a) {
    oGd.$[c.R + "_" + c.C + "_1"] &&
      oGd.$[c.R + "_" + c.C + "_1"].Sleep &&
      ((c.canTrigger = 0),
        (c.Sleep = 1),
        (b.childNodes[1].src = c.PicArr[3]));
    EditEle(b, {
      id: d
    }, a, EDPZ);
  },
  GetDX: CPlants.prototype.GetDX,
  PrivateBirth: function(b) {
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
  PrivateDie: function(a) {
    ClearChild($(a.id + "_Bullet"));
  },
  getTriggerRange: function(c, d, e) {
    var f = GetX(this.C),
      b = (this.MinX = f - 120),
      a = (this.MaxX = f + 120);
    return [
      [b, a, 0]
    ];
  },
  getTriggerR: function(c) {
    var b = (this.MinR = c > 2 ? c - 1 : 1),
      a = (this.MaxR = c < oS.R ? Number(c) + 1 : c);
    return [b, a];
  },
  NormalAttack: function() {
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
      for (h = e.length; h--;
        (a = e[h]).Altitude < 2 && a.getHit1(a, 80)) {}
    }
    oSym.addTask(
      100,
      function(i) {
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
      function(m, n) {
        var i = $(n);
        $P[n] &&
          (i.childNodes[1].src = "images/Plants/GloomShroom/GloomShroom.gif");
        SetHidden($(m));
      }
    );
  },
})),
(oHypnoShroom1 = InheritO(oFumeShroom, {
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
  Produce: '当僵尸吃下魅惑菇后，他将会掉转方向为你作战。<p>使用方法：<font color="#FF0000">单独使用，接触生效</font><br>特点：<font color="#FF0000">让一只僵尸为你作战<br>白天睡觉</font></p>魅惑菇声称：“僵尸们是我们的朋友，他们被严重误解了，僵尸们在我们的生态环境里扮演着重要角色。我们可以也应当更努力地让他们学会用我们的方式来思考。”',
  InitTrigger: function() {},
  getHurt: function(d, b, a) {
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
})),
(oDoomShroom1 = InheritO(oFumeShroom, {
  EName: "oDoomShroom1",
  CName: "魅惑毁灭菇",
  width: 102,
  height: 91,
  beAttackedPointR: 80,
  coolTime: 100,
  SunNum: 1000,
  PicArr: [
    "images/Card/Plants/DoomShroom.png",
    "images/Plants/DoomShroom/0.gif",
    "images/Plants/DoomShroom/DoomShroom.gif",
    "images/Plants/DoomShroom/Sleep.gif",
    "images/Plants/DoomShroom/BeginBoom.gif",
    "images/Plants/DoomShroom/crater10.png",
    "images/Plants/DoomShroom/crater11.png",
    "images/Plants/DoomShroom/crater20.png",
    "images/Plants/DoomShroom/crater21.png",
    "images/Plants/DoomShroom/crater30.png",
    "images/Plants/DoomShroom/crater31.png",
    "images/Plants/DoomShroom/Boom.png",
  ],
  Tooltip: "将大局逆转吧！！！",
  Produce: '魅惑毁灭菇可以魅惑大范围的僵尸，并留下一个不能种植物的大弹坑。<p>伤害：<font color="#FF0000">极高</font><br>范围：<font color="#FF0000">大范围内的所有僵尸</font><br>用法：<font color="#FF0000">单独使用，立即生效</font><br>特点：<font color="#FF0000">留下一个弹坑<br>白天睡觉</font></p>“将大局逆转吧！！某位人说过”',
  InitTrigger: function() {},
  AudioArr: ["doomshroom"],
  BirthStyle: function(c, d, b, a) {
    oS.DKind ?
      ((c.Sleep = 1), (b.childNodes[1].src = c.PicArr[c.SleepGif])) :
      ((c.Sleep = 0),
        (c.getHurt = function() {}),
        (b.childNodes[1].src = "images/Plants/DoomShroom/BeginBoom.gif"),
        c.NormalAttack(d));
    EditEle(
      b, {
        id: d,
      },
      a,
      EDPZ
    );
  },
  WakeUP: function(a) {
    var b = a.id;
    a.Sleep = 0;
    a.getHurt = function() {};
    $(b).childNodes[1].src = "images/Plants/DoomShroom/BeginBoom.gif";
    a.NormalAttack(b);
  },
  NormalAttack: function(a) {
    oSym.addTask(
      100,
      function(c) {
        var d = $P[c],
          q = c + "_Boom";
        if (d) {
          var g = $(c),
            l = d.R,
            h = l > 3 ? l - 2 : 1,
            f = Math.min(oS.R, l + 2),
            n = d.pixelLeft - 240,
            m = d.pixelRight + 240,
            e,
            k,
            b = GetC(d.AttackedLX),
            o,
            r = l + "_" + b,
            j = oGd.$;
          do {
            k = (e = oZ.getArZ(n, m, h)).length;
            while (k--) {
              e[k].bedevil(e[k]);
            }
          } while (h++ < f);
          PlayAudio("doomshroom");
          d.Die();
          (o = j[r + "_" + 0]) && o.Die;
          (o = j[r + "_" + 2]) && o.Die;
          oGd.$Crater[r] = 2;
          NewEle(
            q,
            "div",
            "position:absolute;overflow:hidden;z-index:" +
            (d.zIndex + 2) +
            ";width:283px;height:324px;left:" +
            (d.pixelLeft - 80) +
            "px;top:" +
            (d.pixelTop - 220) +
            "px;background:url(images/Plants/DoomShroom/Boom.png) no-repeat",
            0,
            EDPZ
          );
          oSym.addTask(
            20,
            function(i) {
              ClearChild(i);
            },
            [
              NewEle(
                q,
                "div",
                "position:absolute;z-index:20;width:900px;height:600px;left:0;top:0;background:#FFF;*filter:alpha(opacity=50);opacity:.5",
                0,
                EDPZ
              ),
            ]
          );
          ImgSpriter(
            q,
            c,
            [
              ["0 0", 10, 1],
              ["-283px 0", 10, 2],
              ["-566px 0", 10, 3],
              ["-849px 0", 10, 4],
              ["-1132px 0", 10, 5],
              ["-1415px 0", 10, 6],
              ["-1698px 0", 10, 7],
              ["-1981px 0", 10, 8],
              ["-2264px 0", 10, 9],
              ["-2547px 0", 10, -1],
            ],
            0,
            function(i, p) {
              ClearChild($(i));
              d.setCrater(
                c + "_crater",
                l,
                b,
                d.pixelLeft + 3,
                d.pixelTop + 50
              );
            }
          );
        }
      },
      [a]
    );
  },
  setCrater: function(f, b, d, e, c) {
    var a;
    switch (oGd.$LF[b]) {
      case 1:
        a = NewEle(
          f,
          "div",
          "position:absolute;z-index:" +
          (3 * b - 1) +
          ";overflow:hidden;background:url(images/Plants/DoomShroom/crater1" +
          oS.DKind +
          ".png) no-repeat;width:90px;height:61px;left:" +
          (e || GetX(d) - 45) +
          "px;top:" +
          (c || GetY(b) - 30) +
          "px",
          0,
          EDPZ
        );
        break;
      case 2:
        a = NewEle(
          f,
          "div",
          "position:absolute;z-index:" +
          (3 * b - 1) +
          ";overflow:hidden;background:url(images/Plants/DoomShroom/crater2" +
          oS.DKind +
          ".png) no-repeat;width:85px;height:53px;left:" +
          (e || GetX(d) - 42) +
          "px;top:" +
          (c || GetY(b) - 26) +
          "px",
          0,
          EDPZ
        );
        break;
      default:
    }
    oSym.addTask(
      9000,
      function(g) {
        var h = b + "_" + d;
        g.style.backgroundPosition = "100% 0";
        oGd.$Crater[h] = 1;
        oSym.addTask(
          9000,
          function(i, j) {
            ClearChild(i);
            delete oGd.$Crater[j];
          },
          [g, h]
        );
      },
      [a]
    );
  },
})),
(ofireWallNut = InheritO(CPlants, {
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
  Produce: '火炬坚果墙拥有足以让你用来保护其它植物的坚硬外壳。<p>韧性：<font color="FF0000">高</font></p>火炬坚果墙：“也许看起来，我与其他坚果没有区别，但我的内心是火热的！！”',
  // 私有出生函数
  PrivateBirth: function(c) {
    var a = c.R,
      b = c.C;
    oGd.$Torch[a + "_" + b] = c.id;
    oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 0);
  },
  CanGrow: function(c, b, f) {
    var a = b + "_" + f,
      d = c[1],
      e = oS.ArP;
    return e ?
      oGd.$LF[b] == 1 ?
      f > 0 &&
      f < e.ArC[1] &&
      !(oGd.$Crater[a] || oGd.$Tombstones[a] || d) :
      c[0] && !d :
      d && d.EName == "oWallNut" ?
      1 :
      oGd.$LF[b] == 1 ?
      !(f < 1 || f > 9 || oGd.$Crater[a] || oGd.$Tombstones[a] || d) :
      c[0] && !d;
  },
  InitTrigger: function() {},
  HurtStatus: 0,
  getHurt: function(e, b, a) {
    var c = this,
      d = $(c.id).childNodes[1];
    !(b % 3) ?
    (c.HP -= a) < 1
      ?
      c.Die() :
      c.HP < 1334 ?
      c.HurtStatus < 2 &&
      ((c.HurtStatus = 2),
        (d.src = "images/Plants/WallNut/Wallnut_cracked2.gif")) :
      c.HP < 2667 &&
      c.HurtStatus < 1 &&
      ((c.HurtStatus = 1),
        (d.src = "images/Plants/WallNut/Wallnut_cracked1.gif")): c.Die();
  },
  // 私有死亡函数
  PrivateDie: function(c) {
    var a = c.R,
      b = c.C;
    delete oGd.$Torch[a + "_" + b];
    oS.HaveFog && oGd.GatherFog(a, b, 1, 1, 1);
  },
}));