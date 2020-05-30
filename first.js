auto.waitFor();

var Maid = require("./Maid.js");
var maid = new Maid("com.palmmud.xyjclient");
maid.before();
maid.sleep(2);


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

maid.kill();
maid.after();
