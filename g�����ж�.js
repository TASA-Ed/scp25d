let data = (function() {

    let groupInfo =
        [
            '运算判断',        //组名
            '#FFFFCC00'     //颜色
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
            
            //变量判断
            {
                command: ['变量判断', '%1 %2 %3', '判断类型', 0, true, 'red', '#FFDBEF83', []],
                params: [
                    ['*@变量类型', 'name', true, 2, [['地图变量(不保存)', '全局变量(不保存)', '全局变量(保存)', '变量(当前地图)', '变量(金钱)'], ['game.d["变量"]', 'game.gf["变量"]', 'game.gd["变量"]', 'game.gd["$sys_map"].$name', 'game.gd["$sys_money"]']], 'darkgreen'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['配合命令【条件】来使用<br>比如条件if (这里插入变量判断){这里插入判断后的内容}', 'label'],
                ],
            },

            //物品判断
            {
                command: ['物品判断', 'game.getgoods(%1) %2 %3', '判断类型', 0, true, 'red', '#FFDBEF83', []],
                params: [
                    ['*@持有物品', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strGoodsDirName + GameMakerGlobal.separator, 'green'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['配合命令【条件】来判断持有物品的数量<br>比如条件if (这里插入物品判断){这里插入判断后的内容}', 'label'],
                ],
            },

            //属性判断
            {
                command: ['属性判断', 'game.fighthero(%1).$properties.%2 %3 %4', '属性类型', 0, true, 'red', '#FFDBEF83', []],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'green'],
                    ['*@属性类型', 'name', true, 2, [['血量', '魔法', '等级', '攻击', '防御', '灵力', '幸运', '速度', '当前经验'], ['HP[2]', 'MP[1]', 'level', 'attack', 'defense', 'power', 'luck', 'speed', 'EXP']], 'green'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['配合命令【条件】来判断角色某属性的值。<br>比如条件if (这里插入属性判断){这里插入判断后的内容}<br>注：下标填的是数字，指第几个创建的角色<br>如主角是第一个创建的，填下标就写0', 'label'],
                ],
            },

            // '随机数'
            {
                command: ['随机数判断', 'game.rnd(%1,%2) %3 %4', '随机数', 0, false, 'red', '#FFDBEF83'],
                params: [
                    ['*m', 'number', true, 0, '', 'green'],
                    ['*n', 'number', true, 0, '', 'green'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['注：随机数m即最小值，n即最大值。如game.rnd(0,100)，它的随机范围就是0至99，随机的最大值比n少1', 'label'],
                ],
            },

            //佩戴装备判断
            {
                command: ['装备数量判断', 'Object.keys(game.fighthero(%1).$equipment).length', '判断类型', 0, true, 'red', '#FFDBEF83', []],
                params: [
                    ['*@战斗角色游戏名(默认为下标0，即主角)', 'string|number', '0', 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['配合命令【条件】来判断战斗角色佩戴的装备数量<br>比如条件if (这里插入装备数量判断){这里插入判断后的内容}', 'label'],
                ],
            },

            // 多次判断':
            {
                command: ['多次判断', '%1 %2 %3 %4 %5 %6 %7', '多次判断', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@变量类型', 'name', true, 2, [['地图变量', '全局变量', '变量(当前地图)', '变量(金钱)', '随机数'], ['game.d["变量"]', 'game.gd["变量"]', 'game.gd["$sys_map"].$name', 'game.gd["$sys_money"]', 'game.rnd(m,n)']], 'darkgreen'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['*@与或非', 'name', true, 2, [['与(都成立)', '或(其中一个成立)', '非'], ['&&', '||', '!']], 'green'],
                    ['*@变量类型', 'name', true, 2, [['地图变量', '全局变量', '变量(当前地图)', '变量(金钱)', '随机数'], ['game.d["变量"]', 'game.gd["变量"]', 'game.gd["$sys_map"].$name', 'game.gd["$sys_money"]', 'game.rnd(m,n)']], 'green'],
                    ['*@符号', 'name', true, 2, [['等于', '不等于', '大于', '小于', '大于等于', '小于等于'], ['===', '!==', '>', '<', '>=', '<=']], 'blue'],
                    ['*@值/变量', 'name', true, 2, [['未定义', '空', '真', '假'], ['undefined', 'null', 'true', 'false']], 'green'],
                    ['配合命令【条件】来使用<br>比如条件if (这里插入变量判断){这里插入判断后的内容}', 'label'],
                ],
            },
            //变量赋值
            {
                command: ['运算赋值', '%1 %2 %3 %4 %5 %6', '运算赋值', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@变量1', 'name', true, 2, [['地图变量(不保存)', '全局变量(不保存)', '全局变量(保存)', '变量(金钱)'], ['game.d["变量名"]', 'game.gf["变量"]', 'game.gd["变量名"]', 'game.gd["$sys_money"]']], 'darkgreen'],
                    ['@符号', 'name', '', 2, [['赋值', '加赋值', '减赋值', '乘赋值', '除赋值', '取余赋值', '位与赋值', '位或赋值', '左移赋值', '右移赋值'], ['=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '%=', '<<=', '>>='], '='], 'black'],
                    ['@变量2', 'name', '', 2, [['值', '字符串', '地图变量1(不保存)', '全局变量2(不保存)', '全局变量2(保存)', '随机数','本地时间(单位毫秒)'], ['', '``', 'game.d["变量2"]', 'game.gf["变量2"]', 'game.gd["变量2"]', 'game.rnd(m,n)', 'Date.now()']], 'green'],
                    ['@运算符', 'name', '', 2, [['加', '减', '乘', '除', '取余', '位与', '位或', '左移位', '右移位', 'in（循环用）', 'of（循环用）'], ['+', '-', '*', '/', '%', '&', '|', '<<', '>>', 'in', 'of']], 'green'],
                    ['@变量3', 'name', '', 2, [['值', '字符串', '地图变量3(不保存)', '全局变量2(不保存)', '全局变量3(保存)', '随机数', '本地时间(单位毫秒)'], ['', '``', 'game.d["变量3"]', 'game.gf["变量3"]', 'game.gd["变量3"]', 'game.rnd(m,n)', 'Date.now()']], 'green'],
                ],
            },
        ];



    return {groupInfo, commandInfos};

})();
