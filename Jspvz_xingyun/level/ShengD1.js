oS.Init({
    PName: ShengPlantList,
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oNewspaperZombie, oPoleVaultingZombie, oDancingZombie ,oBackupDancer ,oBucketheadZombie ,oFootballZombie ,oScreenDoorZombie],
	PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    LF: [0, 1, 1, 1, 1, 1],
    ZF: [0, 1, 1, 1, 1, 1],
    LevelName: "生存模式困难：白天",
    survival_times: 0,
    LvlEName: "PovertyOfTheSoil",
    StartGameMusic: "UraniwaNi",
    LargeWaveFlag: {
        10: $("imgFlag3"),
        20: $("imgFlag1")
    }
}, {
    AZ: [[oZombie, 3, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 1, 4]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   4, 7, 9, 10, 11, 14, 15, 18, 20],
        a2: [1, 2, 3, 7, 10, 2, 4, 6, 14, 20]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowLargeWave, 0]
    },
    FlagToEnd: function() {
	    GotoNextWave(++oS.survival_times);//进入下一阶段 / 过关
    }
}, {
	LetsGO : function() {
	    tGround.style.left = "-115px";//背景调整
	    for(item in oP.FlagToMonitor){
	        oP.FlagToMonitor[item][1] = 0;
	    };//一大波僵尸标题归位
	    for(item in oS.LargeWaveFlag){
	        oS.LargeWaveFlag[item].style.top = "";
	    };//旗帜归位

	    var e = $("dCardList"),g = 0,k = e.childNodes.length,f,h,l,c,j,a,b = document.body;
	    var zombietime = (oS.survival_times ? 500 : 1500);
	    SetStyle($("dTop"), {left: "105px",top: 0});
	    e.style.left = 0,SetVisible(e),ArCard = [];
	    ! oS.BrainsNum && oGd.$['4_-2_1'] == undefined && CustomSpecial(oBrains, oS.R - 1, -2);
	    while (g < k) { 
	    	(function(d) {
	            f = (j = e.childNodes[d]).id.substr(5);
	            l = (h = ArPCard[f].PName).prototype;
	            j.onclick = function(i) {ChosePlant(i, d)};
	            j.onmouseover = function() {SetVisible($("dTitle"));ViewPlantTitle(oS.MCID = d);};
	            j.onmouseout = function() {SetHidden($("dTitle"))};
	            j.firstChild.style.top = "-60px"; (a = j.lastChild).id = "sSunNum" + d;
	            innerText(a, l.SunNum);
	            ArCard.push({DID: j.id,CDReady: 0,SunReady: 0,PName: h});
	        })(g++)
	    }
	    b.onkeydown = function(d) {GroundOnkeydown(d)};
	    b.onmousedown = function(d) {GroundOnmousedown(d)};
	    b.onmousemove = function(d) {GroundOnmousemove(d)};
	    SetVisible(e); 
	    (function() {
	        AllAudioStop();
	        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
	        SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
	        !oS.survival_times && oS.InitLawnMower();
	        PrepareGrowPlants(function() {
	            reload_last_view();//还原上次场地与times
	            oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);//出旗，鼓号队奏乐
	            LoadNowCardCoolTime();//此函数内代码顺序千万别变，任意调换顺序会导致出怪时间异常
	            oS.DKind && AutoProduceSun(25);//掉落阳光
	            oSym.addTask(zombietime,function() {
	                oP.AddZombiesFlag();
	                SetVisible($("dFlagMeterContent"));
	            },[])
	        })
	    })();
	    oS.StartTime = oSym.Now;
	},
	reload_last_view : function(){
	    oSym.Now = oS.lastwavenow || oSym.Now;
	    for(i in oS.lastwaveTQ){
	        oSym.TQ.push(oS.lastwaveTQ[i]);
	    }
	},
	PauseGames : function() {
	    oSym.Timer && (AllAudioStop(), oSym.Stop());
	},
	RePauseGames : function(){
	    !oSym.Timer && (oSym.Start())
	},
	FindClearoSymTQ : function(str){
	    let zombieaudio = [];
	    for(item in oSym.TQ){
	        if(oSym.TQ[item].f.toString().indexOf(str) != -1){
	            zombieaudio.push(item);
	        }
	    }
	    while(zombieaudio.length){
	        oSym.removeTask(zombieaudio[zombieaudio.length-1]);
	        zombieaudio.length--;
	    }	
	},
	FindClearoSymAr : function(str){
	    let zombieaudio = [];
	    for(item in oSym.TQ){
	        if(oSym.TQ[item].ar.toString().indexOf(str) != -1){
	            zombieaudio.push(item);
	        }
	    }
	    while(zombieaudio.length){
	        oSym.removeTask(zombieaudio[zombieaudio.length-1]);
	        zombieaudio.length--;
	    }	
	},
	SaveNowCardCoolTime : function(){
	    for(i in ArCard){
	        PENames = ArCard[i].PName.prototype.EName;
	        oS.CardCool[PENames] = ($("dCD1"+i) && $("dCD1"+i).innerText) || 0;
	    }
	},
	LoadNowCardCoolTime : function(){
	    for(i in ArCard){
	    	ArCard[i].CDReady = 0,PENames = ArCard[i].PName.prototype.EName,cooltime = oS.CardCool[PENames],$("dCard" + PENames).firstChild.style.top = "-60px";
	        cooltime == undefined && (cooltime = (ArCard[i].PName.prototype.coolTime <= 7.5 ? 0 : ArCard[i].PName.prototype.coolTime - 7.5));
	        DoCoolTimer(i,cooltime);
	    }	
	},
	GotoNextWave : function(survival_times){
		if(survival_times >= 5){//如果超过第五波，结束关卡
	        NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, {
	            onclick: function() {
	                SelectModal(0);
	                PlayAudio("winmusic");
	            }
	        });//奖杯
	        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll);
			return;//退出函数
		}
		(function(){
	        $('dFlagMeterTitleB').innerText = `生存模式困难：白天 - ${survival_times}轮完成`;
	        $('sFlagMeterTitleF').innerText = `生存模式困难：白天 - ${survival_times}轮完成`;
	        FindClearoSymTQ(`innerText($("dCD1"`);
        	CancelPlant();//防止场外种植
        	CancelShovel();//铲子
	        ArCard.forEach((item)=>{item.CDReady=0});//禁止快捷键选卡
        })();//显示波数
		PlayAudio("hugewave");//声音
		NewEle("DivTeach", "div", 0, {innerHTML: "更多的僵尸要来了！"}, EDAll);//文字
    	setTimeout(function(){
    		ResetGame($("dMenu0"), 1);
    		AllAudioPauseCanceled();
    		SetNextWaveZombies(survival_times + 1);//策划下一波的僵尸
	        SaveNowCardCoolTime();//保存卡槽冷却时间
    		FindClearoSymTQ('PlayAudio(["groan1"');//删除僵尸叫声的任务
    		FindClearoSymTQ('AppearSun(GetX(Math.floor(1');//删除自动掉阳光的任务
    		FindClearoSymTQ('oZ.traversalOf();');//删除僵尸走动的任务
			FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
    		setTimeout(GotoNextStartGame,5000);//过现实5秒后进行下一部分
    	},1);
	},
	GotoNextStartGame : function(h){
		FindClearoSymTQ(`innerText($("dCD1"`);//清除冷却计划
	    FindClearoSymTQ('PlayAudio(["groan1"');
	    FindClearoSymTQ('AppearSun(GetX(Math.floor(1');
	    FindClearoSymTQ('oZ.traversalOf();');
		oS.lastwavenow = oSym.Now , oS.lastwaveTQ = oSym.TQ , oSym.TQ = [];//保存TQ、清除TQ
		ClearChild($("DivTeach"));//清除一波结束的html文字
		for(item in ArSun){
	        try{
	            $(item).style.visibility = "hidden";
	        }catch(why){
	        	console.error('阳光'+item+'无法隐藏，原因：\n'+why);
	        };
	    };//隐藏在场阳光，防止二次收集
	    var flaghtml=$('dFlagMeterContent').childNodes;
	    dFlagMeterContent.style.visibility = "hidden";
	    $("imgFlagHead").style.left = "139px";
	    $("imgFlagMeterFull").style.clip = "rect(0,auto,auto,157px)";
	    for(item in flaghtml){
	        if(flaghtml[item].style){
	            flaghtml[item].style.visibility = "";
	        }
	    };//旗帜部分隐藏，关卡进程归位
		var a = tGround.style,i = oS,g = $User.Visitor;
		oS.MCID = 0,a.left = "0px",oP.FlagZombies = 0,ArPCard.SelNum = 0;//僵尸波数、选卡数量归位
	    StopMusic(),PlayMusic("Look up at the Sky");//播放选卡音乐

		InitPCard();//重新初始化选卡界面
	    oSym.addTask(h == undefined ? 200 : h,
		    function(j) {
		        dCardList.style.left = "";//选卡css复位
		        dCardList.innerHTML = "";//选卡清除
		        ClearChild($('DivA'));//清除板子
		        SetVisible($('dZombie'));//显示僵尸预览
		        ClearChild(j);
		        i.ScrollScreen();
		    },[
		    NewEle("DivTeach", "div", "line-height:50px", {
	        	innerHTML: (Math.floor(g.UserAuthority) == "255" ? '<span style="color:#0F0;font-weight:bold">&lt;' + g.UserName + "&gt;</span>": "&lt;" + g.UserName + "&gt;") + "的房子"
	    	},EDAll)
	    ]); //i.ShowScroll已被删除，防止报错
	},
	SetNextWaveZombies : function(survival_times) {
		let AZ = [],FlagToSumNum = {};
		switch(survival_times){
			case 2:
				CanZombie = [oConeheadZombie,oPoleVaultingZombie,oDancingZombie],ChooseZombie = CanZombie[Math.floor(Math.random()*CanZombie.length)];
				AZ = [[oZombie, 2, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 2, 1], [oNewspaperZombie, 1, 2], [ChooseZombie, 1, 5, [5,7,10]]];
				FlagToSumNum = {
			        a1: [   4, 6, 9, 10, 11, 14, 15, 18, 20],
			        a2: [5, 6, 7, 8, 20, 10, 12, 14, 16, 40]
			    };
				break;
			case 3:
				CanZombie = [oBucketheadZombie,oConeheadZombie],ChooseZombie = CanZombie[Math.floor(Math.random()*CanZombie.length)];
				CanZombie2 = [oFootballZombie,oScreenDoorZombie],ChooseZombie2 = CanZombie2[Math.floor(Math.random()*CanZombie2.length)];
				AZ = [[oZombie, 2, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [ChooseZombie, 2, 1, [1,5,10]], [oNewspaperZombie, 1, 2, [2,10]], [ChooseZombie2, 1, 8, [8,9,10]], [oDancingZombie, 1, 9, [9,10]]];
				FlagToSumNum = {
			        a1: [   2, 4,  7,  9, 10, 11, 14, 15, 18, 20],
			        a2: [7, 8, 9, 10, 11, 25, 14, 16, 18, 20, 50]
			    };
				break;
			case 4:
				CanZombie = [oBucketheadZombie,oConeheadZombie,oNewspaperZombie],ChooseZombie = CanZombie[Math.floor(Math.random()*CanZombie.length)];
				AZ = [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oPoleVaultingZombie, 1, 2, [8,9,10]], [ChooseZombie, 1, 1], [oFootballZombie, 1, 5 ,[5,9,10]], [oDancingZombie, 1, 5, [8,10]], [oScreenDoorZombie, 1, 5, [6,10]]];
				FlagToSumNum = {
			        a1: [     2,  5,  6,  8, 10, 11, 14, 15, 18, 20],
			        a2: [12, 13, 14, 15, 17, 35, 26, 28, 30, 34, 70],
			    };
				break;
			case 5:
				AZ = [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oPoleVaultingZombie, 1, 1, [10,10,10]], [oBucketheadZombie, 1, 1, [2,2,3,3,10,10,10]], [oConeheadZombie, 1, 1, [1,1,1,1,1,1,1,1,2,2,3,3,3,3,3,10,10,10]] ,[oNewspaperZombie, 1, 1, [2,2,3,3,3,10,10,10]], [oFootballZombie, 1, 1, [5,6,9,10,10,10]], [oDancingZombie, 1, 1, [10,10,10]], [oScreenDoorZombie, 1, 1, [10,10,10]]];
				FlagToSumNum = {
			        a1: [     2,  3,  4,  6,  7,  8,  9, 10, 11, 14, 15, 18, 20],
			        a2: [17, 20, 24, 25, 30, 35, 46, 55, 65, 34, 42, 46, 48, 106],
			    };
				break;
			default:
				break;
		}
		oP.Init({
		    AZ: AZ,
		    FlagToSumNum: FlagToSumNum,
		    FlagToEnd: oP.FlagToEnd,
		    FlagNum: 20,
		});
	}

});

