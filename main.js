//游戏开始脚本（开始时调用）
function* $start() {
    I18n.init();
    if (!game.cd['i18nStatus']) console.error("[I18n]","语言加载失败");
    yield game.msg(I18n.c("helloWorld"));
    yield game.msg(I18n.c("v",Math.floor(Math.random() * (20 - 10)),Math.floor(Math.random() * (20 - 10))));
    yield game.msg(I18n.f("main","title",game.gf['i18nVersion']));
    yield game.msg(I18n.info(0));
    const status = I18n.changeLanguage("zh");
    if (status) yield game.msg(game.cd['i18nLanguage']);

}
