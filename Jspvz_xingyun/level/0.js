// 初始化游戏设置
oS.Init({
    // 定义游戏所需图片数组
    PicArr: function() {
        var b = $User.Browser.IE6 ? 8 : 32,
            a = "images/interface/";
        return [ShadowPNG, a + "Sun.gif", a + "LogoWord.jpg", a + "ZombieHand.png", a + "OptionsMenuback" + b + ".png", /* 省略部分图片路径 */ "images/Zombies/NewspaperZombie/1.gif"]
    }(),
    // 设置关卡名称（中文）
    LevelName: "游戏初始界面",
    LevelEName: 0, // 关卡名称（英文）
    ShowScroll: 1, // 是否显示滚动条
    LoadMusic: "Faster", // 加载音乐
    StartGameMusic: "Faster", // 开始游戏音乐
    AudioArr: ["losemusic", "winmusic", "groan2", "scream",  /* 省略部分音频 */ "chompsoft", "tap"], // 音频数组
    backgroundImage: "images/interface/Logo.jpg", // 背景图片
    // 加载页面访问时执行的操作
    LoadAccess: function(a) {
        EBody = document.body;
        EElement = document.documentElement;
        EDAll.scrollLeft = 0;
        EDAll.innerHTML += WordUTF8;
        NewAudio({
            source: "evillaugh"
        });
        (function() { // 页面初始化动画
            var animUp = function(y) {
                    $('dBalloonZombie') && ($('dBalloonZombie')
                        .style.top = (y -= 2.75) + 'px');
                    oSym.addTask(5, function(y) {
                        (y < -19 ? animDown : animUp)(y)
                    }, [y]);
                },
                animDown = function(y) {
                    $('dBalloonZombie') && ($('dBalloonZombie')
                        .style.top = (y += 1.1) + 'px');
                    oSym.addTask(4, function(y) {
                        (y > 34 ? animUp : animDown)(y)
                    }, [y]);
                };
            animUp(35);
        })();
    }
});