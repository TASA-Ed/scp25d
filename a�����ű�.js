let data = (function() {

    let groupInfo =
        [
            '函数脚本',        //组名
            '#FFFAF5C1'     //颜色
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

            // '函数/生成器
            {
                command: ['函数/生成器{', 'function %1(%2) {', '定义函数或生成器名', 4, true, 'red', '#FFDBEF83', ['块结束}']],
                params: [
                    ['*@函数名', 'name', true, 2, [['初始化事件(start脚本', '开始事件(游戏开始或载入地图)', '存档事件(start脚本有效)', '读档事件(start脚本有效)', '事件1', '事件2'], ['*start', '*$init', '*$save', '*$load', '*事件1', '*事件2']], 'green'],
                    ['参数(,号分隔)', 'name', '', 0, '', 'blue'],
                ],
            },
            //      command: [命令显示, 命令, 说明, 缩进空格数, 是否换行, 代码颜色, 按钮颜色, [联用命令列表]],
            //      params: [[参数1说明, 类型, 是否必须（true为必填，false为编译缺省是空字符串，其他（包括undefined、null也为字符串）为编译时原值）, 输入类型, 输入参数, 颜色], 。。。]}
            //'调用函数/生成器'
            {
                command: ['调用函数/生成器', 'game.run(%1,%2);', '调用函数/生成器', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@函数名', 'name', true, 0, '函数名', 'green'],
                    ['优先级', 'number', '-1', 0, '-1', 'blue'],
                ],
            },
        ];



    return {groupInfo, commandInfos};

})();
