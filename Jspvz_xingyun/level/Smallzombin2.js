oS.Init({
	PName: [oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper,oSplitPea,oJalapeno,oSpikeweed,oRepeater,oTallNut,oPumpkinHead,oSquash,oFlowerPot,oTorchwood,oThreepeater,oGatlingPea,oTwinSunflower,oSpikerock,oFumeShroom,oCoffeeBean,oGloomShroom,oSunShroom,oPuffShroom,oScaredyShroom,oGarlic,oGraveBuster,oStarfruit,oLilyPad,oHypnoShroom,oIceShroom,oDoomShroom,oTangleKelp,oSeaShroom,oPlantern,oCactus,oBlover],
	ZName: [oSmallZombie,oSmallConeheadZombie,oSmallFootballZombie],
	PicArr: ["images/interface/background1.jpg"],//图片列表：白天草坪
	backgroundImage: "images/interface/background2.jpg",//背景黑夜草坪
	CanSelectCard: 1,//允许选择卡片
	LevelName: "小僵尸突袭（蘑菇加班）",//关卡的名字
	LvlEName: "TestFloorTesting",//关卡英文名
	C:9,//列数，一般不要改
	MaxSunNum:9990,//最多多少阳光
	Coord: 1,//地形模板，1草地，2泳池
	DKind: 0,//天气，0晚上1白天
	ProduceSun: false,//true是向日葵给阳光，false啃向日葵掉阳光
	SunNum: 300,//开局多少阳光
	LargeWaveFlag: {
        50: $("imgFlag1")//第50波有旗帜
	}
}, {
	AZ: [//出怪
		[oSmallZombie, 3, 1],//普通僵尸在开局显示3个，第1波开始出
		[oSmallConeheadZombie,3,2],
        [oSmallFootballZombie,10,10],
	],
	FlagNum: 20,//一共几波
	FlagToSumNum: {//每波怪物数量
		a1: [3, 5, 8,15],//3波，5波，8波
		a2: [1, 20, 25, 9,500]//3波前：1个僵尸，3-4：2个僵尸，5-7：4个僵尸，8波后：9个僵尸
	},
	FlagToMonitor: {//监视器
		19: [ShowFinalWave, 0]//到达第19波，显示最后一波
	},
	FlagToEnd: function() {//你赢了
  	  	NewImg("imgSF", "images/interface/Trophy.png", "left:727px;top:325px;clip:rect(auto,auto,auto,auto)", EDAll, {
       			onclick: function() {//创建奖杯
            				SelectModal(0)//返回主界面
        			}
  	  	});
    	NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:736px", EDAll)//箭头
	}
});
