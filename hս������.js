let data = (function() {

    let groupInfo =
        [
            '战斗相关',        //组名
            '#FFFFB800'     //颜色
        ];

    let commandInfos = [
            /*{
            //命令信息
            command: ['模块名参考',    //按钮显示的名字
                    '字符串模板',    //会对参数进行替换后转换为代码，参数 为%n （n为1开始，分别对应params的每一个参数）；
                    '说明',
                    4,      //缩进空格个数（最好为4的倍数）
                    true,   //是否编译时换行
                    'red',  //代码颜色
                    'white',//按钮颜色
                    []],    //连用命令列表（会加入其他命令）
            //参数信息
            params: [
                //第一个参数
                ['说明',
                 'string',  //输入类型（string、number、bool、string|number、name、code、json）
                 true,  //是否必须
                 0,     //输入类型：0表示默认值，1表示选择某目录下的文件夹，2为数组（预选项，9为固定值
                 '默认值', //输入参数
                 'green'    //显示*
                ],

                //第二个参数，label为显示文字帮助
                ['载入一张地图', 'label'],
            ],
        },*/
            //创建战斗主角':
            {
                command: ['创建战斗主角', 'game.createfighthero(%1);', '创建战斗主角', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightRoleDirName, 'green'],
                    //['战斗角色游戏名', 'string', undefined, 0, '', 'darkgreen'],
                ],
            },
            //  '删除战斗主角':
            {
                command: ['删除战斗主角', 'game.delfighthero(%1);', '删除战斗主角', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）', '全部'], ['名字', '0', '-1']], 'darkgreen'],
                ],
            },
            // '战斗主角信息':
            {
                command: ['战斗主角信息', 'game.fighthero(%1,%2)', '战斗主角信息', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）', '全部'], ['名字', '0', '-1']], 'darkgreen'],
                    ['@方式', 'number', '1', 2, [['返回对象', '返回名字'], ['1', '2'], '1'], 'darkgreen'],
                ],
            },
            //修改战斗角色
            {
                command: ['修改战斗角色名字', 'game.fighthero(%1).$name = %2;', '修改战斗角色名字', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名(默认主角)', 'string|number', '0', 2, [['战斗角色游戏名', '下标（数字，默认为主角）', ''], ['名字', '0']], 'darkgreen'],
                    ['新的名字', 'string', true, 0, '', 'darkgreen'],                   
                ],
            },
            {
                command: ['修改战斗角色头像', 'game.fighthero(%1).$avatar = %2;', '修改战斗角色名字', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名(默认主角)', 'string|number', '0', 2, [['战斗角色游戏名', '下标（数字，默认为主角）', ''], ['名字', '0']], 'darkgreen'],
                   ['*@新头像图片名', 'string', true, 1, GameMakerGlobal.imageResourceURL(), 'green'],
                    ['头像图片需要放在/storage/emulated/0/Leamus/MakerFrame/RPGMaker/Projects/游戏工程/Resources/Images/头像，即Images文件夹里面，你可以长按选择或直接填写图片名', 'label'],            
                ],
            },
            // '获得技能':
            {
                command: ['获得技能', 'game.getskill(%1,%2,%3);', '获得技能', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@技能名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightSkillDirName, 'darkgreen'],
                    ['@位置', 'number', '-1', 2, [['追加', '替换(输入数字下标)'], ['-1', ''], '-1'], 'darkgreen'],
                ],
            },
            //移除技能':
            {
                command: ['移除技能', 'game.removeskill(%1,%2,%3);', '移除技能', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@技能名', 'string|number', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightSkillDirName, 'darkgreen'],
                    ['@类型', 'json', '{}', 2, [['所有', '普通攻击', '技能'], ['{}', '{type: 0}', '{type: 1}'], '{}'], 'darkgreen'],
                ],
            },
            //技能信息':
            {
                command: ['技能信息', 'game.skill(%1,%2,%3)', '技能信息', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@技能名', 'string|number', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightSkillDirName, 'darkgreen'],
                    ['@类型', 'json', '{}', 2, [['所有', '普通攻击', '技能'], ['{}', '{type: 0}', '{type: 1}'], '{}'], 'darkgreen'],
                ],
            },
            // '增加战斗角色属性':
            {
                command: ['增加战斗角色属性', 'game.addprops(%1,%2,%3);', '增加战斗角色属性', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@属性', 'json', true, 2, [['HP', 'MP', '经验'], ['{HP: [66]}', '{MP: [-66]}', '{EXP: 99}']], 'darkgreen'],
                    ['*@恢复方式', 'number', true, 2, [['增加值', '百分比', '赋值', '满值（多段）'], ['1', '2', '3', '0'], '1'], 'darkgreen'],
                ],
            },
            // '升级':
            {
                command: ['升级', 'game.$userscripts.levelup(%1,%2);', '升级', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['值', 'number', '0', 0, '', 'green'],
                ],
            },

            //  '进入战斗':
            {
                command: ['进入战斗', 'game.fighting({RId: %1, %2});', '进入战斗', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗脚本', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightScriptDirName, 'darkgreen'],
                    ['@参数', 'json', undefined, 2, [['战斗结束函数'], ['FightEndScript: 函数名']], 'green'],
                ],
            },
            //  '开启随机战斗':
            {
                command: ['开启随机战斗', 'game.fighton({RId: %1, %2},%3,%4);', '开启随机战斗', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗脚本', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strFightScriptDirName, 'darkgreen'],
                    ['@参数', 'json', undefined, 2, [['战斗结束函数'], ['FightEndScript: 函数名(最好是战斗脚本名一样)']], 'green'],
                    ['@几率', 'number', '5', 0, '5', 'darkgreen'],
                    ['@方式', 'number', '3', 2, [['全部开启', '主角静止时遇敌', '主角行动时遇敌'], [3, 2, 1], 3], 'darkgreen'],
                ],
            },
            // '关闭随机战斗':
            {
                command: ['关闭随机战斗', 'game.fightoff();', '关闭随机战斗', 0, true, 'red', '#FFDBEF83'],
                params: [
                ],
            },
            //战斗回调函数
            {
                command: ['战斗结果回调函数', 'function *%1(r,step) {', '战斗回调函数', 4, true, 'red', '#FFDBEF83', ['块结束}']],
                params: [
                    ['函数名(战斗脚本名称)','name', true, 0, [], 'green'],
                    ['在 命令进入战斗 那边填写的参数应与战斗脚本名称保持一致', 'label'],
                    ['选中新出的块结束，插入命令条件，判断战斗结果(在插入的命令条件里再插入命令战斗结果，然后写其他命令', 'label'],
                ],
            },
            //战斗结果判断
            {
                command: ['战斗结果判断', 'r.result === 1%', '战斗结果判断', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['@结果', 'number', '1', 2, [['胜利', '失败', '平局', '逃跑'], [1, -1, 0, -2], 1], 'darkgreen'],
                    ['可 命令战斗结果回调函数 + 命令条件 组合使用<br>命令战斗结束回调函数(战斗结束函数在 命令进入战斗 中设置)，然后命令条件的()中间插入结果判断，命令条件的{}中间插入其他的命令<br>如果是多个判断，请再另外添加否则条件判断', 'label'],
                ],
            },
            //战斗完返回地图
            {
                command: ['战斗完返回地图',   `step === 1`, '',4, true,   'red', '#FFDBEF83', []],
                params: [
                    ['可 命令战斗结果回调函数 + 命令条件 组合使用<br>命令战斗结束回调函数(战斗结束函数在 命令进入战斗 中设置)，然后命令条件的()中间插入此命令，命令条件的{}中间插入其他的命令。', 'label'],
                ],
            },
            
            //满血满魔
            {
                command: ['满血满魔',   `for(let c of game.fighthero()){
                    game.addprops(c,{1%},0);
                    }`, '满血满魔',0,  true,   'red', '#FFDBEF83', []],
                params: [
                    ['*@满血/满魔', 'name', true, 2, [['满血', '满魔', '全满'], ['HP: 3', 'MP: 3', 'HP: 3, MP: 3'], []], 'darkgreen'],
                ],
            },
        ];



    return {groupInfo, commandInfos};

})();
