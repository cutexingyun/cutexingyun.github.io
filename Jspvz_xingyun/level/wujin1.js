oS.Init({
    PName: ShengPlantList,
    ZName: [oBackupDancer, oZombie, oZombie2, oZombie3, oPoleVaultingZombie, oConeheadZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie, oZomboni, oJackinTheBoxZombie, oBalloonZombie, oDiggerZombie],
	PicArr: ["images/interface/background1.jpg"],
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1,
    SunNum: 50,
    CardCool: [],
    lastwavenow: 0,
    lastwaveTQ: [],
    LF: [0, 1, 1, 1, 1, 1],
    ZF: [0, 1, 1, 1, 1, 1],
    LevelName: "生存模式：白天（无限）",
    survival_times: 0,
    LvlEName: "survival_day",
    StartGameMusic: "UraniwaNi",
    LargeWaveFlag: {
        20: $("imgFlag1"),
        10: $("imgFlag3")
    },
    UserDefinedFlagFunc: function(a) {
    	if(oP.FlagZombies == 11){
    		oS.survival_times++;
			$('dFlagMeterTitleB').innerText = `生存模式：白天（无限） - ${oS.survival_times}面旗帜完成`;
	        $('sFlagMeterTitleF').innerText = `生存模式：白天（无限） - ${oS.survival_times}面旗帜完成`;
    	};
    }
}, {
    AZ: [[oZombie, 2, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 2, 4], [oBucketheadZombie, 1, 7]],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [   3, 6,  9, 10, 12, 14, 17, 19],
        a2: [1, 2, 3, 10,  4,  5,  6,  7, 15]
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
	    ! oS.BrainsNum && ! oS.survival_times && CustomSpecial(oBrains, oS.R - 1, -2);
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
GrowPlant: function (l, d, c, e, b) { // 推荐换成如下种植函数，可以适配未重写关的 GrowPlant，还支持流星雨卡槽
	var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
	k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (innerText(ESSunNum, oS.SunNum -= k.SunNum),(new h).Birth(d, c, e, b, l)) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
		EDPZ.appendChild(n), m.Birth();
	}, a), o ? (delete ArCard[j], ClearChild($(j))) : (i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
		left: d - 30 + "px",
		top: c - 30 + "px",
		zIndex: 3 * e + 1,
		visibility: "visible"
	})]));
	CancelPlant()
},
    GotoNextWave : function(survival_times){
        (function(){
            $('dFlagMeterTitleB').innerText = `生存模式：白天（无限） - ${survival_times}面旗帜完成`;
            $('sFlagMeterTitleF').innerText = `生存模式：白天（无限） - ${survival_times}面旗帜完成`;
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
        switch(survival_times){case 3:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,2,1],[oConeheadZombie,2,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[10,11,12,13,25,13,14,15,17,30]};break;case 5:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,2,4],[oDancingZombie,1,6],[oBalloonZombie,1,10]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[18,20,22,23,35,23,25,26,28,40]};break;case 7:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oFootballZombie,1,6],[oPoleVaultingZombie,1,6],[oBalloonZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[30,32,33,34,55,36,37,38,39,60]};break;case 9:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oFootballZombie,1,4],[oZomboni,1,6],[oJackinTheBoxZombie,1,11]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[39,40,41,43,65,45,46,47,49,70]};break;case 11:AZ=[[oZombie,2,1],[oZombie2,2,1],[oZombie3,1,1],[oBucketheadZombie,1,2],[oScreenDoorZombie,1,3],[oJackinTheBoxZombie,1,2]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[50,51,52,53,70,55,56,57,59,75]};break;case 13:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[60,61,62,63,80,65,66,67,69,85]};break;case 15:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[70,71,72,73,90,75,76,77,79,95]};break;case 17:AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[3,6,8,9,10,13,15,18,19],a2:[80,83,85,89,100,90,93,95,97,110]};break;default:rn=Math.floor(Math.random()*100);if(rn<=3){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[80,100,110,90,100,120]};}else if(rn<=4){AZ=[[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[150,160,190,150,160,190]};}else if(rn<=5){choseZombie=oS.ZName[Math.floor(Math.random()*(oS.ZName.length-1)+1)],lvl=choseZombie.prototype.Lvl;AZ=[[choseZombie,5,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[lvl*35,lvl*45,lvl*50,lvl*35,lvl*45,lvl*50]};}else if(rn<=20){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else if(rn<=30){AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,2,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}else{AZ=[[oZombie,1,1],[oZombie2,0,1],[oZombie3,0,1],[oPoleVaultingZombie,1,1],[oConeheadZombie,1,1],[oBucketheadZombie,1,1],[oNewspaperZombie,1,1],[oScreenDoorZombie,1,1],[oFootballZombie,1,1],[oDancingZombie,1,1],[oZomboni,1,1],[oJackinTheBoxZombie,1,1],[oBalloonZombie,1,1]];FlagToSumNum={a1:[4,9,10,14,19],a2:[120,130,160,120,130,170]};}break;};
        oP.Init({
            AZ: AZ,
            FlagToSumNum: FlagToSumNum,
            FlagToEnd: oP.FlagToEnd,
            FlagNum: 20,
        });
    },
})