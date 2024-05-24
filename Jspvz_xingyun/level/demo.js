(function() {
	var f = oS.LvlVar, m = f.ImZombie, l = unescape(m.T), // å…³å¡æ•°æ®èŽ·å–
	q = m.C, o = m.ID, p = m.UN, a = m.hp, d = m.zp, h = m.cp, b = m.SNum, // å…³å¡ä¿¡æ¯èŽ·å–
	ZCard = m.ZCard || [oImp, oZombie, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie, oNewspaperZombie, oScreenDoorZombie, oFootballZombie, oDancingZombie, oBackupDancer, oBalloonZombie], // é¢„ç•™ï¼Œä¸ºä»¥åŽå…³å¡é™åˆ¶åƒµå°¸åšå‡†å¤‡
	j = { // æ¤ç‰©åˆ—è¡¨
		"default": oPeashooter, // æœªçŸ¥æ¤ç‰©ï¼Œé»˜è®¤è±Œè±†å°„æ‰‹
		"01": oPeashooter, // 01 ~ 40: æ™®é€šå¡
		"02": oSunFlower, 
		"03": oCherryBomb, 
		"04": oWallNut, 
		"05": oPotatoMine, 
		"06": oSnowPea, 
		"07": oChomper, 
		"08": oRepeater, 
		"09": oPuffShroom, 
		"10": oSunShroom, 
		"11": oFumeShroom, 
		"12": oGraveBuster, 
		"13": oHypnoShroom, 
		"14": oScaredyShroom, 
		"15": oIceShroom, 
		"16": oDoomShroom, 
		"17": oLilyPad, 
		"18": oSquash, 
		"19": oThreepeater, 
		"20": oTangleKelp, 
		"21": oJalapeno, 
		"22": oSpikeweed, 
		"23": oTorchwood, 
		"24": oTallNut, 
		"25": oSeaShroom, 
		"26": oPlantern, 
		"27": oCactus, 
		"28": oBlover, 
		"29": oSplitPea, 
		"30": oStarfruit, 
		"31": oPumpkinHead, 
		"34": oFlowerPot, 
		"36": oCoffeeBean, 
		"37": oGarlic, 
		"41": oGatlingPea, // 41 ~ 48: ç´«å¡
		"42": oTwinSunflower, 
		"43": oGloomShroom, 
		"47": oSpikerock, 
		"51": oBrains, // 50 ~ 70: å…¶ä»–æ¤ç‰©
		"52": oLawnCleaner, 
		"53": oPoolCleaner, 
		"54": oNutBowling, 
		"55": oHugeNutBowling, 
		"56": oBoomNutBowling, 
		"57": oRepeater2 
	},
	j2 = { // ç‰¹æ®Šæ¤ç‰©çš„å‰ç½®æ¤ç‰©ï¼Œä¿è¯ç´«å¡èƒ½åœ¨ç†æƒ³çŽ¯å¢ƒé¡ºåˆ©ç»§æ‰¿
		"oGloomShroom": oFumeShroom
	},
	g = [], e = [], n = [],
	s = 0, k = q.length, c = 0, w, r; // æ¤ç‰©æ•°æ®åŠ è½½

	while (s < k) { // do - while é‡ç©ºå€¼æ—¶ä¼šå‡ºé”™
		w = Number(q.substr(s, 1)), r = Number(q.substr(s + 1, 1)); // èŽ·å–è¡Œã€åˆ—
		r > c && (c = r); // çº¿çš„ä½ç½® - èŽ·å–æœ€å³è¾¹æ¤ç‰©çš„ä½ç½®
		e.push(w), n.push(r), g.push($SEql(q.substr(s + 2, 2), j)); // ä½ç½®ä¿¡æ¯æ’å…¥æ ˆ, æ¤ç‰©ä¿¡æ¯æ’å…¥æ ˆ
		s += 4;
	}

	var MonitorCard_Old = MonitorCard; // æå–åŽŸæœ‰å‡½æ•°è¿›è¡ŒåŒ…è£…


	oS.Init({ // åŠ è½½æ•°æ®
		PName: g, ZName: ZCard,
		PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
		backgroundImage: "images/interface/background2.jpg",
		SunNum: b,
		BrainsNum: 5,
		ProduceSun: false,
		CardKind: 1,
		DKind: 0,
		LevelName: "è§£è°œå¯¹æˆ˜ï¼š" + (l || "[æ— æ ‡é¢˜æ¸¸æˆ]"),
		LvlEName: "GetImZombieCreateGame",
		LoadMusic: "Mountains", StartGameMusic: "Mountains",
		CheatMode: false, // ä¸ºçŽ©å®¶æµ‹è¯•å…³å¡è€ŒåŠ å…¥çš„ç‰¹æ®Šæ¨¡å¼ï¼Œå¼€å¯åŽå¯ä»¥ä½¿ç”¨æ— é™é˜³å…‰ï¼Œå¹¶ä¸è®°å½•é€šå…³æˆç»©
		ArP: {
			ArC: [1, c],
			ArR: [1, 5]
		},
		RiddleAutoGrow: function() {
			var t = g.length, EName;
			while (t--) {
				EName = g[t].prototype.EName, j2[EName] && CustomSpecial(j2[EName], e[t], n[t], 1); // å‰ç½®æ¤ç‰©
				CustomSpecial(g[t], e[t], n[t], 1); // æ”¾ç½®æ¤ç‰©
			}

			t = oS.R + 1;
			while (--t) CustomSpecial(oBrains, t, 0); // æ”¾ç½®è„‘å­

			NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(c + 1)[0] - 11) + "px;top:65px", EDPZ); // æ”¾çº¿
		},
		LvlClearFunc: function() {
			oS.ScrollScreen = oS.LvlVar.ScrollScreen;
			delete oS.LvlVar.ScrollScreen
		},
		StartGame: function() {
			oP.Monitor(), BeginCool();
			SetVisible($("dFlagMeter"), $("dFlagMeterContent"));
		},
		LoadAccess: function(i) {
			oS.LvlVar.ScrollScreen = oS.ScrollScreen;
			$("tGround").style.left = "-115px";

			ClearChild($("JSPVZAjax")), NewEle("JSPVZAjax", "script", 0, {
				src: /*$User.Server.DataURL + */ "asp/GetImZombieCreateGameVNumAdd.asp?id=" + o,
				type: "text/javascript"
			}, document.body); // å¢žåŠ æ¸¸çŽ©æ•°

			window.frames.fRiddleAlreadyCreateGame.SearchLvl();

			SetStyle($("dTop"), { left: "105px", top: 0, visibility: "visible" });
			innerText(ESSunNum, oS.SunNum); // æ˜¾ç¤ºé˜³å…‰

			oS.ScrollScreen = function() { // é‡å†™ç§»åŠ¨
				$("tGround").style.left = 0, ClearChild($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4")); 
				(function() { (EDAll.scrollLeft += 25) < 500 ? oSym.addTask(2, arguments.callee, []) : SetVisible($("dMenu"), $("dSelectCard"), $("dCardList")); })();
			}; 

			(function() { // æŠ•ç¥¨
				NewEle("dPJ", "div", "position:absolute;left:230px;top:0;width:460px;height:50px;z-index:19", {
					innerHTML: '<button class="jhp" style="width:140px;height:50px"><span>' + a + '</span><BR>ç°å¸¸å¥½,å€¼å¾—ä¸€çŽ©</button><button class="jhp" style="width:140px;height:50px;margin-left:10px"><span>' + d + '</span><BR>è¿˜å¯ä»¥,ä¸­è§„ä¸­çŸ©</button><button class="jhp" style="width:140px;height:50px;margin-left:10px"><span>' + h + "</span><BR>æ— èŠæ­»,ç»™æˆ‘æ¶ˆå¤±</button>"
				}, EDAll);

				var t = function(w) { // æŠ•ç¥¨å‡½æ•°
					if ($User.Visitor.UserName == "æ¸¸å®¢") return alert("æ³¨å†Œç”¨æˆ·æ–¹å¯æŠ•ç¥¨");
					
					ClearChild($("JSPVZAjax")), NewEle("JSPVZAjax", "script", 0, { // æŠ•ç¥¨è¯·æ±‚
						src: /* $User.Server.DataURL + */ "asp/ImZombieCreateGameVote.asp?id=" + o + "&Vote=" + w,
						type: "text/javascript"
					}, document.body);

					var y = $("dPJ"), z = y.childNodes, x = z.length, A;
					while (x--) A = z[x], A.disabled = "disabled", A.style.color = "#e0e0e0"; // æŠ•ç¥¨æ¡†å˜ç°
				}, u = $("dPJ").childNodes; // ä¸‰ä¸ªæŠ•ç¥¨æ 

				u[0].onclick = function() { t(0); };
				u[1].onclick = function() { t(1); };
				u[2].onclick = function() { t(2); }; // æŠ•ç¥¨æŒ‰é’®äº‹ä»¶
			})();

			// å¼€å§‹æ¸¸æˆç­‰æŒ‰é’®
			NewEle("dButton1", "button", "position:absolute;left:650px;top:510px;width:100px;height:35px;z-index:255", {
				innerHTML: "å¼€å§‹æŒ‘æˆ˜",
				onclick: function() { i(0); }
			}, EDAll); // å¼€å§‹
			NewEle("dButton2", "button", "position:absolute;left:760px;top:510px;width:100px;height:35px;z-index:255", {
				innerHTML: "ä¸çŽ©è¿™ä¸ª",
				onclick: function() {
					SelectModal(0), HiddenOptions();
					SetBlock($("dSurface"), $("iSurfaceBackground")); ShowRiddleGame();
				}
			}, EDAll); // æ‹’ç»æ¸¸çŽ©

			($User.Visitor.UserName == p || $User.Visitor.UserAuthority == 255) && NewEle("dButton3", "button", "position:absolute;left:650px;top:450px;width:100px;height:35px;z-index:255;color:red;font-weight:bold", {
				innerHTML: "åˆ é™¤æœ¬å…³",
				onclick: function() {
					if (confirm("ä½ ç¡®å®šè¦åˆ é™¤è¿™ä¸ªå…³å¡ï¼Ÿä¸€æ—¦åˆ é™¤æ— æ³•æ¢å¤ï¼")) {
						var t, ele = $("dButton3");
						if ((t = prompt("è¾“å…¥åˆ é™¤çš„ç†ç”±\næœªè¾“å…¥åˆ™é»˜è®¤ä¸ºç©º", "")) != null) {
							ele.innerHTML = "æ­£åœ¨åˆ é™¤", ele.disabled = "disabled", ele.style.color = "gray"; // cssæ”¹å˜
							ClearChild($("JSPVZAjax")), NewEle("JSPVZAjax", "script", 0, { // å‘é€è¯·æ±‚
								src: /* $User.Server.DataURL + */ "asp/ImZombieCreateGameDel.asp?R=" + escape(t) + "&GID=" + o,
								type: "text/javascript"
							}, document.body)
						}
					}
				}
			}, EDAll); // å¦‚æžœæœ‰æƒåˆ é™¤æœ¬å…³ï¼Œåˆ™æ˜¾ç¤ºåˆ é™¤æŒ‰é’®

			// æµ‹è¯•æ¨¡å¼ç­‰æŒ‰é’®
			NewEle("dButton4", "button", "position:absolute;left:760px;top:450px;width:100px;height:35px;z-index:255;color:blue;font-weight:bold", {
				innerHTML: "æµ‹è¯•æœ¬å…³",
				onclick: function() {
					if (confirm("ä½ ç¡®å®šè¦å¼€å¯æµ‹è¯•æ¨¡å¼å—ï¼Ÿ\nå¼€å¯åŽå°†å¼€å¯æ— é™é˜³å…‰ç­‰æƒé™ï¼Œä¸”å°†ä¸å¯åœ¨æ¸¸æˆä¸­é€”å…³é—­ã€‚\næµ‹è¯•æ¨¡å¼çŠ¶æ€ä¸‹é€šå…³å°†ä¸è®°å½•é€šå…³æ•°ï¼Œè¯·è°¨æ…Žé€‰æ‹©ï¼")) {
						oS.CheatMode = true, oS.SunNum = Infinity, innerText(ESSunNum, oS.SunNum), ClearChild($("dButton4")); 
					}
				}
			}, EDAll); // æ‹’ç»æ¸¸çŽ©


			oS.RiddleAutoGrow(); // æ”¾ç½®æ¤ç‰©

		}
	},
	{
		FlagToEnd: function() {
			var i = $User;
			i.isAuthorWebsite && !oS.CheatMode && (ClearChild($("JSPVZAjax")), NewEle("JSPVZAjax", "script", 0, {
				src: /*$User.Server.DataURL + */ "asp/GetImZombieCreateGameFNumAdd.asp?id=" + o + "&N=" + ArPCard.SelNum + "&S=" + oS.SunNum + "&T=" + (oSym.Now - oS.StartTime),
				type: "text/javascript"
			}, document.body));

			NewImg("imgSF", "images/interface/trophy.png", "left:417px;top:233px;z-index:255", EDAll, {
				onclick: function() {
					window.frames.fRiddleAlreadyCreateGame.SearchLvl(), SelectModal(0);
					HiddenOptions(), SetBlock($("dSurface"), $("iSurfaceBackground"));
					ShowNameDiv(); PlayAudio("winmusic");
				}
			});
		}
	},
	{
		AutoSelectCard: function() {
			var v = oS.ArCard, u = -1, t = v.length - 1;
			while (++u < t) SelectCard(v[u].prototype.EName);
		}, 
		MonitorCard: function(b) {
			if (oS.CheatMode) oS.SunNum = Infinity, innerText(ESSunNum, oS.SunNum); // å¦‚æžœæ˜¯ä½œå¼Šæ¨¡å¼ï¼Œåˆ™ä¿®æ”¹é˜³å…‰
			MonitorCard_Old(b);
		}
	})
})();