oS.Init({PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom,oSunShroom,oFumeShroom,oGraveBuster,oHypnoShroom,oScaredyShroom,oIceShroom,oDoomShroom,oLilyPad,oSquash,oThreepeater,oTangleKelp,oJalapeno,oSpikeweed,oTorchwood,oTallNut,oSeaShroom,oPlantern,oCactus,oBlover,oSplitPea,oStarfruit,oPumpkinHead,oFlowerPot,oCoffeeBean,oGarlic,oGatlingPea,oGloomShroom,oTwinSunflower,oSpikerock],ZName:[oZombie,oZombie2,oZombie3,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oConeheadZombie,oSnorkelZombie,oNewspaperZombie,oFootballZombie,oDancingZombie,oBackupDancer,oPoleVaultingZombie,oScreenDoorZombie,oDolphinRiderZombie,oImp,oZomboni,oJackinTheBoxZombie,oBalloonZombie],PicArr:function(){var a=oTangleKelp.prototype,b=a;return["images/interface/background1.jpg",b[a.CardGif],b[a.NormalGif]]}(),Coord:1,DKind:0,SunNum:2500,LF:[0,2,-1,1,2,1],ZF:[0,1,1,1,2,2],backgroundImage:"images/interface/background1.jpg",Coord:1,CanSelectCard:1,LevelName:"rtty的复仇",LvlEName:23,LargeWaveFlag:{10:$("imgFlag3"),20:$("imgFlag1")},UserDefinedFlagFunc:function(a){oP.FlagNum==oP.FlagZombies&&oP.SetTimeoutWaterZombie(6,9,3,[oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3])},StartGameMusic:"Kitanai Sekai",LoadAccess: function(a) {//函数
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);//戴夫出现
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
                    innerText(c, "你感受到了异常，对吧？(点击继续)");//话
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
                    innerText(c, "没错，他来了！(点击继续)");//话
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
                    innerText(c, "对！不是埃德加博士，是比他更加恐怖的存在。(点击继续)");//话
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
                    innerText(c, "你猜对了，就是rtty来了！！！(点击继续)");//话
                    break;
                  case 5:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [6])//点击后d变成6
                        }
                    }, []);
                    innerText(c, "这将是一场恐怖的战斗，你是唯一的希望，只有你能抵抗他指挥的僵尸大军。(点击继续)");//话
                    break;
                 case 6:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [7])//点击后d变成7
                        }
                    }, []);
                    innerText(c, "我相信你能打败rtty的，祝你好运。(点击继续)");//话
                    break;
                  case 7:
                    PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                    c.onclick = null;
                    $("dDave").src = "images/interface/Dave3.gif";
                    oSym.addTask(200, function() {//等
                        $("dDave").src = "images/interface/Dave.gif";//戴夫不叭叭了
                        c.onclick = function() {
                            oSym.addTask(10, b, [8])//点击后d变成8
                        }
                    }, []);
                    innerText(c, "对了。记得带花盆与荷叶(点击继续)");//话
                    break;
                   case 8:
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
    }},{AZ:[[oZombie,3,1],[oZombie2,2,1],[oZombie3,1,1],[oDuckyTubeZombie1,1,4,[6,7,8,10,19,20]],[oDuckyTubeZombie2,1,6,[10,20]],[oDuckyTubeZombie3,1,6,[10,20]],[oConeheadZombie,1,1],[oSnorkelZombie,1,6,[19,20]],
[oNewspaperZombie,2,3,[3,5,6]],
[oFootballZombie,2,9,[6,10,16]],
[oDancingZombie,1,7,[8,12,16]],
[oPoleVaultingZombie,3,3,[4,7,9]],
[oScreenDoorZombie,2,5,[5,6,8]],
[oDolphinRiderZombie,2,5,[5,9,11,15,17]],
[oImp,3,1,[2,5]],
[oZomboni,2,10,[10,13,15,16]],
[oJackinTheBoxZombie,3,6,[6,10,15]],
[oBalloonZombie,2,7,[7,8,10,13,15]]
],FlagNum:20,FlagToSumNum:{a1:[3,5,9,10,13,15,19],a2:[30,24,10,10,34,25,30,50]},FlagToMonitor:{9:[ShowLargeWave,0],19:[ShowFinalWave,0]},FlagToEnd:function(){NewImg("imgSF","images/Card/interface/trophy.png","left:260px;top:233px;clip:rect(auto,auto,60px,auto)",EDAll,{onclick:function(){SelectModal(24)}});NewImg("PointerUD","images/interface/PointerDown.gif","top:198px;left:269px",EDAll)}});