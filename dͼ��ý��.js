let data = (function() {

    let groupInfo =
        [
            '图音媒体',        //组名
            '#FFF1E134'     //颜色
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
            //播放音乐':
            {
                command: ['播放音乐', 'game.playmusic(%1);', '', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@音乐名', 'string', true, 1, GameMakerGlobal.musicResourceURL(), 'green'],
                ],
            },

            //音乐开关
            {
                command: ['音乐暂停/继续', 'game.%1music();', '暂停/继续选择', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@暂停/继续选择', 'name', true, 2, [['停止音乐', '暂停音乐', '继续播放', '重新播放'], ['stop', 'pause', 'resume', 'seek']], 'green'],
                ],
            },
            // '播放视频':
            {
                command: ['播放视频', 'yield game.playvideo(%1, %2);', '播放视频', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@视频名', 'string', true, 1, GameMakerGlobal.videoResourceURL(), 'green'],
                    ['属性', 'json', '{}', 0, '{}', 'darkgreen'],
                ],
            },

            //停止视频':
            {
                command: ['停止视频', 'game.stopvideo();', '停止视频', 0, true, 'red', '#FFDBEF83'],
                params: [
                ],
            },

            //显示图片
            {
                command: ['显示图片', 'game.showimage(%1,%2,%3);', '显示图片', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@图片名', 'string', true, 1, GameMakerGlobal.imageResourceURL(), 'green'],
                    ['*@属性', 'name', false, 2, [['默认(图片自身大小，显示在屏幕正中央)', '宽，高(默认100像素大小)', '全屏显示','x坐标，y坐标', '坐标宽高都填', ], ['{}', '{$width: 100, $height: 100}', '{$width: -1, $height: -1}','{$x: 0, $y: 0}', '{$x: 0, $y: 0, $width: 100, $height: 100}']], 'darkgreen'],
                    ['id', 'string|number', undefined, 0, '', 'green'],
                    ['属性填写说明:<br>修改属性只需改一下数字就行，具体效果请自行测试。<br>没有填宽高，图片显示自身大小。<br>没有填坐标，图片显示在屏幕中央。<br>x，y坐标就是图片显示的位置，对应地图坐标进行修改。<br>//显示图片的其他属性参数sizeType:<br>//sizeType: 1表示width和height为跨平台大小，每个设备宽高大小会一致<br>比如{x: 0, y: 0, width: 100, height: 100, sizeType: 1}<br>sizeType: 2表示width和height的值是屏幕百分比<br>比如{x: 0, y: 0, width: 0.5, height: 0.5, sizeType: 2}图片显示在0,0坐标位置，大小是屏幕的一半。<br>//sizeType: 3表示为图片本身大小百分比<br>比如{x: 0, y: 0, width: 0.5, height: 0.5, sizeType: 3}<br>图片显示的其他属性参数(写在属性参数里): opacity即透明度，需要的可以加进去<br>如opacity: 0.5表示透明度50%<br>$loops: -1, $clicked: 点击函数名, $parent : 0<br>$loops -1表示循环显示<br>$clicked:点击函数名配合函数/脚本可以让图片被点击后做动作，比如function *点击函数名(){<br>$parent : 0表示显示在屏幕上(默认) ; 为1表示显示在屏幕上(受scale影响) ; 2表示显示在地图上; 字符串表示显示在某个角色', 'label'],
                ],
            },

            // '删除图片':
            {
                command: ['删除图片', 'game.delimage(%1);', '删除图片', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*id', 'string|number', true, 0, '', 'green'],
                ],
            },

            //显示特效
            {
                command: ['显示特效', 'game.showsprite(%1,%2,%3);', '显示特效', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@特效名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strSpriteDirName, 'green'],
                    ['*@属性', 'name', false, 2, [['坐标宽高播放次数', '带$坐标宽高播放次数'], ['{x: 0, y: 0, width: 100, height: 100, $loops: -1}', '{$x: 0, $y: 0, $width: 100, $height: 100, $loops: -1}']], 'darkgreen'],
                    ['id', 'string|number', undefined, 0, '', 'green'],
                    ['属性填写说明:<br>带$的属性有以下几种格式:<br>$x、$y：如果为数字，则表示坐标是按固定长度（厘米）为单位的长度（跨平台用）；<br>如果为 数组[n, t]，则n表示值，t表示类型：t为0、1分别和直接填x、y 和 $x、$y 作用相同；为2表示居中后偏移多少像素，为3表示居中后偏移多少固定长度；<br>$width、$height：如果为数字，则表示按固定长度（厘米）为单位的长度（跨平台用）；<br>如果为 数组[n, t]，则n表示值，t表示类型：t为0、1分别和直接填width、height 和 $width、$height 作用 相同；为2表示全屏的多少倍；为3表示自身的多少倍；<br>修改属性只需改一下数字就行，其中播放次数$loops为-1时表示无限播放，具体效果请自行测试。<br>//特效显示的其他属性参数: opacity即透明度，需要的可以加进去<br>如{x: 0, y: 0, width: 100, height: 100, $loops: -1, opacity: 0.5}表示透明度50%<br>$clicked:点击函数名，配合函数/脚本可以让特效被点击后做动作，比如function *点击函数名(){<br>$parent : 0表示显示在屏幕上(默认) ; 为1表示显示在屏幕上(受scale影响) ; 2表示显示在地图上; 字符串表示显示在某个角色。', 'label'],
                ],
            },

            //删除特效':
            {
                command: ['删除特效', 'game.delsprite(%1);', '删除特效', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*id', 'string|number', true, 0, '', 'green'],
                ],
            },

        ];



    return {groupInfo, commandInfos};

})();
