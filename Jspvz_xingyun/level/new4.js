
  oS.Init(
    {
      PName: [
        oPeashooter,
        oSunFlower,
        oCherryBomb,
        oWallNut,
        oPotatoMine,
        oSnowPea,
        oChomper,
        oRepeater,
        oPuffShroom,
        oSunShroom,
        oFumeShroom,
        oGraveBuster,
        oHypnoShroom,
        oScaredyShroom,
        oIceShroom,
        oDoomShroom,
        oLilyPad,
        oSquash,
        oThreepeater,
        oTangleKelp,
        oJalapeno,
        oSpikeweed,
        oTorchwood,
        oTallNut,
        oSeaShroom,
        oPlantern,
        oCactus,
        oBlover,
        oSplitPea,
        oStarfruit,
        oPumpkinHead,
        oFlowerPot,
        oCoffeeBean,
        oGarlic,
        oGatlingPea,
        oGloomShroom,
        oTwinSunflower,
        oSpikerock,
      ],
      ZName: [
        oJalapenoZombie,
        oZombieBoss,
        oBackupDancer,
        oZombie,
        oZombie2,
        oZombie3,
        oPoleVaultingZombie,
        oConeheadZombie,
        oBucketheadZombie,
        oNewspaperZombie,
        oScreenDoorZombie,
        oFootballZombie,
        oDancingZombie,
        oDuckyTubeZombie1,
        oDuckyTubeZombie2,
        oDuckyTubeZombie3,
        oDolphinRiderZombie,
        oSnorkelZombie,
        oZomboni,
        oJackinTheBoxZombie,
        oBalloonZombie,
      ],
      PicArr: [
        "images/interface/background3_1.jpg.png",
        "images/interface/background3.jpg",
        "images/interface/Dave.gif",
        "images/interface/Dave2.gif",
        "images/interface/Dave3.gif",
      ],
      Coord: 2,
      SunNum: 2550,
      LF: [0, 1, 1, 2, 2, 1, 1],
      backgroundImage: "images/interface/background3_1.jpg.png",
      CanSelectCard: 1,
      DKind: 0,
      LevelName: "忏悔",
      LvlEName: "Repentant",
      AudioArr: [
        "crazydaveshort1",
        "crazydaveshort2",
        "crazydaveshort3",
        "crazydavelong1",
        "crazydavelong2",
        "crazydavelong3",
      ],
      LargeWaveFlag: {
        30: $("imgFlag1"),
        20: $("imgFlag2"),
        10: $("imgFlag3"),
      },
      UserDefinedFlagFunc: function (a) {
        if (oP.FlagNum == oP.FlagZombies) {
          NewURLAudio({
            url: "https://music.163.com/song/media/outer/url?id=28219120.mp3",
            audioname: "BeDone",
            loop: true,
          });
          oP.NumZombies += 1;
          oSym.addTask(
            10,
            function () {
              if (oP.NumZombies == 1) {
                oSym.addTask(
                  1,
                  function (AudioName) {
                    nowaudio = oAudio[AudioName];
                    if (nowaudio.volume > 0) {
                      nowaudio.volume = Math.max(0, nowaudio.volume - 0.005);
                      oSym.addTask(1, arguments.callee, [AudioName]);
                    } else {
                      StopAudio(AudioName);
                      nowaudio.volume = 1;
                      oP.SetTimeoutZombie([oZombieBoss], 0);
                    }
                  },
                  [oS.LoadMusic]
                );
              } else {
                oSym.addTask(10, arguments.callee, []);
              }
            },
            []
          );
        }
        oP.FlagZombies >= 25 &&
          oP.SetTimeoutWaterZombie(5, 9, 6, [
            oDuckyTubeZombie1,
            oDuckyTubeZombie2,
            oDuckyTubeZombie3,
          ]);
      },
      StartGameMusic: "Repentant",
      LoadAccess: function (a) {
        if (!$User.HTML5) {
          alert(
            "哦不！您的浏览器不支持html5代码\n请尝试升级您的浏览器再来游玩\n感谢您的谅解！"
          );
          SelectModal(0);
          return;
        }
        delete oAudio["Repentant"];
        delete oAudio["BeDone"];
        delete oAudio["同じ高みへ - CLANNAD"];
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll);
        NewURLAudio({
          url: "https://music.163.com/song/media/outer/url?id=1253299.mp3",
          audioname: "Repentant",
          loop: true,
        });
        StopMusic(), PlayMusic((oS.LoadMusic = "Faster"));
        (function (d) {
          var b = arguments.callee,
            c = $("DivTeach");
          switch (d) {
            case 0:
              DaveTalk(
                "嘿，你在这里。(点击继续)",
                0,
                b,
                "crazydaveshort1",
                100
              );
              break;
            case 1:
              DaveTalk(
                "我们遇到传说中的血月了。(点击继续)",
                1,
                b,
                "crazydavelong1"
              );
              break;
            case 2:
              DaveTalk("这一晚僵尸们将会成群出没。(点击继续)", 2, b);
              break;
            case 3:
              DaveTalk(
                "这会是一场大战役。(点击继续)",
                3,
                b,
                "crazydaveshort2",
                100
              );
              break;
            case 4:
              DaveTalk("一定要击退僵尸的袭击。(点击继续)", 4, b);
              break;
            case 5:
              DaveTalk("哦不……有一只不同寻常的怪。(点击继续)", 5, b);
              break;
            case 6:
              DaveTalk("看到那个家伙了吗，要出全力攻打他。(点击继续)", 6, b);
              break;
            case 7:
              DaveTalk("我把我手上仅有的阳光给你了。(点击继续)", 7, b);
              break;
            case 8:
              DaveTalk("一定要打败所有的僵尸，邻居。(点击继续)", 8, b);
              break;
            case 9:
              DaveTalk("不然我们就会被永远的困在血月天里了。(点击继续)", 9, b);
              break;
            case 10:
              DaveTalk("祝你好运。(点击继续)", 10, b, "crazydaveshort1");
              break;
            default:
              $("dDave").src = "images/interface/Dave2.gif";
              ClearChild($("DivTeach"));
              StopMusic(), PlayMusic((oS.LoadMusic = "Look up at the Sky"));
              oSym.addTask(
                50,
                function () {
                  ClearChild($("dDave"));
                  a(0);
                },
                []
              );
          }
        })(0);
      },
      StartGame: function () {
        StopMusic();
        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
        oS.InitLawnMower();
        PrepareGrowPlants(function () {
          PlayMusic((oS.LoadMusic = oS.StartGameMusic));
          oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
          BeginCool();
          oSym.addTask(
            1500,
            function () {
              oP.AddZombiesFlag();
              SetVisible($("dFlagMeterContent"));
            },
            []
          );
        });
      },
    },
    {
      AZ: [
        [oZombie, 3, 1, [1, 1]],
        [oZombie2, 3, 1, [1, 1, 1]],
        [oZombie3, 3, 1, [1, 1, 1]],
        [oPoleVaultingZombie, 2, 3, [3, 3, 3, 3, 3]],
        [oConeheadZombie, 3, 5, [5, 5, 5, 5]],
        [oBucketheadZombie, 3, 8, [8, 8, 8]],
        [oNewspaperZombie, 3, 10, [10, 10, 10, 10, 10]],
        [oScreenDoorZombie, 4, 11, [11, 11, 11]],
        [oFootballZombie, 2, 13, [13, 13, 13]],
        [oDancingZombie, 2, 14, [14, 14]],
        [oDuckyTubeZombie1, 3, 1, [1, 1, 1], [oDuckyTubeZombie2, 3, 4, [4]]],
        [oDuckyTubeZombie3, 3, 6, [6, 6, 6]],
        [oDolphinRiderZombie, 3, 4, [4, 4, 4]],
        [oSnorkelZombie, 3, 7],
        [oZomboni, 3, 18, [18, 18, 18]],
        [oJackinTheBoxZombie, 9, 9, [9]],
      ],
      FlagNum: 30,
      FlagToSumNum: {
        a1: [2, 3, 5, 6, 9, 10, 13, 16, 19, 20, 25, 27, 29],
        a2: [8, 11, 13, 15, 18, 30, 19, 20, 23, 55, 27, 30, 35, 60],
      },
      FlagToMonitor: {
        29: [ShowFinalWave, 0],
        19: [ShowLargeWave, 0],
        9: [ShowLargeWave, 0],
      },
      FlagToEnd: function () {
        NewImg(
          "imgSF",
          "images/interface/trophy.png",
          "left:43.5%;top:220px",
          EDAll,
          {
            onclick: function () {
              SelectModal(0);
              PlayAudio("winmusic");
            },
          }
        );
        NewImg(
          "PointerUD",
          "images/interface/PointerDown.gif",
          "top:185px;left:51%",
          EDAll
        );
      },
    },
    {
      DaveTalk: function (text, talknum, b, Audio, waittime) {
        (c = $("DivTeach")), (c.onclick = null);
        PlayAudio(Audio || "crazydavelong" + Math.floor(1 + Math.random() * 3));
        $("dDave").src = "images/interface/Dave3.gif";
        oSym.addTask(
          waittime ? waittime : 200,
          function () {
            $("dDave").src = "images/interface/Dave.gif";
            c.onclick = function () {
              oSym.addTask(10, b, [talknum + 1]);
            };
          },
          []
        );
        innerText(c, text);
      },
      NewURLAudio: function (b) {
        var a = b.url,
          names = b.audioname || a;
        if (oAudio[names]) {
          return oAudio[names];
        }
        var f = document.createElement("audio"),
          c = b.autoplay,
          g = b.loop,
          m,
          k = b.preload,
          l = b.callback,
          j = ["audio/mpeg", "audio/ogg"],
          e = j.length,
          d;
        while (e--) {
          (m = document.createElement("source")).type = j[e];
          (m.src = a), f.appendChild(m);
        }
        (f.autoplay = c ? true : false),
          (f.preload = k == undefined ? "auto" : ["auto", "meta", "none"][k]),
          (f.muted = oS.Silence);
        g &&
          f.addEventListener(
            "ended",
            function () {
              f.play();
            },
            false
          );
        l && f.addEventListener("canplaythrough", l, false);
        return (oAudio[names] = f);
      },
      BossDieAfter: function () {
        oSym.TQ = [];
        NewURLAudio({
          url: "https://music.163.com/song/media/outer/url?id=22706997.mp3",
          audioname: "同じ高みへ - CLANNAD",
          loop: true,
        });
        NewImg(
          "BackGroundAlpha",
          "images/interface/background3.jpg",
          "opacity:0;left:-115",
          EDAll
        );
        oSym.addTask(
          1,
          function (AudioName) {
            nowaudio = oAudio[AudioName];
            if (nowaudio.volume > 0) {
              nowaudio.volume = Math.max(0, nowaudio.volume - 0.005);
              $("BackGroundAlpha").style.opacity = 1 - nowaudio.volume;
              oSym.addTask(1, arguments.callee, [AudioName]);
            } else {
              $("BackGroundAlpha").style.opacity = 1;
              StopAudio(AudioName);
              nowaudio.volume = 1;
              $("dFlagMeterTitleB").innerHTML = "在天空中闪耀";
              $("sFlagMeterTitleF").innerHTML = "在天空中闪耀";
              PlayMusic(
                (oS.LoadMusic = oS.StartGameMusic = "同じ高みへ - CLANNAD")
              );
              NewImg(
                "dDave",
                "images/interface/Dave.gif",
                "z-index:254;left:0;top:81px",
                EDAll
              );
              NewEle("DivTeach", "div", "z-index:255", 0, EDAll);
              (function (d) {
                var b = arguments.callee,
                  c = $("DivTeach");
                switch (d) {
                  case 0:
                    DaveTalk(
                      "ohhhhh，干得漂亮，邻居！(点击继续)",
                      0,
                      b,
                      "crazydaveshort1",
                      100
                    );
                    break;
                  case 1:
                    DaveTalk(
                      "你成功抵挡了Boss的入侵！(点击继续)",
                      1,
                      b,
                      "crazydavelong1",
                      200
                    );
                    break;
                  case 2:
                    DaveTalk("赶紧领取属于你的奖杯吧！(点击继续)", 2, b);
                    break;
                  case 3:
                    DaveTalk(
                      "啥？没有奖杯？(点击继续)",
                      3,
                      b,
                      "crazydaveshort2",
                      100
                    );
                    break;
                  case 4:
                    DaveTalk("那是因为我没给你！(点击继续)", 4, b);
                    break;
                  case 5:
                    DaveTalk(
                      "奖杯找到了。(点击继续)",
                      5,
                      b,
                      "crazydaveshort3",
                      100
                    );
                    break;
                  case 6:
                    DaveTalk("下次我们继续守卫家园！再见。(点击继续)", 6, b);
                    break;
                  default:
                    $("dDave").src = "images/interface/Dave2.gif";
                    ClearChild($("DivTeach"));
                    (oP.FlagZombies = oP.FlagNum),
                      (oP.NumZombies = 1),
                      oP.MonPrgs();
                    setTimeout(function () {
                      ResetGame($("dMenu0"), 1);
                    }, 1);
                    setTimeout(function () {
                      ClearChild($("dDave"));
                    }, 5000);
                }
              })(0);
            }
          },
          [oS.LoadMusic]
        );
      },
      SummonZombie: function (id, e, b) {
        (e = Math.min(Math.max(e, 1), oS.R)),
          (b = Math.min(Math.max(b, -2), 11));
        asyncInnerHTML(
          (a = new id()).CustomBirth(e, b, 1, "auto"),
          function (n, m) {
            EDPZ.appendChild(n);
            m.Birth();
          },
          a
        );
        return a;
      },
      SetTimeoutSummonZombie: function (c, y, x) {
        var f = [],
          d = [],
          e = 0,
          a = c.length;
        d[0] = (f[0] = new c()).CustomBirth(y, x, 100);
        oP.AppearUP(d, f, 1);
        return f[0];
      },
    }
  );
//NewImg("","https://s8.gifyu.com/images/Repentant.png","display: none;",dBody);
