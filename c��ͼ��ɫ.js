let data = (function() {

    let groupInfo =
        [
            '地图角色',        //组名
            '#FFFCF06B'     //颜色
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
                 'green'    //显示颜色
                ],

                //第二个参数，label为显示文字帮助
                ['载入一张地图', 'label'],
            ],
        },*/
            //地图传送
            {
                command: ['传送主角', 'function *%1() {game.loadmap(%2);game.movehero(%4,%5);}', '选择目的地地图', 0, true, 'red', '#FFDBEF83',[]],
                params: [
                    ['输入事件', 'name', true, 0, [], 'lightblue'],
                    ['*@地图名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strMapDirName + GameMakerGlobal.separator, 'green'],
                    ['选择目的地地图', 'label'],
                    ['x坐标', 'number', true, 0, [], 'lightblue'],
                    ['y坐标', 'number', true, 0, [], 'lightblue'],
                    ['输入目的地位置坐标', 'label'],
                    ['注:主角传送命令只能单独使用，不能配合其他命令进行组合<br>移动主角是当前地图移动，传送主角是跨地图移动', 'label'],
                ],
            },
            //'载入地图':
            {
                command: ['载入地图', 'game.loadmap(%1);', '载入一张地图', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@地图名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strMapDirName + GameMakerGlobal.separator, 'green'],
                    ['载入一张地图，会默认载入地图后移动主角到载入前地图的坐标', 'label'],
                ],
            },

            // '创建主角':
            {
                command: ['创建主角', 'game.createhero({RId:%1, $name:%2});', '创建主角', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@角色资源名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strRoleDirName, 'green'],
                    ['主角名', 'string', undefined, 0, '', 'darkgreen'],
                ],
            },
            //'移动主角':
            {
                command: ['移动主角', 'game.movehero(%1,%2);', '移动主角', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*地图块x', 'number', true, 0, '0', 'green'],
                    ['*地图块y', 'number', true, 0, '0', 'green'],
                ],
            },
            //主角信息':
            {
                command: ['主角信息', 'game.hero(%1)', '主角信息', 0, false, 'red', '#FFDBEF83'],
                params: [
                    ['*@主角名', 'string|number', true, 2, [['全部', '角色名1'], ['-1', '角色名1'], '角色名1'], 'green'],
                ],
            },
            // '删除主角':
            {
                command: ['删除主角', 'game.delhero(%1);', '删除主角', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@主角名', 'string|number', true, 2, [['全部', '角色名1'], ['-1', '角色名1'], '-1'], 'green'],
                ],
            },

            // '创建NPC':
            {
                command: ['创建NPC', 'game.createrole({RId: %1, $name: %2, $bx: %3, $by: %4, $action: %5, $showName: %6, $start: %7});', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@角色资源名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strRoleDirName, 'green'],
                    ['NPC名', 'string', undefined, 0, '', 'darkgreen'],
                    ['*地图块x', 'number', true, 0, '', 'blue'],
                    ['*地图块y', 'number', true, 0, '', 'blue'],
                    ['*@动作（1为移动）', 'number', '1', 2, [['移动', '禁止'], ['1', '0']], 'green'],
                    ['*@名字显示(默认显示)', 'bool', 'true', 2, [['显示', '隐藏'], ['true', 'false']], 'green'],
                    ['*@禁止移动时做动作(默认移动)', 'bool', 'true', 2, [['移动状态', '静止状态'], ['true', 'false']], 'green'],
                ],
            },
            //'移动NPC':
            {
                command: ['移动NPC', 'game.moverole(%1,%2,%3);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*NPC名', 'string', true, 0, '', 'green'],
                    ['地图块x', 'number', undefined, 0, '', 'blue'],
                    ['地图块y', 'number', undefined, 0, '', 'blue'],
                ],
            },
            //'NPC信息':
            {
                command: ['NPC信息', 'game.role(%1)', 'NPC信息', 0, false, 'red', '#FFDBEF83'],
                params: [
                    ['*@NPC名', 'string|number', true, 2, [['全部', 'NPC名'], ['-1', 'NPC名'], 'NPC名'], 'green'],
                ],
            },
            //'修改NPC':
            {
                command: ['修改NPC', 'game.role(%1,{$action: %2, $showName: %3, $start: %4, $direction: %5});', '修改NPC', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@NPC名', 'string', true, 2, [['NPC名'], ['NPC名'], 'NPC名'], 'green'],
                    ['*@动作（默认禁止）', 'number', '0', 2, [['移动', '禁止'], ['1', '0']], 'green'],
                    ['*@名字显示(默认显示)', 'bool', 'true', 2, [['显示', '隐藏'], ['true', 'false']], 'green'],
                    ['*@禁止移动时做动作(默认禁止)', 'bool', 'false', 2, [['移动状态', '静止状态'], ['true', 'false']], 'green'],
                    ['*@禁止移动时的朝向（默认朝上）', 'number', '0', 2, [['上', '右', '下', '左'], ['0', '1', '2', '3']], 'green'],
                ],
            },
            //'删除NPC':
            {
                command: ['删除NPC', 'game.delrole(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@NPC名', 'string|number', true, 2, [['全部', 'NPC1'], ['-1', 'NPC1'], '-1'], 'green'],
                ],
            },
            //改变名字
            {
                command: ['修改名字', 'game.%1(%2, $name: %4);', '修改NPC', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@主角/NPC', 'name', true, 2, [['主角', 'NPC'], ['hero', 'role'], []], 'green'],
                    ['角色名', 'string|number', undefined, 0, '', 'darkgreen'],
                    ['角色名：如果是主角可以填下标或名字，NPC必须填名字', 'label'],
                    ['新名字', 'string', undefined, 0, '', 'darkgreen'],
                ],
            },
            //'改变速度':
            {
                command: ['改变移动速度', 'game.%1(2%, {$speed: %3});;', '改变速度', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@主角/NPC', 'name', true, 2, [['主角', 'NPC'], ['hero', 'role'], []], 'green'],
                    ['角色名', 'string', undefined, 0, '', 'darkgreen'],
                    ['速度', 'number', true, 0, '0.1', 'green'],
                ],
            },
            //点击角色
            {
                command: ['点击NPC', 'function *$%1_click(){game.run(%1);}', '点击NPC', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['输入NPC的名字', 'name', true, 0, [], 'green'],
                    ['让NPC可以被点击，点击后执行什么命令写在NPC函数事件里就行了', 'label'],
                ],
            },

            //NPC执行事件
            {
                command: ['NPC执行命令', 'function *$%1_arrive(){', 'NPC执行命令', 0, true, 'red', '#FFDBEF83', ['块结束}']],
                params: [
                    ['输入NPC的名字', 'name', true, 0, [], 'green'],
                    ['选中新出现的 块结束}命令，插入其他命令，让NPC可以在创建后自动执行这些命令', 'label'],
                ],
            },

            //移动角色
            {
                command: ['定向移动', 'game.%1("%2", {$action: 2, $targetBx: %3, $targetBy: %4, $realSize: [0, 0]});}', '定向移动', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@选择主角或NPC', 'name', true, 2, [['定向移动主角', '定向移动NPC'], ['hero', 'role']], 'green'],
                    ['输入角色的名字', 'name', true, 0, [], 'green'],
                    ['x坐标', 'number', true, 0, [], 'lightblue'],
                    ['y坐标', 'number', true, 0, [], 'lightblue'],
                    ['输入到达地点的坐标', 'label'],
                ],
            },
            //到达终点
            {
                command: ['NPC到达终点(定向移动)',   `function *$%1_arrive(){`, '',4, true,   'red', '#FFDBEF83', ['块结束']],
                params: [
                    ['NPC名称','name', true,0, '', 'green'],
                    ['可配合 命令条件 组合使用', 'label'],
                ],
            },

        ];



    return {groupInfo, commandInfos};

})();
