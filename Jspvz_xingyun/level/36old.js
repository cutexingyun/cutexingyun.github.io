oS.Init({
	PName: [oPeashooter, oSunFlower, oWallNut, oPotatoMine,oCherryBomb,oDoomShroom,oCoffeeBean,oSquash,oJalapeno],//植物：豌豆射手 向日葵 坚果   樱桃炸弹  毁灭菇, 咖啡豆, 倭瓜 火爆辣椒
	ZName: [oZombie, oConeheadZombie, oBucketheadZombie],//僵尸：普通僵尸 路障僵尸 铁桶僵尸
	PicArr: ["images/interface/background1.jpg"],//图片列表：白天草坪
	backgroundImage: "images/interface/background1.jpg",//背景白天草坪
	CanSelectCard: 1,//允许选择卡片
	LevelName: "僵尸朋友",//关卡的名字
	LvlEName: "TestFloorTesting",//关卡英文名
	C:9,//列数，一般不要改
	MaxSunNum:9990,//最多多少阳光
	Coord: 1,//地形模板，1草地，2泳池
	DKind: 1,//天气，0晚上1白天
	ProduceSun: false,//true是向日葵给阳光，false啃向日葵掉阳光
	SunNum: 50,//开局多少阳光
	LargeWaveFlag: {
        50: $("imgFlag1")//第50波有旗帜
	}
}, {
	AZ: [//出怪
		[oZombie, 3, 1],//普通僵尸在开局显示3个，第1波开始出
		[oConeheadZombie, 2, 4],//路障僵尸在开局显示2个，第4波开始出
		[oBucketheadZombie, 1, 6, [8]]//铁桶僵尸在开局显示1个，第6波开始出，第8波必出
	],
	FlagNum: 100,//一共几波
	FlagToSumNum: {//每波怪物数量
		a1: [3, 5, 8,50,75,99],//3波，5波，8波
		a2: [1, 2, 4, 9,66,50,100]//3波前：1个僵尸，3-4：2个僵尸，5-7：4个僵尸，8波后：9个僵尸
	},
	FlagToMonitor: {//监视器
		99: [ShowFinalWave, 0]//到达第99波，显示最后一波
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
