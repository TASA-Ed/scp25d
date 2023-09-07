let data = (function() {

    let groupInfo =
        [
            '游戏命令',        //组名
            '#FFFFF697'     //颜色
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
            //摇杆、按键设定
            {
                command: ['开关摇杆按键', `game.control({$gamepad: {$visible: %1, $enabled: %1}});    game.control({$keyboard: {$enabled: %1}});`, '显示隐藏', 0, true, 'red', '#FFDBEF83', []],
                params: [
                    ['*@显示隐藏', 'bool', true, 2, [['显示', '隐藏'], ['true', 'false']], 'green'],
                ],
            },

            //打开UI
            {
                command: ['打开界面', 'game.window({$id: %1}, %2);', '打开UI', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@界面类型', 'name', true, 2, [['主菜单', '状态栏', '背包栏', '系统栏'], ['0b1', '0b10', '0b100', '0b1000']], 'green'],
                    ['*@游戏暂停与否', 'bool', true, 2, [['暂停游戏', '不暂停'], ['true', 'false']], 'green'],
                    ['注：该命令是在隐藏了按键的前提下，使用本命令可以直接打开菜单背包等界面', 'label'],
                ],
            },

            //暂停继续游戏
            {
                command: ['游戏暂停/继续', 'game.%1();', '暂停继续', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@暂停/继续', 'name', true, 2, [['游戏暂停', '继续游戏'], ['pause', 'goon']], 'green'],
                ],
            },

            //等待
            {
                command: ['等待', 'yield game.wait(%1);', '等待', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['输入时间', 'number', true, 0, '1000', 'green'],
                    ['等待会暂停游戏，且使用不当会造成游戏卡死等，单位是毫秒即1000就是1秒', 'label'],
                ],
            },

            //增加地图定时器':
            {
                command: ['增加地图定时器', 'game.addtimer(%1,%2,%3);', '增加地图定时器', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@名字', 'string', true, 2, [['定时器1', '定时器2', '定时器3'], ['定时器1', '定时器2', '定时器3'], '定时器1'], 'darkgreen'],
                    ['间隔', 'number', '1000', 0, '1000', 'darkgreen'],
                    ['次数', 'number', '-1', 0, '-1', 'darkgreen'],
                ],
            },
            //  '删除地图定时器':
            {
                command: ['删除地图定时器', 'game.deltimer(%1);', '删除地图定时器', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@名字', 'string', true, 2, [['定时器1', '定时器2', '定时器3'], ['定时器1', '定时器2', '定时器3'], '定时器1'], 'darkgreen'],
                ],
            },
            // '增加全局定时器':
            {
                command: ['增加全局定时器', 'game.addtimer(%1,%2,%3,true);', '增加全局定时器', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@名字', 'string', true, 2, [['全局定时器1', '全局定时器2', '全局定时器3'], ['全局定时器1', '全局定时器2', '全局定时器3'], '全局定时器1'], 'darkgreen'],
                    ['间隔', 'number', '1000', 0, '1000', 'darkgreen'],
                    ['次数', 'number', '-1', 0, '-1', 'darkgreen'],
                ],
            },

            // '删除全局定时器':
            {
                command: ['删除全局定时器', 'game.deltimer(%1,true);', '删除全局定时器', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@名字', 'string', true, 2, [['全局定时器1', '全局定时器2', '全局定时器3'], ['全局定时器1', '全局定时器2', '全局定时器3'], '全局定时器1'], 'darkgreen'],
                ],
            },

            //运行计时器
            {
                command: ['计时器运行', 'game.%1[%3] = function*() {', '计时器运行命令', 0, true, 'red', '#FFDBEF83', ['块结束}']],
                params: [
                    ['*@选择计时器类型', 'name', true, 2, [['地图计时器', '全局计时器'], ['f', 'gf']], 'green'],
                    ['地图计时器只在当前地图生效，全局计时器运行了除非手动删除，否则会一直生效', 'label'],
                    ['输入创建的计时器名字', 'string', true, 0, '', 'green'],
                    ['输入计时器名字后，选中新出现的 块结束} ，插入需要执行的命令', 'label'],
                ],
            },

            //  '场景缩放':
            {
                command: ['场景缩放', 'game.scale(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*倍数', 'number', true, 0, '1', 'green'],
                    ['整个游戏画面缩放，除非手动改正，否则会一直生效。', 'label'],
                ],
            },

            //游戏刷新率':
            {
                command: ['游戏刷新率', 'game.setinterval(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*刷新率', 'number', true, 0, '16', 'green'],
                ],
            },
            //存档':
            {
                command: ['存档', 'game.save(%1,%2);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['文件名', 'string', '`autosave`', 0, '', 'green'],
                    ['显示文字', 'string', '`存档`', 0, '', 'blue'],
                ],
            },
            // '读档':
            {
                command: ['读档', 'game.load(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['文件名', 'string', '`autosave`', 0, '', 'green'],
                ],
            },
            //  '游戏结束'
            {
                command: ['游戏结束', 'game.gameover(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['参数', 'json', '{}', 0, '', 'green'],
                ],
            },
            //触屏
            {
                command: ['触屏移动', `game.gf['$map_click'] = function(bx, by, x, y) {
        let hero = game.hero(0, {$action: 2, $targetBx: bx, $targetBy: by});
    }`, '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['可触屏移动主角', 'label'],
                ],
            },
        ];


    return {groupInfo, commandInfos};

})();
