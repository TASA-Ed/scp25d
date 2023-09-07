let data = (function() {

    let groupInfo =
        [
            '其他命令',        //组名
            '#FFFFAF00'     //颜色
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
            //'条件(':
            {
                command: ['条件(', 'if(', '条件(', 4, false, 'red', '#FFDBEF83', ['括号结束)', '块开始{', '块结束}']],
                params: [
                ],
            },
            // '否则条件(':
            {
                command: ['否则条件(', 'else if(', '否则条件(', 4, false, 'red', '#FFDBEF83', ['括号结束)', '块开始{', '块结束}']],
                params: [
                ],
            },
            //'否则':
            {
                command: ['否则', 'else', '否则', 0, true, 'red', '#FFDBEF83', ['块开始{', '块结束}']],
                params: [
                ],
            },
            // '循环(':
            {
                command: ['循环(', 'for(', '循环(', 4, false, 'red', '#FFDBEF83', ['括号结束)', '块开始{', '块结束}']],
                params: [
                ],
            },
            //'括号开始(':
            {
                command: ['括号开始(', '(', '括号开始(', 4, false, 'red', '#FFDBEF83', ['括号结束)']],
                params: [
                ],
            },
            //'括号结束)':
            {
                command: ['括号结束)', ')', '括号结束)', -4, false, 'red', '#FFDBEF83'],
                params: [
                ],
            },
            //'块开始{':
            {
                command: ['块开始{', '{', '块开始{', 4, true, 'red', '#FFDBEF83', ['块结束}']],
                params: [
                ],
            },
            //块结束}':
            {
                command: ['块结束}', '}', '块结束}', -4, true, 'red', '#FFDBEF83'],
                params: [
                ],
            },
            //自定义':
            {
                command: ['自定义', '%1', '自定义指令', 0, false, 'red', '#FFDBEF83'],
                params: [
                    ['*代码', 'code', true, 0, '', 'green'],
                ],
            },

        ];



    return {groupInfo, commandInfos};

})();
