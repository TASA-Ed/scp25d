let data = (function() {

    let groupInfo =
        [
            '物品道具',        //组名
            '#FFFFD104'     //颜色
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

            //获得道具':
            {
                command: ['获得道具', 'game.getgoods(%1,%2);', '获得道具', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@道具资源名', 'string|number', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strGoodsDirName, 'darkgreen'],
                    ['*个数', 'number', true, 0, '1', 'darkgreen'],
                    //['新属性', 'json', '{}', 0, '{}', 'darkgreen'],
                ],
            },

            //  '移除道具':
            {
                command: ['移除道具', 'game.removegoods(%1,%2);', '移除道具', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@道具资源名', 'string|number', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strGoodsDirName, 'darkgreen'],
                    ['*个数', 'number', true, 0, '1', 'darkgreen'],
                ],
            },

            // '道具信息':
            {
                command: ['道具信息', 'game.goods(%1,%2)', '道具信息', 0, false, 'red', '#FFDBEF83'],
                params: [
                    ['*@道具资源名或下标或-1', 'string|number', true, 2, [['道具资源名', '下标', '所有'], ['', '', '-1'], '-1'], 'darkgreen'],
                    ['筛选', 'json', '{}', 0, '{}', 'darkgreen'],
                ],
            },

            //       '使用道具':
            {
                command: ['使用道具', 'game.usegoods(%1,%2);', '使用道具', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@道具资源名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strGoodsDirName, 'darkgreen'],
                ],
            },
            //   '装备道具':
            {
                command: ['装备道具', 'game.equip(%1,%2);', '装备道具', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@道具资源名', 'string', true, 1, GameMakerGlobal.config.strProjectRootPath + GameMakerGlobal.separator + GameMakerGlobal.config.strCurrentProjectName + GameMakerGlobal.separator + GameMakerGlobal.config.strGoodsDirName, 'darkgreen'],
                ],
            },
            //  '卸下装备':
            {
                command: ['卸下装备', 'game.unload(%1,%2);', '卸下装备', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@部位', 'string', true, 2, [['武器', '头戴', '身穿', '鞋子'], ['武器', '头戴', '身穿', '鞋子']], 'darkgreen'],
                ],
            },
            // '装备信息':
            {
                command: ['装备信息', 'game.equipment(%1,%2);', '装备信息', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@战斗角色游戏名', 'string|number', true, 2, [['战斗角色游戏名', '下标（数字）'], ['名字', '0']], 'darkgreen'],
                    ['*@部位', 'string', '', 2, [['武器', '头戴', '身穿', '鞋子', '所有'], ['武器', '头戴', '身穿', '鞋子', '']], 'darkgreen'],
                ],
            },

            // 交易
            {
                command: ['交易', 'game.trade(%1,%2);', '交易', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*道具列表', 'json', true, 0, '[]', 'darkgreen'],
                    ['回调函数', 'code', undefined, 0, 'function*(){}', 'darkgreen'],
                ],
            },

            // 获得金钱':
            {
                command: ['获得金钱', 'game.money(%1);', '获得金钱', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['金钱', 'number', '0', 0, '', 'green'],
                ],
            },
            //改变物品
            {
                command: ['改变物品(单属性)', `for(let g of game.gd["$sys_goods"]) {    
                if(g.%1 === %2) {  
                    g.%3 = %4;
                }`, '改变物品', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@定位属性', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], 'darkgreen'],
                    ['定位属性的值', 'string|number', true, 0, '', 'blue'],
                    ['*@改变属性', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], '#FFA1C102'],
                    ['改变属性的值', 'string|number', true, 0, '', '#FF51A7F7'],
                    ['注意：改变的物品是背包内的<br>通过定位属性与定位属性的值来确定想要改变的物品<br>比如定位属性为：名字，值你写：新手剑，那么就是背包内名叫：新手剑的物品<br>比如定位属性为：卖出价格，值你写：10，那么就是背包内一件卖出价格为10金钱的物品<br>改变属性与改变属性的值就是改变后的<br>你可以定位名字确定物品，然后改变名字或改变价格等等都可以', 'label'],
                ],
            },
            {
                command: ['改变物品(多属性)', `for(let g of game.gd["$sys_goods"]) {    
                if(g.%1 === %2 && g.%3 === %4) {  
                    g.%5 = %6;
                }`, '改变物品', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@定位属性1', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], 'darkgreen'],
                    ['定位属性的值1', 'string|number', true, 0, '', 'blue'],
                    ['*@定位属性2', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], 'darkgreen'],
                    ['定位属性的值2', 'string|number', true, 0, '', 'blue'],
                    ['*@改变属性', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], '#FFA1C102'],
                    ['改变属性的值', 'string|number', true, 0, '', '#FF51A7F7'],
                    ['注意：改变的物品是背包内的<br>通过定位属性与定位属性的值来确定想要改变的物品<br>比如定位属性为：名字，值你写：新手剑，那么就是背包内名叫：新手剑的物品<br>比如定位属性为：卖出价格，值你写：10，那么就是背包内一件卖出价格为10金钱的物品<br>改变属性与改变属性的值就是改变后的<br>你可以定位名字确定物品，然后改变名字或改变价格等等都可以', 'label'],
                ],
            },
            {
                command: ['改变物品(自定义)', `for(let g of game.gd["$sys_goods"]) {    
                if(g.%1 === %2 %3) {  
                    g.%4 = %5;
                    %6
                }`, '改变物品', 0, true, 'red', '#FFDBEF83'],
                params: [
                    ['*@定位属性', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], 'darkgreen'],
                    ['定位属性的值', 'string|number', true, 0, '', 'blue'],
                    ['增加定位', 'name', '', 2, '', '#FFFF96C1'],
                    ['*@改变属性', 'name', '', 2, [['名字', '描述', '卖出价格', '′分类', '装备位置', '附加技能', '战斗技能', '颜色', '是否叠加'], ['$name', '$description', '$price[1]', '$type', '$position', '$skills', '$fight', '$color', '$stackable']], '#FFA1C102'],
                    ['改变属性的值', 'string|number', true, 0, '', '#FF51A7F7'],
                    ['增加改变', 'name', '', 2, '', '#FFEE96FF'],
                    ['增加定位与增加改变如果不填与 命令改变物品(单属性)是一样的<br>这里填写就是自己再写一遍定位与改变的代码<br>比如定位属性写好是$name 值你写的是新手剑，增加定位就是这样写 && $name === "新手剑"(注意&&符号必须要的)<br>比如改变属性写好是$name 值你写 新手剑;，增加改变就是  $name === "新手剑";(注意最后的 ; 符号，必须有)<br>至于为啥不直接给选择，是因为写代码可以只增加一个也可以增加两个三个等等', 'label'],
                    ['注意：改变的物品是背包内的<br>通过定位属性与定位属性的值来确定想要改变的物品<br>比如定位属性为：名字，值你写：新手剑，那么就是背包内名叫：新手剑的物品<br>比如定位属性为：卖出价格，值你写：10，那么就是背包内一件卖出价格为10金钱的物品<br>改变属性与改变属性的值就是改变后的<br>你可以定位名字确定物品，然后改变名字或改变价格等等都可以', 'label'],
                ],
            },
        ];



    return {groupInfo, commandInfos};

})();
