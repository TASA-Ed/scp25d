let data = (function() {

    let groupInfo =
        [
            '信息互动',        //组名
            '#FFF3D82D'     //颜色
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

            //信息
            {
                command: ['显示信息', 'yield game.msg(%1,%2,%3,%4,%5);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@信息', 'string', true, 2, [['文字', '变量', '地图变量', '全局变量'], ['内容', '${变量1}', '${game.d["变量1"]}', '${game.gd["变量1"]}']], 'green'],
                    ['文字间隔', 'number', '60', 0, '60', 'blue'],
                    ['预定义文字', 'string', '``', 0, '', 'lightblue'],
                    ['持续时间', 'number', '1000', 0, '', 'lightblue'],
                    ['*@显示效果', 'number', '3', 2, [['固定大小', '自适应高度', '自适应宽度', '自适应宽高'], ['{Type:0}', '{Type:2}', '{Type:1}', '{Type:3}'], '{Type:3}'], 'lightblue'],
                    ['显示效果说明:<br>显示效果其他属性参数:{BackgoundColor:"#00FFFFFF",BorderColor:"#00FFFFFF",FontSize:25,MaskColor:"#00FFFFFF",Type: 3}，把原来的{Type:3}改成这样就显示纯文字了，没有背景，BackgoundColor底层边框颜色，BorderColor边框颜色，MaskColor雾区颜色，FontSize文字大小', 'label'],
                ],
            },
            //对话
            {
                command: ['对话', 'yield game.talk(%1,%2,%3,%4,%5);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['角色名', 'string', undefined, 0, '', 'darkgreen'],
                    ['*@信息', 'string', true, 2, [['文字', '变量', '地图变量', '全局变量'], ['内容', '${变量1}', '${game.d["变量1"]}', '${game.gd["变量1"]}']], 'green'],
                    ['文字间隔', 'number', '60', 0, '', 'blue'],
                    ['预定义文字', 'string', '``', 0, '', 'lightblue'],
                    ['持续时间', 'number', '1000', 0, '', 'lightblue'],
                ],
            },
            //说话
            {
                command: ['说话', 'game.say(%1,%2,%3,%4,%5);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['角色名', 'string', undefined, 0, '', 'darkgreen'],
                    ['*@信息', 'string', true, 2, [['文字', '变量', '地图变量', '全局变量'], ['', '${变量1}', '${game.d["变量1"]}', '${game.gd["变量1"]}']], 'green'],
                    ['文字间隔', 'number', '60', 0, '', 'blue'],
                    ['预定义文字', 'string', '``', 0, '', 'lightblue'],
                    ['持续时间', 'number', '1000', 0, '', 'lightblue'],
                ],
            },

            //菜单
            {
                command: ['弹出菜单', 'var $index = yield game.menu(%1,%2);var $value = %2[$index];', '', 0, true, 'red', '#FFDBEF83', ['条件(', '括号结束)', '块开始{', '块结束}']],
                params: [
                    ['标题', 'string', '``', 0, '', 'green'],
                    ['*@菜单内容', 'name', 'true', 2, [['只有一个内容', '两个内容', '三个内容'], ['["内容1"]', '["内容1", "内容2"]', '["内容1", "内容2", "内容3"]']], 'blue'],
                    ['菜单使用说明:<br>完整的菜单使用步骤是 命令菜单+命令条件组合<br>命令条件的()中间插入菜单选择了第几项，然后命令条件的{}中间插入选择后的内容<br>如果是多个选择内容，请再另外添加条件命令进行判断', 'label'],
                    ['菜单其他效果:<br>显示效果其他属性参数:{BackgoundColor:"#00FFFFFF",BorderColor:"#00FFFFFF",FontSize:25,MaskColor:"#00FFFFFF"}，选择或写上内容后可以在最后加上这些参数在()括号里面，注意:别忘记在加的时候给内容后面添加 , 英文逗号<br>比如:菜单game.menu("标题", ["内容1","内容2"],{MaskColor:"#00FFFFFF"}); BackgoundColor底层边框颜色，BorderColor边框颜色，MaskColor雾区颜色，FontSize文字大小', 'label'],
                ],
            },

            //菜单选择了第几项
            {
                command: ['菜单选择了第几项', '$index === %1', '选择了第几项', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@选择第几项', 'name', true, 2, [['第一项', '第二项', '第三项'], ['0', '1', '2']], 'green'],
                ],
            },

            //输入界面
            {
                command: ['弹出输入窗口', 'var $index = yield game.input(%1,%2);var $value = %2[$index];', '', 0, true, 'red', '#FFDBEF83', ['条件(', '括号结束)', '块开始{', '块结束}']],
                params: [
                    ['标题', 'string', true, 0, '标题', 'green'],
                    ['预设值', 'string', '', 0, '', 'blue'],
                    ['输入使用说明:<br>完整的输入使用步骤是 命令弹出输入窗口+命令条件组合起来用<br>命令条件的()中间插入输入文本的判断，然后命令条件的{ 块结束}中间插入判断后的内容，如给与物品奖励或失去金钱等其他命令<br>如果需要多次判断，请再另外添加否则条件命令', 'label'],
                ],
            },
            //判断输入内容
            {
                command: ['判断输入的文本', '$index === %1', '输入窗口输入的文本', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['输入文本内容', 'string', true, 0, '', 'green'],
            ],
            },
        ];



    return {groupInfo, commandInfos};

})();
