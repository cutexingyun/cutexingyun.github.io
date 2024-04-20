
oS.Init({PName:[oCherryBomb,oWallNut,oPotatoMine,oChomper,oSquash,oTangleKelp,oJalapeno,oSpikeweed,oTorchwood,oTallNut,oSeaShroom,oPlantern,oCactus,oBlover,oStarfruit,oPumpkinHead,oFlowerPot,oGarlic,oSpikerock],ZName:[oZombie,oZombie2,oZombie3,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oConeheadZombie,oSnorkelZombie,oNewspaperZombie,oFootballZombie,oDancingZombie,oBackupDancer,oPoleVaultingZombie,oScreenDoorZombie,oDolphinRiderZombie,oImp,oZomboni,oJackinTheBoxZombie,oBalloonZombie],PicArr:function(){var a=oTangleKelp.prototype,b=a;return["images/interface/background1.jpg",b[a.CardGif],b[a.NormalGif]]}(),Coord:1,DKind:0,SunNum:2500,LF:[0,1,1,1,1,1],ZF:[0,1,1,1,1,1],backgroundImage:"images/interface/background1.jpg",Coord:1,CanSelectCard:1,LevelName:"小丑与冰车",LvlEName:23,LargeWaveFlag:{10:$("imgFlag3"),20:$("imgFlag1")},UserDefinedFlagFunc:function(a){oP.FlagNum==oP.FlagZombies&&oP.SetTimeoutWaterZombie(6,9,3,[oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3])},StartGameMusic:"Kitanai Sekai",LoadAccess: function(a) {//函数
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);//戴夫出现      向日葵 oSunFlower 豌豆射手oPeashooter 双子向日葵oTwinSunflower,机枪oGatlingPea,寒冰射手oSnowPea,双发射手oRepeater,裂荚射手oSplitPea,三线射手oThreepeater,咖啡豆oCoffeeBean,蘑菇oPuffShroom,oSunShroom,oFumeShroom,oGraveBuster,oHypnoShroom,oScaredyShroom,oIceShroom,oDoomShroom,荷叶oLilyPad,忧郁菇oGloomShroom
        NewEle("DivTeach", "div", 0, 0, EDAll);//对话出现
        (function(d) {
            var b = arguments.callee,
                c = $("DivTeach");
            switch (d) {
                case 0://如果d是0
                    PlayAudio("crazydaveshort1");//播音
                    $("dDave").src = "images/interface/Dave3.gif";//戴夫说话图片
                    oSym.addTask(100, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [1])//点击后d变成1
                        }
                    }, []);
                    innerText(c, "你好，邻居。(点击继续)");//话
                    break;
                case 1:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [2])//点击后d变成2
                        }
                    }, []);
                    innerText(c, "今天有点冷，是吧？(点击继续)");//话
                    break;
                case 2:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [3])//点击后d变成3
                        }
                    }, []);
                    innerText(c, "僵尸似乎不太活跃了(点击继续)");//话
                    break;
                 case 3:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [4])//点击后d变成4
                        }
                    }, []);
                    innerText(c, "但是，种植物还是必须的。(点击继续)");//话
                    break;
                 case 4:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [5])//点击后d变成5
                        }
                    }, []);
                    innerText(c, "祝你好运(点击继续)");//话
                    break;
                   case 5:
                         $("dDave").src = "images/interface/Dave2.gif";//戴夫滚了
                    ClearChild($("DivTeach"));//对话消失
                    oSym.addTask(50, function() {
                        ClearChild($("dDave"));//清除戴夫
                        a(0);
                        StopMusic();//停止音乐
             
                        PlayMusic(oS.LoadMusic = "Look up at the Sky")//播放选卡音乐
                    }, [])
            }
        })(0)
    }},{AZ:[[oZombie,3,1],[oZombie2,2,1],[oZombie3,1,1],
[oZomboni,2,3,[5,7,9,10]],
[oJackinTheBoxZombie,3,1,[3,5,10]],
],FlagNum:10,FlagToSumNum:{a1:[3,5,7,9,10],a2:[3,5,6,10,25]},FlagToMonitor:{9:[ShowLargeWave,0],19:[ShowFinalWave,0]},FlagToEnd:function(){NewImg("imgSF","images/Card/interface/trophy.png","left:260px;top:233px;clip:rect(auto,auto,60px,auto)",EDAll,{onclick:function(){SelectModal(11)}});NewImg("PointerUD","images/interface/PointerDown.gif","top:198px;left:269px",EDAll)}});





