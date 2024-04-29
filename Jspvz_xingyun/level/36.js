oS.Init({
		PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oRepeater,oPuffShroom,oSunShroom,oFumeShroom,oGraveBuster,oHypnoShroom,oScaredyShroom,oIceShroom,oDoomShroom,oLilyPad,oSquash,oThreepeater,oTangleKlep,oJalapeno,oSpikeweed,oTorchwood,oTallNut,oSeaShroom,oPlantern,oCactus,oBlover, oSplitPea],
ZName:[oZombie,oZombie2,oZombie3,oDuckyTubeZombie1,oDuckyTubeZombie2,oConeheadZombie,oDiggerZombie],
		PicArr:function(){
			var Pro=oStarfruit.prototype,PicArr=Pro.PicArr,
			s='images/interface/fog',pg=$User.Browser.IE&&!$User.Browser.IE9?'gif':'png';
			return ['images/interface/background4.jpg',PicArr[Pro.CardGif],PicArr[Pro.NormalGif],
				s+'0.'+pg,s+'1.'+pg,s+'2.'+pg,s+'3.'+pg]
		}(),
		Coord:2,
		SunNum:50,
		LF:[0,1,1,2,2,1,1],
		backgroundImage:'images/interface/background4.jpg',
		CanSelectCard:1,
		DKind:0,
		HaveFog:4, //有4排雾
		LevelName:'关卡 4-6',
		LvlEName:36,
		LargeWaveFlag:{10:$('imgFlag1')},
		UserDefinedFlagFunc:function($T){
			oP.FlagNum==oP.FlagZombies&&oP.SetTimeoutWaterZombie(6,9,3,[oDuckyTubeZombie1,oDuckyTubeZombie2])
		},
		StartGameMusic:'Loonboon'
	},{
		AZ:[[oZombie,4,1],[oZombie2,1,1],[oZombie3,1,1],[oDuckyTubeZombie1,1,4],[oDuckyTubeZombie2,1,4],[oConeheadZombie,2,4],[oDiggerZombie,1,7,[7,10]]],
		FlagNum:10,
		FlagToSumNum:{a1:[3,5,9],a2:[1,2,3,10]},
		FlagToMonitor:{9:[ShowFinalWave,0]},
		FlagToEnd: function() {
		NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
        NewImg("imgSF", "images/Card/Plants/Starfruit.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oStarfruit, 37);
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)}
});