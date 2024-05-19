// 初始化游戏设置
oS.Init({
    PName: [oSunFlower,oSplitPea,oMagnetShroom, oSquash,oSnowPea,oKernelPult,oWinterMelon,oFumeShroom,oGarlic], // 植物名称数组
    ZName: [oZombie, oDiggerZombie,oPoleVaultingZombie,oBucketheadZombie], // 僵尸名称数组
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"], // 图片数组
    backgroundImage: "images/interface/background2.jpg", // 背景图片
    ShowScroll: false, // 是否显示滚动条
    SunNum: 600, // 初始阳光数量
    BrainsNum: 5, // 初始大脑数量
    ProduceSun: false, // 是否产生阳光
    CardKind: 1, // 卡片种类
    DKind: 0, // D种类
    LevelName:'卡矿工', // 关卡名称
    LvlEName: "ImZombie", // 关卡E名称
    LoadMusic: "Mountains", // 加载音乐
    StartGameMusic: "Mountains", // 开始游戏音乐
    ArP: { // ArP对象
        ArC: [1, 7], // ArC数组
        ArR: [1, 5], // ArR数组
        Auto: 1, // 是否自动
        P: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8] // P数组
    },
    // 自动增长谜题
    RiddleAutoGrow: function() {
        var k = oS.ArP, // 获取ArP对象
            f = k.ArC, // 获取ArC数组
            j = k.ArR, // 获取ArR数组
            e = k.P, // 获取P数组
            d = oS.PName, // 获取PName数组
            c, g = f[0], // 获取ArC数组的第一个元素
            b = f[1], // 获取ArC数组的第二个元素
            i = j[0], // 获取ArR数组的第一个元素
            h = j[1], // 获取ArR数组的第二个元素
            a;
        if (k.Auto) { // 如果自动增长
            while (i <= h) { // 当i <= h时循环
                CustomSpecial(oBrains, i, 0); // 自定义特殊处理
                for (a = g; a <= b; a++) { // 遍历ArC数组
                    CustomSpecial(d[e[c = Math.floor(Math.random() * e.length)]], i, a, 1); // 自定义特殊处理
                    e.splice(c, 1) // 移除数组元素
                }++i // i递增
            }
        }
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(8)[0] - 11) + "px;top:65px", EDAll) // 创建新图片
    },
    // 开始游戏
    StartGame: function() {
        oP.Monitor(); // 监视oP
        BeginCool(); // 开始冷却
        SetVisible($("dFlagMeter"), $("dTop")); // 设置可见性
        oS.RiddleAutoGrow(), oP.FlagToEnd = function() { // 调用RiddleAutoGrow方法和设置FlagToEnd函数
            NewImg("imgSF", "images/interface/trophy.png", "left:43.5%;top:220px", EDAll, { // 创建新图片
                onclick: function() {
                    SelectModal(0); // 选择模态框
                    PlayAudio("winmusic") // 播放音频
                }
            });
            NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:51%", EDAll) // 创建新图片
        }
    }
}, 0, {});