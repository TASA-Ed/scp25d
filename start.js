
//鹰：可以包含其他文件：
//.import 'XXX.js' as JsName
//console.debug(JsName.aaa);



//游戏开始脚本（开始时调用）
function *$start() {

    game.playmusic("");


    while(1) {
        let c = yield game.menu("请选择", ["开始游戏","读取存档","制作人员"]);
        switch(c) {
            case 0:
                {
    game.loadmap(`Intro`);
    game.createhero({RId:`D9341`, $name:` `,  $showName:false});
    game.movehero(66,56);
    game.scale(3);
}


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
                        //game.$globalLibraryJS.setTimeout(function() {game.load('存档' + c)}, 0, game);
                        if(game.load('存档' + c))
                            break;
                        else
                            yield game.msg("读取失败");
                        continue;
                    case 3:
                        //game.$globalLibraryJS.setTimeout(function() {game.load('autosave')}, 0, game);
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
                yield game.msg("游戏制作:德二吹风机\n框架和引擎开发：深林孤鹰", 60, '', 0);
                continue;
        }

        break;
    }

}


//游戏初始化（游戏开始和载入存档时调用）
function *$init() {

    //每秒恢复
    function resumeEventScript(combatant) {

        if(combatant.$properties.HP[0] <= 0)
            return;

        game.addprops(combatant, {'HP': [2], 'MP': [2]});
    }

    //每秒恢复事件
    game.addtimer("resume_event", 1000, -1, true);
    game.gf["resume_event"] = function() {
        for(let h in game.gd["$sys_fight_heros"]) {
            resumeEventScript(game.gd["$sys_fight_heros"][h]);
        }
    }




    yield game.msg("合理安排时间");

    game.goon();

}


//存档后调用
function *$save() {

}


//读档后调用
function *$load() {

}

        