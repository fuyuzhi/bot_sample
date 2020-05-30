//auto.waitFor();
//var appName = "掌心泥巴-西游记";
//launchApp(appName);
//sleep(10000);
//toast("app loaded");

//if(className("android.widget.TextView").text("进入游戏").exists()){
//  className("android.widget.TextView").text("进入游戏").findOne().click();
//} else {
//    toast("cannot find");
//}

auto.waitFor();
var Maid = require("./Maid.js");
var maid = new Maid("com.palmmud.xyjclient");
//var Unlock = require("./common/Unlock.js");
//var unlock = new Unlock();
maid.before();
//unlock.unlock();
maid.sleep(2);


//maid.kill();
//maid.sleep(2);
//maid.launchActivity("com.tencent.weread.WeReadFragmentActivity");
//maid.sleep(3);
maid.clickTextCenter("竞技奖励");
maid.sleep(1);
maid.clickTextCenter("进入竞技场");

maid.sleep(120);
maid.clickTextCenter("场景");
maid.sleep(2);
maid.clickTextCenter("凤还巢");
maid.sleep(2);
maid.clickTextCenter("碧玉寒冰床");
maid.sleep(2);
maid.clickTextCenter("魂游");



//maid.sleep(2);
//maid.clickRegTextCenter("免费领取.*天无限卡");
//maid.sleep(2);
//maid.clickRegTextCenter("分享领取.*天无限卡");
//maid.sleep(2);
//maid.back();
//maid.sleep(2);
//maid.clickTextCenter("退出");
//maid.sleep(2);
//maid.kill();
//maid.after();