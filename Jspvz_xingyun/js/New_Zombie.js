var oDancingZombie1 = InheritO(OrnNoneZombies, {
    EName: "oDancingZombie1",
    CName: "舞王僵尸",
    HP: 1200,
    BreakPoint: 166,
    Lvl: 3,
    StandGif: 9,
    SunNum: 350,
    beAttackedPointL: 40,
    beAttackedPointR: 85,
    width: 184,
    height: 176,
    BookHandPosition: "70% 70%",
    AudioArr: ["dancer"],
    OSpeed: 7.2,
    Speed: 7.2,
    NormalGif: 9,
    GetDTop: 5,
    SummonX: 0,
    Birth: function () {
      var c = this;
      $Z[c.id] = c;
      oZ.add(c);
      c.BirthCallBack(c);
      c.SummonX = c.R;
    },
    getShadow: function (a) {
      return "left:30px;top:146px";
    },
    GetDX: function () {
      return -50;
    },
    GetDY: function () {
      return -5;
    },
    LostHeadGif: 14,
    addSpotlight: (function () {
      var a, b;
      $User.Browser.IE6
        ? ((a = "_8"), (b = "filter:alpha(opacity=30)"))
        : (a = b = "");
      return function (d, f, c) {
        var g = $Z[d],
          e;
        NewEle(
          d + "_spotlightCon",
          "div",
          "position:absolute;left:-30px;top:-400px;width:184px;height:600px;overflow:hidden",
          0,
          c
        ).appendChild(
          (g.spotlight = NewImg(
            d + "_spotlight",
            "images/Zombies/DancingZombie/spotlight" + a + ".png",
            "left:0;top:0;width:920px;height:600px;" + b
          ))
        );
        e = NewEle(
          d + "_spotlight2Con",
          "div",
          "position:absolute;left:-25px;top:135px;width:184px;height:60px;overflow:hidden",
          0
        );
        c.insertBefore(e, f.EleShadow);
        e.appendChild(
          (g.spotlight2 = NewImg(
            d + "_spotlight2",
            "images/Zombies/DancingZombie/spotlight2" + a + ".png",
            "left:0;top:0;width:920px;height:60px;" + b
          ))
        );
      };
    })(),
    PicArr: (function () {
      var d = "images/Zombies/DancingZombie/",
        c = $User.Browser.IE6 ? "_8" : "",
        a = d + "spotlight" + c + ".png" + $Random,
        b = d + "spotlight2" + c + ".png" + $Random;
      return [
        "images/Card/Zombies/DancingZombie.png",
        d + "0.gif",
        d + "DancingZombie.gif",
        d + "Attack.gif",
        d + "LostHead.gif",
        d + "LostHeadAttack.gif",
        d + "Head.gif" + $Random,
        d + "Die.gif" + $Random,
        d + "BoomDie.gif" + $Random,
        d + "SlidingStep.gif" + $Random,
        d + "Dancing.gif" + $Random,
        d + "Summon1.gif",
        d + "Summon2.gif",
        d + "Summon3.gif",
        d + "LostHeadSlidingStep.gif" + $Random,
        d + "LostHeadDancing.gif" + $Random,
        d + "LostHeadSummon.gif" + $Random,
        a,
        b,
      ];
    })(),
    Produce:
      '舞王僵尸和人类(在世或者死去的)如有雷同，纯属巧合。</p><p>韧性：<font color="#FF0000">中</font><br>特点：<font color="#FF0000">召唤伴舞僵尸</font></p>舞王僵尸的最新唱片“抓住脑子啃啊啃”在僵尸界的人气正急速飙升。',
    getSnowPea: function () {
      this.PlaySlowballAudio();
    },
    NormalDie: function () {
      var a = this;
      a.ResetBackupDancer(a);
      a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
      oSym.addTask(250, ClearChild, [a.Ele]);
      a.HP = 0;
      delete $Z[a.id];
      a.PZ && oP.MonPrgs();
    },
    ExplosionDie: function () {
      var a = this;
      a.ResetBackupDancer(a);
      a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
      oSym.addTask(300, ClearChild, [a.Ele]);
      a.HP = 0;
      delete $Z[a.id];
      a.PZ && oP.MonPrgs();
    },
    DisappearDie: function () {
      this.ResetBackupDancer(this);
      ClearChild(this.Ele);
      this.HP = 0;
      delete $Z[this.id];
      this.PZ && oP.MonPrgs();
    },
    CrushDie: function () {
      var a = this;
      a.ResetBackupDancer(a);
      a.GoingDieHead(a.id, a.PicArr, a);
      ClearChild(a.Ele);
      a.HP = 0;
      delete $Z[a.id];
      a.PZ && oP.MonPrgs();
    },
    bedevil: function (b) {
      var a = b.id;
      b.ExchangeLR(b, 1);
      b.JudgeAttack = b.JudgeAttackH;
      b.PZ = 0;
      b.WalkDirection = 1;
      b.ZX = b.AttackedRX;
      b.ChkActs = b.ChkActs1;
      b.ChangeChkActsTo1(b, a, b.EleBody);
      b.ResetBackupDancer(b);
      ($(a + "_spotlightCon").style.left = "20px"),
        ($(a + "_spotlight2Con").style.left = "25px");
      oP.MonPrgs();
      b.CanPao222 = 0;
    },
    ResetBackupDancer: function (f) {
      var g = f.ArDZ,
        d = g.length,
        c,
        b,
        e,
        a = f.DZStep;
      while (d--) {
        if ((c = g[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
          if (a > 0) {
            switch (true) {
              case (e.FreeFreezeTime || e.FreeSetbodyTime) == 1:
                e.Speed = 0;
                break;
              case e.FreeSlowTime > 0:
                e.Speed = 1.75;
                break;
              default:
                e.Speed = 3.5;
            }
          }
        }
      }
      a > -1 &&
        oSym.addTask(
          f.DZStepT - oSym.Now,
          function (o, j) {
            var m = 4,
              l,
              k,
              n,
              h = "ChangeChkActsTo" + j;
            while (m--) {
              (l = o[m]) &&
                (k = l[0]) &&
                (n = $Z[k]) &&
                n.beAttacked &&
                ((n.DZStep = j), n[h](n, k, n.EleBody));
            }
          },
          [g, [1, 0][a]]
        );
    },
    BirthCallBack: function (d) {
      var b = d.delayT,
        l = d.id,
        a = (d.Ele = $(l)),
        c = 320,
        i = oGd.$LF,
        g = d.R,
        s = g - 1,
        n = g + 1,
        e,
        r,
        q = LX - 60,
        m = LX + 100,
        k = LX - 130,
        j = LX - 70,
        h = LX + 30,
        f = (d.ArDZ = [0, 0, 0, 0]);
      d.EleShadow = a.firstChild;
      d.EleBody = a.childNodes[1];
      s > 0 &&
        (e = i[s]) &&
        e != 2 &&
        (f[0] = [
          "",
          s,
          function (o) {
            return o;
          },
          3 * s + 2,
          function (o) {
            return o - 70;
          },
          GetY(s) - 155,
        ]);
      n <= oS.R &&
        (e = i[n]) &&
        e != 2 &&
        (f[2] = [
          "",
          n,
          function (o) {
            return o;
          },
          3 * n + 2,
          function (o) {
            return o - 70;
          },
          GetY(n) - 155,
        ]);
      e = 3 * g + 2;
      r = GetY(g) - 155;
      f[3] = [
        "",
        g,
        function (o) {
          return o - 60;
        },
        e,
        function (o) {
          return o - 130;
        },
        r,
      ];
      f[1] = [
        "",
        g,
        function (o) {
          return o + 100;
        },
        e,
        function (o) {
          return o + 30;
        },
        r,
      ];
      func = function (t, o) {
        var u = $Z[t];
        u &&
          (u.ExchangeLR(d, 1),
          (u.DZMSpeed = 7.2),
          (u.DZStep = -1),
          (u.DZStepT = oSym.Now + 220),
          (u.FreeSetbodyTime = 0),
          SetBlock(o));
      };
      b ? (oSym.addTask(b, func, [l, a]), (c += b)) : func(l, a);
      oSym.addTask(
        c,
        function (o) {
          var t = $Z[o];
          t && t.beAttacked && !t.isAttacking && t.NormalAttack(o);
        },
        [d.id]
      );
    },
    CallBack2: function () {
      var d = this,
        l = d.id,
        a = (d.Ele = $(l)),
        c = 320,
        i = oGd.$LF,
        g = d.SummonX,
        s = g - 1,
        n = g + 1,
        e,
        r,
        q = LX - 60,
        m = LX + 100,
        k = LX - 130,
        j = LX - 70,
        h = LX + 30,
        f = (d.ArDZ = [0, 0, 0, 0]);
      s > 0 &&
        (e = i[s]) &&
        e != 2 &&
        (f[0] = [
          "",
          s,
          function (o) {
            return o;
          },
          3 * s + 2,
          function (o) {
            return o - 70;
          },
          GetY(s) - 155,
        ]);
      n <= oS.R &&
        (e = i[n]) &&
        e != 2 &&
        (f[2] = [
          "",
          n,
          function (o) {
            return o;
          },
          3 * n + 2,
          function (o) {
            return o - 70;
          },
          GetY(n) - 155,
        ]);
      e = 3 * g + 2;
      r = GetY(g) - 155;
      f[3] = [
        "",
        g,
        function (o) {
          return o - 60;
        },
        e,
        function (o) {
          return o - 130;
        },
        r,
      ];
      f[1] = [
        "",
        g,
        function (o) {
          return o + 100;
        },
        e,
        function (o) {
          return o + 30;
        },
        r,
      ];
      func = function (t, o) {
        var u = $Z[t];
        u &&
          (u.ExchangeLR(d, 1),
          (u.DZMSpeed = 7.2),
          (u.DZStep = -1),
          (u.DZStepT = oSym.Now + 220),
          (u.FreeSetbodyTime = 0),
          SetBlock(o));
      };
      /*
        b ? (oSym.addTask(b, func, [l, a]), c += b) : func(l, a);
        oSym.addTask(c,
        function(o) {
            var t = $Z[o];
            t && t.beAttacked && !t.isAttacking && t.NormalAttack(o)
        },
        [d.id]);
	*/
      //console.log(d.ArDZ)
    },
    ChkActs1: function (e, b, f, a) {
      var c, d;
      !(e.FreeFreezeTime || e.FreeSetbodyTime)
        ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(),
          (c = e.id),
          !e.isAttacking
            ? (e.AttackedLX += 3.5) > oS.W
              ? (f.splice(a, 1), e.DisappearDie(), (d = 0))
              : ((e.ZX = e.AttackedRX += 3.5),
                (e.Ele.style.left = Math.ceil((e.X += 3.5)) + "px"),
                (d = 1))
            : (d = 1))
        : (d = 1);
      return d;
    },
    ChkTmp: function (c, b, d, a) {
      c.ChkSpeed(c);
      return 0;
    },
    ChkActs: function (g, d, h, c) {
      var e, b, a, f;
      !(g.FreeFreezeTime || g.FreeSetbodyTime)
        ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(),
          (e = g.id),
          !g.isAttacking
            ? (a = g.AttackedRX -= b = g.Speed) < -50
              ? (h.splice(c, 1), g.DisappearDie(), (f = 0))
              : (a < 100 &&
                  !g.PointZombie &&
                  ((g.PointZombie = 1),
                  !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)),
                  g.ChangeR({
                    R: d,
                    ar: [oS.R - 1],
                    CustomTop: 400 - g.height + g.GetDY(),
                  })),
                (g.ZX = g.AttackedLX -= b),
                (g.Ele.style.left = Math.floor((g.X -= b)) + "px"),
                (f = 1))
            : (f = 1))
        : (f = 1);
      g.ChkSpeed(g);
      return f;
    },
    ChkSpeed: function (g) {
      if (!g.DZStep) {
        return;
      }
      var h = g.ArDZ,
        d = 4,
        c,
        b,
        e,
        a = g.OSpeed,
        f = [];
      switch (true) {
        case (g.isAttacking || g.FreeFreezeTime || g.FreeSetbodyTime) == 1:
          a = 0;
          break;
        case g.FreeSlowTime > 0:
          a != 1.75 && (a = 1.75);
      }
      while (d--) {
        if ((c = h[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
          f.push(e);
          switch (true) {
            case (e.isAttacking || e.FreeFreezeTime || e.FreeSetbodyTime) == 1:
              a = 0;
              break;
            case e.FreeSlowTime > 0:
              a != 1.75 && (a = 1.75);
          }
        }
      }
      if (a != g.DZMSpeed) {
        g.DZMSpeed = a;
        d = f.length;
        while (d--) {
          (e = f[d]).Speed != a && (e.Speed = a);
        }
        g.Speed != a && (g.Speed = a);
      }
    },
    AttackZombie: function (a) {
      this.ExchangeLR(this, 0);
      var b = this.id;
      this.isAttacking = 1;
      this.EleBody.src = this.PicArr[this.AttackGif];
      oSym.addTask(
        10,
        function (d, c) {
          var f = $Z[d],
            e;
          f &&
            f.beAttacked &&
            !f.FreeFreezeTime &&
            !f.FreeSetbodyTime &&
            ((e = $Z[c])
              ? (e.getHit0(e, 10, 0),
                oSym.addTask(10, arguments.callee, [d, c]))
              : ((f.isAttacking = 0),
                (f.EleBody.src = f.PicArr[f.NormalGif]),
                f.TurnLeft(f)));
        },
        [b, a]
      );
    },
    ChangeR: function (e) {
      var h = e.R,
        g = e.ar || [],
        j = e.CustomTop,
        d = this,
        q = h - 1,
        l,
        k = d.id,
        m = -1,
        f = d.Ele,
        n = d.EleBody,
        i = oGd.$LF,
        c;
      !g.length &&
        (d.CanPass(q, i[q]) && (g[++m] = q),
        d.CanPass((q += 2), i[q]) && (g[++m] = q));
      g.length
        ? ((l = !d.WalkDirection ? -5 : 5),
          (xyz = !d.WalkDirection ? 1 : -1),
          (d.ZX += l),
          (d.AttackedLX += l),
          (d.AttackedRX += l),
          (d.X += l),
          (q = g[Math.floor(Math.random() * g.length)]),
          (d.SummonX = q),
          SetStyle(f, {
            left: d.X + "px",
            top:
              (d.pixelTop =
                j == undefined ? GetY(q) - d.height + d.GetDY() : j) + "px",
            zIndex: (d.zIndex = 3 * q + 1),
          }),
          d.isAttacking && (n.src = d.PicArr[d.NormalGif]),
          oZ.moveTo(k, h, q))
        : (n.src = d.PicArr[d.NormalGif]);
      d.isAttacking = 0;
      d.ResetBackupDancer(d);
      d.CallBack2(); //console.log(d.SummonX)
    },
    ChkBackupDancer: function (h, g, f) {
      if (!h.PZ) {
        h.ChangeChkActsTo1(h, g, f);
        return;
      }
      var b = h.ArDZ,
        d = 4,
        j = 1,
        c,
        e,
        a;
      while (d--) {
        (e = b[d]) &&
          (!(c = e[0]) ||
            !(a = $Z[c]) ||
            (a.PZ ? false : ((e[0] = ""), true))) &&
          (d = j = 0);
      }
      !h.isAttacking && j ? (f.src = h.PicArr[10]) : h.Summon(h, g);
      h.ChangeChkActsTo0(h, g, f);
    },
    ChangeChkActsTo0: function (g, e, a) {
      if (!g.PZ) {
        g.ChangeChkActsTo1(g, e, a);
        return;
      }
      var d = 4,
        h = g.ArDZ,
        c,
        b,
        f;
      while (d--) {
        (b = h[d]) &&
          (c = b[0]) &&
          (f = $Z[c]) &&
          f.beAttacked &&
          ((f.LostHeadGif = 10),
          (f.NormalGif = 9),
          !f.isAttacking && (f.EleBody.src = f.PicArr[9]),
          (f.Speed = 0));
      }
      g.LostHeadGif = 15;
      g.NormalGif = 10;
      g.Speed = g.DZMSpeed = g.DZStep = 0;
      g.DZStepT = oSym.Now + 200;
      oSym.addTask(
        200,
        function (j, i) {
          var k = $Z[j];
          k && k.beAttacked && k.ChangeChkActsTo1(k, j, i);
        },
        [e, a]
      );
    },
    ChangeChkActsTo1: function (g, e, a) {
      var d = 4,
        h = g.ArDZ,
        c,
        b,
        f;
      while (d--) {
        (b = h[d]) &&
          (c = b[0]) &&
          (f = $Z[c]) &&
          f.beAttacked &&
          ((f.LostHeadGif = 4),
          (f.NormalGif = 2),
          !f.isAttacking && (f.EleBody.src = f.PicArr[2]));
      }
      g.LostHeadGif = 4;
      g.NormalGif = 2;
      g.DZStep = 1;
      g.DZStepT = oSym.Now + 220;
      !g.isAttacking && (a.src = g.PicArr[2]);
      g.PZ &&
        oSym.addTask(
          220,
          function (j, i) {
            var k = $Z[j];
            k && k.beAttacked && k.ChkBackupDancer(k, j, i);
          },
          [e, a]
        );
    },
    TurnLeft: function (c) {
      var a = CZombies.prototype,
        b = c.id;
      c.AttackZombie = a.AttackZombie;
      c.NormalAttack = a.NormalAttack;
      c.OSpeed = 3.5;
      !(c.FreeSlowTime || c.FreeFreezeTime || c.FreeSetbodyTime) &&
        (c.Speed = 3.5);
      c.getSnowPea = OrnNoneZombies.prototype.getSnowPea;
      c.getFreeze = CZombies.prototype.getFreeze;
      oSym.addTask(
        20,
        function (d, e) {
          $Z[d] &&
            e.beAttacked &&
            (e.addSpotlight(d, e, e.Ele),
            oSym.addTask(
              200,
              function (g, f, i, h, k) {
                var j = $Z[g];
                j &&
                  (h > -736 ? (h -= 184) : (h = 0),
                  (f.style.left = h + "px"),
                  k > -736 ? (k -= 184) : (k = 0),
                  (i.style.left = k + "px"),
                  oSym.addTask(100, arguments.callee, [g, f, i, h, k]));
              },
              [d, e.spotlight, e.spotlight2, 0, 0]
            ),
            oSym.addTask(
              200,
              function (h, g) {
                var f;
                $Z[g] &&
                  h.beAttacked &&
                  ((f = h.EleBody),
                  !h.isAttacking ? (f.src = h.PicArr[10]) : (h.isAttacking = 0),
                  h.ChangeChkActsTo0(h, g, f));
              },
              [e, d]
            ));
        },
        [b, c]
      );
      //c.Summon(c, b)
    },
    NormalAttack: function (a) {
      var b = $Z[a];
      b.ExchangeLR(b, 0);
      b.TurnLeft(b);
    },
    /*Summon: function(d, c) {
		d.LostHeadGif = 16;
		var a = d.EleBody,
		b = d.ChkActs;
		d.ChkActs = d.ChkTmp;
		d.ChkTmp = b;
		a.src = "images/Zombies/DancingZombie/Summon1.gif";
		PlayAudio("dancer");
		oSym.addTask(10,
		function(f, e) {
			var g = $Z[f];
			g && g.beAttacked && (e.src = "images/Zombies/DancingZombie/Summon2.gif", oSym.addTask(10,
			function(t, s, x) {
				var h = $Z[t],
				v = h.ZX,
				m = h.ArDZ,
				n = [],
				k = "images/Zombies/BackupDancer/Mound.gif" + $Random + Math.random(),
				r = 4,
				w = [],
				u = [],
				o = 0,
				q,
				l;
				if (h && h.beAttacked) {
					s.src = "images/Zombies/DancingZombie/Summon3.gif";
					while (r--) { (q = m[r]) && (!(l = q[0]) || !$Z[l]) && (u[o] = (w[o] = new oBackupDancer).CustomBirth(q[1], q[2](v), 100, q[0] = "Z_" + Math.random()), n.push(NewImg("", k, "z-index:" + q[3] + ";left:" + q[4](v) + "px;top:" + q[5] + "px", EDPZ)), ++o)
					}
					oSym.addTask(220,
					function() {
						var i = arguments.length;
						while (i--) {
							ClearChild(arguments[i])
						}
					},
					n);
					oSym.addTask(110,
					function(A, y, z, i) {
						var B = $Z[A];
						B && B.beAttacked && (oP.AppearUP(y, z, i), oSym.addTask(100,
						function(D, C) {
							var E = $Z[D];
							if (E && E.beAttacked) {
								return
							}
							var j = C.length,
							E;
							while (j--) { (E = C[j]).ChangeChkActsTo0(E, E.id, E.EleBody)
							}
						},
						[A, z]))
					},
					[t, u, w, o]);
					oSym.addTask(200,
					function(y, i) {
						var z = $Z[y],
						j;
						z && z.beAttacked && (j = z.ChkActs, z.ChkActs = z.ChkTmp, z.ChkTmp = j)
					},
					[t, s])
				}
			},
			[f, e]))
		},
		[c, a])
	}*/
  }),
  oConeheadZombie1 = InheritO(OrnIZombies, {
    EName: "oConeheadZombie1",
    CName: "路障僵尸",
    OrnHP: 370,
    Lvl: 2,
    SunNum: 75,
    StandGif: 11,
    PicArr: (function () {
      var b = "images/Zombies/ConeheadZombie/",
        a = "images/Zombies/Zombie/";
      return [
        "images/Card/Zombies/unlook.gif",
        b + "unlook.gif",
        b + "unlook.gif",
        b + "unlook.gif",
        a + "unlook.gif",
        a + "unlook.gif",
        a + "unlook.gif" + $Random,
        a + "unlook.gif" + $Random,
        a + "unlook.gif" + $Random,
        a + "unlook.gif",
        a + "unlook.gif",
        b + "unlook.gif",
      ];
    })(),
    AudioArr: ["plastichit"],
    PlayNormalballAudio: function () {
      PlayAudio("plastichit");
    },
    Produce:
      '他的路障头盔，使他两倍坚韧于普通僵尸。<p>韧性：<font color="#FF0000">中</font></p>和其他僵尸一样，路障头僵尸盲目地向前。但某些事物却使他停下脚步，捡起一个交通路障，并固实在自己的脑袋上。是的，他很喜欢参加聚会。',
  }),
  oBigConeheadZombiebie = InheritO(OrnIZombies, {
    EName: "BigoConeheadZombie",
    CName: "路障僵尸",
    OrnHP: 1000,
    Lvl: 2,
    SunNum: 150,
    StandGif: 11,
    PicArr: (function () {
      var b = "images/Zombies/ConeheadZombie/",
        a = "images/Zombies/Zombie/";
      return [
        "images/Card/Zombies/ConeheadZombie.png",
        b + "0.gif",
        b + "ConeheadZombie.gif",
        b + "ConeheadZombieAttack.gif",
        a + "ZombieLostHead.gif",
        a + "ZombieLostHeadAttack.gif",
        a + "ZombieHead.gif" + $Random,
        a + "ZombieDie.gif" + $Random,
        a + "BoomDie.gif" + $Random,
        a + "Zombie.gif",
        a + "ZombieAttack.gif",
        b + "1.gif",
      ];
    })(),
    AudioArr: ["plastichit"],
    PlayNormalballAudio: function () {
      PlayAudio("plastichit");
    },
    Produce:
      '他的路障头盔，使他两倍坚韧于普通僵尸。<p>韧性：<font color="#FF0000">中</font></p>和其他僵尸一样，路障头僵尸盲目地向前。但某些事物却使他停下脚步，捡起一个交通路障，并固实在自己的脑袋上。是的，他很喜欢参加聚会。',
  }),
  oBucketheadZombie1 = InheritO(
    oConeheadZombie,
    {
      EName: "oBucketheadZombie1",
      CName: "铁桶僵尸",
      OrnHP: 1100,
      Lvl: 3,
      SunNum: 125,
      PlayNormalballAudio: function () {
        PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
      },
      Produce:
        '他的铁桶头盔，能极大程度的承受伤害。<p>韧性：<font color="#FF0000">高</font><br>弱点：<font color="#FF0000">磁力菇</font></p>铁桶头僵尸经常戴着水桶，在冷漠的世界里显得独一无二。但事实上，他只是忘记了，那铁桶还在他头上而已。',
    },
    {
      PicArr: {
        0: "images/Card/Zombies/unlook.gif",
        1: "images/Zombies/BucketheadZombie/unlook.gif",
        2: "images/Zombies/BucketheadZombie/unlook.gif",
        3: "images/Zombies/BucketheadZombie/unlook.gif",
        9: "images/Zombies/Zombie/unlook.gif",
        11: "images/Zombies/BucketheadZombie/unlook.gif",
      },
    }
  ),
  oBigBucketheadZombie = InheritO(
    oConeheadZombie,
    {
      EName: "oBigBucketheadZombie",
      CName: "铁桶僵尸",
      OrnHP: 2200,
      Lvl: 3,
      SunNum: 250,
      PlayNormalballAudio: function () {
        PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
      },
      Produce:
        '他的铁桶头盔，能极大程度的承受伤害。<p>韧性：<font color="#FF0000">高</font><br>弱点：<font color="#FF0000">磁力菇</font></p>铁桶头僵尸经常戴着水桶，在冷漠的世界里显得独一无二。但事实上，他只是忘记了，那铁桶还在他头上而已。',
    },
    {
      PicArr: {
        0: "images/Card/Zombies/BucketheadZombie.png",
        1: "images/Zombies/BucketheadZombie/0.gif",
        2: "images/Zombies/BucketheadZombie/BucketheadZombie.gif",
        3: "images/Zombies/BucketheadZombie/BucketheadZombieAttack.gif",
        9: "images/Zombies/Zombie/Zombie2.gif",
        11: "images/Zombies/BucketheadZombie/1.gif",
      },
    }
  ),
  oZombiejump = InheritO(oPoleVaultingZombie, {
    EName: "oZombiejump",
    CName: "跳跳僵尸",
    HP: 500,
    width: 348,
    height: 218,
    OSpeed: 3.2,
    Speed: 3.2,
    beAttackedPointL: 215,
    beAttackedPointR: 260,
    StandGif: 13,
    GetDX: function () {
      return -238;
    },
    GetDY: function () {
      return 2;
    },
    Lvl: 2,
    SunNum: 75,
    BookHandPosition: "-30px 70%",
    PicArr: (function () {
      var a = "images/Zombies/PoleVaultingZombie/";
      return [
        "Card/Zombies/PoleVaultingZombie.png",
        a + "0.gif",
        a + "PoleVaultingZombie.gif",
        a + "PoleVaultingZombieAttack.gif",
        a + "PoleVaultingZombieLostHead.gif",
        a + "PoleVaultingZombieLostHeadAttack.gif",
        a + "PoleVaultingZombieHead.gif" + $Random,
        a + "PoleVaultingZombieDie.gif" + $Random,
        a + "BoomDie.gif" + $Random,
        a + "PoleVaultingZombieWalk.gif",
        a + "PoleVaultingZombieLostHeadWalk.gif",
        a + "PoleVaultingZombieJump.gif",
        a + "PoleVaultingZombieJump2.gif",
        a + "1.gif",
      ];
    })(),
    AudioArr: ["polevault", "grassstep"],
    Produce:
      '撑杆僵尸运用标杆高高地跃过障碍物。<p>韧性：<font color="#FF0000">中</font><Br>速度：<font color="#FF0000">快,而后慢(跳跃后)</font><BR>特点：<font color="#FF0000">跃过他所碰到的第一筑植物</font></p>一些僵尸渴望走得更远、得到更多，这也促使他们由普通成为非凡。那就是撑杆僵尸。',
    getShadow: function (a) {
      return (
        "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 35) + "px"
      );
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "left:" +
            b.X +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    JudgeAttack: function () {
      var g = this,
        b = g.ZX,
        d = g.R + "_",
        c = GetC(b),
        h = oGd.$,
        f,
        a,
        e = b - 74;
      for (f = c - 2; f <= c; f++) {
        if (f > 9) {
          continue;
        }
        for (
          a = 2;
          a > -1;
          (p = h[d + f + "_" + a--]) &&
          (p.EName != "oBrains"
            ? p.AttackedRX >= e &&
              p.AttackedLX < b &&
              p.canEat &&
              ((a = -1),
              p.Stature > 0
                ? (g.JudgeAttack = CZombies.prototype.JudgeAttack)
                : 1,
              g.NormalAttack(g.id, p.id, p.AttackedLX))
            : p.AttackedRX >= b &&
              p.AttackedLX < b &&
              ((a = -1),
              (g.JudgeAttack = CZombies.prototype.JudgeAttack),
              (g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id)))
        ) {}
      }
    },
    getCrushed: function (a) {
      this.NormalAttack(this.id, a.id, a.AttackedLX);
      this.getCrushed = function () {
        return false;
      };
      a.Stature > 0 &&
        oSym.addTask(
          50,
          function (c) {
            var b = $Z[c];
            b && b.CrushDie();
          },
          [this.id]
        );
      return false;
    },
    getRaven: function (a) {
      return (
        !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX), 0
      );
    },
    NormalAttack: function (d, b, g) {
      var f = $Z[d],
        a = f.Ele,
        c = f.EleShadow,
        e = f.EleBody;
      e.src =
        "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump.gif" +
        $Random +
        Math.random();
      PlayAudio("grassstep");
      SetHidden(c);
      f.isAttacking = 1;
      f.Altitude = 2;
      f.getFreeze = function () {
        f.getSnowPea(f, 20);
      };
      oSym.addTask(
        50,
        function (h) {
          $Z[h] && PlayAudio("polevault");
        },
        [d]
      );
      oSym.addTask(
        100,
        function (m, j, i, l, n) {
          var h = $Z[m],
            k,
            q,
            r;
          h &&
            ((k = $P[j]) && k.Stature > 0
              ? ((h.AttackedRX =
                  (h.X =
                    (h.AttackedLX = h.ZX = q = k.AttackedRX) -
                    h.beAttackedPointL) + h.beAttackedPointR),
                SetStyle(i, {
                  left: h.X + "px",
                }),
                (n.src =
                  "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif"),
                SetVisible(l),
                (h.isAttacking = 0),
                (h.Altitude = 1),
                (h.OSpeed = h.Speed = 1.6),
                (h.NormalGif = 9),
                (h.LostHeadGif = 10),
                (h.NormalAttack = (r = CZombies.prototype).NormalAttack),
                (h.getCrushed = r.getCrushed),
                (h.getFreeze = r.getFreeze),
                (h.getRaven = r.getRaven))
              : ((h.ZX = h.AttackedLX =
                  (h.X = (h.AttackedRX = g) - h.beAttackedPointR) +
                  h.beAttackedPointL),
                SetStyle(i, {
                  left: h.X + "px",
                }),
                (n.src =
                  "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump2.gif" +
                  $Random +
                  Math.random()),
                SetVisible(l),
                oSym.addTask(
                  80,
                  function (s, v) {
                    var u = $Z[s],
                      t;
                    u &&
                      ((u.isAttacking = 0),
                      (u.Altitude = 1),
                      (v.src = u.PicArr[u.NormalGif]));
                  },
                  [m, n]
                )));
        },
        [d, b, a, c, e]
      );
    },
  }),
    oTrashZombie = InheritO(oScreenDoorZombie, {
    EName: "oTrashZombie",
    CName: "垃圾桶僵尸",
    PicArr: (function () {
      var a = "images/Zombies/TrashZombie/",
        b = "images/Zombies/Zombie/";
      return [
        "images/Card/Zombies/TrashZombie.png",
        a + "0.gif",
        a + "HeadWalk1.gif",
        a + "HeadAttack1.gif",
        a + "LostHeadWalk1.gif",
        a + "LostHeadAttack1.gif",
        b + "Zombie.gif",
        b + "ZombieAttack.gif",
        b + "ZombieLostHead.gif",
        b + "ZombieLostHeadAttack.gif",
        b + "ZombieHead.gif" + $Random,
        b + "ZombieDie.gif" + $Random,
        "images/Zombies/BoomDie.gif" + $Random,
        a + "1.gif",
      ];
    })(),
    Produce:
      "出没于常青之塔的神秘僵尸。</p>有这样一个故事：老人买了房子，不久便有、个年轻人在附近踢垃圾桶玩。 老人受不了这些噪音，于是和年轻人说“你每天都来踢垃圾桶，我给你一块钱。”年轻人很高兴，踹起了垃圾桶。三天后，老人说：“因为通货膨胀，明天起我只能给你5毛钱。“年轻人不大开心，但还是接受了。下午，他继续去踹垃圾桶。五天后，老人对他说：“最近没有收到养老金，只能给两毛了。”“两毛钱？”年轻人发起了火，之后便再没来踹垃圾桶了 ",
  }),
  oBigFootballZombie = InheritO(oConeheadZombie, {
    EName: "oBigFootballZombie",
    CName: "橄榄球僵尸",
    OrnHP: 5000,
    Lvl: 3,
    SunNum: 350,
    StandGif: 11,
    width: 154,
    height: 160,
    OSpeed: 3.2,
    Speed: 3.2,
    beAttackedPointL: 40,
    beAttackedPointR: 134,
    PlayNormalballAudio: function () {
      PlayAudio("plastichit");
    },
    PicArr: (function () {
      var a = "images/Zombies/FootballZombie/";
      return [
        "images/Card/Zombies/FootballZombie.png",
        a + "0.gif",
        a + "FootballZombie.gif",
        a + "Attack.gif",
        a + "LostHead.gif",
        a + "LostHeadAttack.gif",
        "images/Zombies/Zombie/ZombieHead.gif" + $Random,
        a + "Die.gif" + $Random,
        a + "BoomDie.gif" + $Random,
        a + "OrnLost.gif",
        a + "OrnLostAttack.gif",
        a + "1.gif",
      ];
    })(),
    getShadow: function (a) {
      return (
        "left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
      );
    },
    Produce:
      '橄榄球僵尸的表演秀。<p>韧性：<font color="#FF0000">极高</font><br>速度：<font color="#FF0000">快</font><br>弱点：<font color="#FF0000">磁力菇</font></p>某人曾对他做出这么样的评价：“在原版无论哪里都是神，尤其是被魅惑时的战斗力好像翻倍了一样，直接清空一路的感觉真爽。”',
  }),
  oSmallZombie = InheritO(oZombie, {
    EName: "oSmallZombie",
    CName: "小领带僵尸",
    HP: 300,
    width: 83,
    height: 72,
    beAttackedPointL: 41,
    beAttackedPointR: 78,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:83px;height:72px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:75px;height:93px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        (a.beAttackedPointL - 5) +
        "px;top:" +
        (a.height - 15) +
        "px"
      );
    },
  }),
  oSmallFlagZombie = InheritO(oFlagZombie, {
    EName: "oSmallFlagZombie",
    CName: "小旗帜僵尸",
    HP: 450,
    width: 83,
    height: 72,
    beAttackedPointL: 41,
    beAttackedPointR: 78,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:83px;height:72px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:75px;height:93px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        (a.beAttackedPointL - 5) +
        "px;top:" +
        (a.height - 15) +
        "px"
      );
    },
  }),
  oSmallDuckyTubeZombie1 = InheritO(oDuckyTubeZombie1, {
    EName: "oSmallDuckyTubeZombie1",
    CName: "小鸭子救生圈僵尸",
    HP: 600,
    width: 83,
    height: 72,
    beAttackedPointL: 41,
    beAttackedPointR: 73,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:83px;height:72px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:75px;height:93px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        (a.beAttackedPointL - 5) +
        "px;top:" +
        (a.height - 15) +
        "px"
      );
    },
  }),
  oSmallConeheadZombie = InheritO(oConeheadZombie, {
    EName: "oSmallConeheadZombie",
    CName: "小路障僵尸",
    OrnHP: 400,
    HP: 270,
    width: 83,
    height: 72,
    beAttackedPointL: 41,
    beAttackedPointR: 78,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:83px;height:72px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:75px;height:93px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        (a.beAttackedPointL - 5) +
        "px;top:" +
        (a.height - 15) +
        "px"
      );
    },
  }),
  oSmallFootballZombie = InheritO(oFootballZombie, {
    EName: "oSmallFootballZombie",
    CName: "小橄榄球僵尸",
    OrnHP: 2000,
    HP: 300,
    width: 77,
    height: 80,
    beAttackedPointL: 20,
    beAttackedPointR: 77,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:77px;height:80px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:75px;height:93px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        (a.beAttackedPointL + 15) +
        "px;top:" +
        (a.height - 22) +
        "px"
      );
    },
  }),
  oSmallSnorkelZombie = InheritO(oSnorkelZombie, {
    EName: "oSmallSnorkelZombie",
    CName: "小潜水僵尸",
    HP: 40,
    width: 71,
    height: 100,
    beAttackedPointL: 20,
    beAttackedPointR: 50,
    BreakPoint: 25,
    Init: function (e, g, c, b) {
      var a = 0,
        f = this,
        d = [];
      g.AttackedRX =
        (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) +
        g.beAttackedPointR;
      while (--b) {
        g.CanPass(b, c[b]) && (d[a++] = b);
      }
      g.ArR = d;
      g.ArHTML = [
        '<div id="',
        '" style="position:absolute;display:',
        ";left:",
        "px;top:",
        "px;z-index:",
        '"><img src="' +
          ShadowPNG +
          '" style="' +
          g.getShadow(g) +
          '"><img style="position:absolute;clip:rect(0,auto,',
        ",0);width:71px;height:100px;top:",
        'px" src="',
        '"></div>',
      ];
    },
    GoingDieHead: function (c, a, b) {
      oSym.addTask(200, ClearChild, [
        NewImg(
          0,
          a[b.HeadGif] + Math.random(),
          "width:71px;height:105px;left:" +
            b.AttackedLX +
            "px;top:" +
            (b.pixelTop - 20) +
            "px;z-index:" +
            b.zIndex,
          EDPZ
        ),
      ]);
    },
    getShadow: function (a) {
      return (
        "width:43px;height:18px;left:" +
        a.beAttackedPointL +
        "px;top:" +
        (a.height - 45) +
        "px"
      );
    },
  });
