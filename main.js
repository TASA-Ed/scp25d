
//鹰：可以包含其他文件：
//.import 'XXX.js' as JsName
//console.debug(JsName.aaa);



//游戏开始脚本（开始时调用）
function *$start() {


    while(1) {
        let c = yield game.menu("请选择", ["开始游戏","读取存档","游戏说明","制作人员"]);
        switch(c) {
            case 0:
                
game.scale(1);
game.interval(16);
//game.loadmap('鹰歌地图');
//game.createhero('深林孤鹰');
//game.movehero(1,11);
//game.playmusic('音乐1mp3');
yield game.msg('Hello World<br>欢迎来到鹰歌Maker，这是一个最简单的demo，如果需要体验完整游戏请点击 示例工程 或加群下载更多工程！');
game.goon();


                break;
            case 1:
                /*let arrSave = [];
                for(let i = 0; i < 3; ++i) {
                    let ts = game.checksave('存档' + i);
                    if(ts) {
                        arrSave.push('存档%1：%2（%3）'.arg(i).arg(ts.Name).arg(ts.Time));
                    }
                    else
                        arrSave.push('空');
                }*/

                let readSavesInfo = game.$userscripts.$readSavesInfo || game.$gameMakerGlobalJS.$readSavesInfo;
                let arrSave = readSavesInfo();

                c = yield game.menu("载入存档", [...arrSave,"自动存档","取消"]);
                switch(c) {
                    case 0:
                    case 1:
                    case 2:
                        //game.$globalLibraryJS.runNextEventLoop(function() {game.load('存档' + c)},);
                        if(game.load('存档' + c))
                            break;
                        else
                            yield game.msg("读取失败");
                        continue;
                    case 3:
                        //game.$globalLibraryJS.runNextEventLoop(function() {game.load('autosave')},);
                        if(game.load('autosave'))
                            break;
                        else
                            yield game.msg("读取失败");
                        continue;
                    default:
                        continue;
                }
                break;
            case 2:
                yield game.msg("这里写游戏说明");
                continue;
            case 3:
                yield game.msg("框架和引擎开发：深林孤鹰", 60, '', 0);
                continue;
        }

        break;
    }
}
        