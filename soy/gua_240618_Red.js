/*
240618red
加密
脚本锁佣建议用新的京粉号
https://u.jd.com/xxxxxxx

返利变量：JD_240618_RedRebateCode，若需要返利给自己，请自己修改环境变量[JD_240618_RedRebateCode]
xxxxxxx换成自己的返利 就是链接后面那7位字母
export JD_240618_RedRebateCode="xxxxxxx"

每次脚本领取红包次数
export JD_240618_RedCount="0"
0=不限制 1=领取1次
每个账号之间等待时间单位毫秒 默认15秒
1000=1秒
export JD_240618_RedTimes="15000"
export JD_240618_Red_proxy='' 代理池URL多个请用|隔开
返回的格式为：ip:port
如果有账号密码的话格式为：ip:port:username:password
export JD_240618_proxyReceiveCount='10' 使用代理领取账号大于 10 切换ip 填数字
export JD_240618_Red_taskFlag='true' 执行打卡任务 true=执行 false=不执行 默认执行

0 0,10,20 * * * https://raw.githubusercontent.com/smiek2121/scripts/master/gua_240618_Red.js 240618red

*/

let rebateCodes = ''; // 返利变量
let redTimes = 10000 // 等待时间单位毫秒
let redCount = 0 // 领取次数
let shareHelpCount = 0 // 助力次数 0=默认 1=1次满 2=2次满
let proxyGetIpUrl = '' // // 代理池URL多个请用|隔开
let proxyReceiveCount = 10 // 使用代理领取账号大于 10 切换ip
let taskFlag = true // 执行打卡任务 true=执行 false=不执行



const $ = new Env('240618red');

const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : ''
$.CryptoJS = require('crypto-js')
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
        }
 let I1Il11iI = "";
if (!rebateCodes) rebateCodes = "https://u.jd.com/kigiNLk";
if (!I1Il11iI) I1Il11iI = "";
rebateCodes = $.isNode() ? process.env.JD_240618_RedRebateCode ? process.env.JD_240618_RedRebateCode : "" + rebateCodes : $.getdata("JD_240618_RedRebateCode") ? $.getdata("JD_240618_RedRebateCode") : "" + rebateCodes;
I1Il11iI = $.isNode() ? process.env.JD_nhj_rebatePin ? process.env.JD_nhj_rebatePin : "" + I1Il11iI : $.getdata("JD_nhj_rebatePin") ? $.getdata("JD_nhj_rebatePin") : "" + I1Il11iI;
redCount = $.isNode() ? process.env.JD_240618_RedCount ? process.env.JD_240618_RedCount : "" + redCount : $.getdata("JD_240618_RedCount") ? $.getdata("JD_240618_RedCount") : "" + redCount;
redTimes = $.isNode() ? process.env.JD_240618_RedTimes ? process.env.JD_240618_RedTimes : "" + redTimes : $.getdata("JD_240618_RedTimes") ? $.getdata("JD_240618_RedTimes") : "" + redTimes;
$.shareCount = $.isNode() ? process.env.JD_nhj_shareHelpCount ? process.env.JD_nhj_shareHelpCount : "" + shareHelpCount : $.getdata("JD_nhj_shareHelpCount") ? $.getdata("JD_nhj_shareHelpCount") : "" + shareHelpCount;
proxyReceiveCount = $.isNode() ? process.env.JD_240618_proxyReceiveCount ? process.env.JD_240618_proxyReceiveCount : "" + proxyReceiveCount : $.getdata("JD_240618_proxyReceiveCount") ? $.getdata("JD_240618_proxyReceiveCount") : "" + proxyReceiveCount;
proxyGetIpUrl = $.isNode() ? process.env.JD_240618_Red_proxy ? process.env.JD_240618_Red_proxy : proxyGetIpUrl : $.getdata("JD_240618_Red_proxy") ? $.getdata("JD_240618_Red_proxy") : proxyGetIpUrl;
taskFlag = $.isNode() ? process.env.JD_240618_Red_taskFlag ? process.env.JD_240618_Red_taskFlag : taskFlag : $.getdata("JD_240618_Red_taskFlag") ? $.getdata("JD_240618_Red_taskFlag") : taskFlag;
$.shareCount = parseInt($.shareCount, 10) || 0;
let I1l1iiIi = I1Il11iI && I1Il11iI.split(",") || [],
  lli11 = rebateCodes + "";
$.time("yyyy-MM-dd HH:mm:ss");
message = "";
let l1lIllii = "";
resMsg = "";
$.uiUpdateTime = "";
$.endFlag = false;
$.runEnd = false;
let iI1Ii = {};
$.getH5st_WQ_Arr = {};
$.runArr = {};
let liIIIlIi = {};
const ll1l1Il1 = "2024/06/19 00:00:00+08:00";
let I1llIiIl = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
$.UVCookieArr = {};
lr = {};
$.UVCookie = "";
let IIllIi = "",
  IIll1iI = 4;
redTimes = Number(redTimes);
proxyReceiveCount = Number(proxyReceiveCount);
$.time("yyyy-MM-dd");
const li1IIii = require("request");
var IlI11IlI = "";
try {
  IlI11IlI = require("tunnel");
} catch (iI111I1I) {
  console.log("请安装模块\"tunnel\"\n");
}
var ilI1Il11 = "";
try {
  var {
    SocksProxyAgent: ilI1Il11
  } = require("socks-proxy-agent");
} catch (l1liIii1) {
  console.log("如果有用socks代理请安装模块\"socks-proxy-agent\"\n没有的话请忽略！\n");
}
let liIiiili = false;
$.proxyArrCount = 20;
$.proxyArrOrder = 0;
$.proxyArrIndex = -1;
if (proxyGetIpUrl) proxyGetIpUrl = proxyGetIpUrl.split("|").map(function (II1I1iii, ll1II1lI, l1i1lIII) {
  return {
    "url": II1I1iii,
    "index": ll1II1lI + 1,
    "status": true,
    "count": 0,
    "errorCount": 0
  };
});
$.proxyArrAll = {};
$.proxyArr = {};
proxyGetIpUrl.length > 0 && (liIiiili = true);
liIiiili && console.log("开启代理");
$.switchProxies = false;
const il1IiI11 = {
  "exports": {}
};
II1Il1ii();
ll11Ii();
!(async () => {
  if (/https:\/\/u\.jd\.com\/.+/.test(lli11)) {
    if (lli11.split("/").pop()) lli11 = lli11.split("/").pop().split("?").shift();else {
      console.log("请填写正确的rebateCode");
      return;
    }
  }
  if (!cookiesArr[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  if (I1llIiIl > new Date(ll1l1Il1).getTime()) {
    $.msg($.name, "活动已结束", "请删除此脚本");
    $.setdata("", "JD_240618_Red");
    $.setdata("", "JD_240618_Red_pin");
    return;
  }
  console.log("当前版本：2024年5月30日");
  console.log("返利码：" + lli11.replace(/.+(.{3})/, "***$1") + "\n");
  $.shareCodeArr = {};
  $.shareCodePinArr = $.getdata("JD_240618_Red_pin") || {};
  $.shareCode = "";
  $.again = false;
  $.taskPinArr = {};
  if ($.end) return;
  for (let llIillIi = 0; llIillIi < cookiesArr.length && !$.runEnd; llIillIi++) {
    if ($.endFlag) break;
    cookie = cookiesArr[llIillIi];
    if (cookie) {
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = llIillIi + 1;
      if ($.runArr[$.UserName]) continue;
      console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let ill1IllI = 1;
      IIll1iI = 4;
      !cookie.includes("app_open") && (ill1IllI = 2, IIll1iI = 2);
      typeof $.proxyArr.pin == "object" && $.proxyArr.pin.length >= proxyReceiveCount && ($.switchProxies = true);
      $.eid_token = "";
      await IIiliil1(true, ill1IllI);
      await i1II1lI();
      await IIll1ilI();
      if ($.endFlag) break;
    }
    $.setdata($.shareCodePinArr, "JD_240618_Red_pin");
  }
  $.setdata($.shareCodePinArr, "JD_240618_Red_pin");
  if (message) {
    $.msg($.name, "", "红包详情：\n" + message + "\nhttps://u.jd.com/" + lli11 + "\n\n跳转到app 可查看助力情况");
    if ($.isNode()) {}
  }
  message = "";
  if (Object.getOwnPropertyNames($.taskPinArr).length > 0) {
    console.log("\n\n开始做任务");
    liIiiili = false;
    $.proxyArr = {};
    for (let il1l1Ill = 0; il1l1Ill < cookiesArr.length; il1l1Ill++) {
      cookie = cookiesArr[il1l1Ill];
      if (cookie) {
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = il1l1Ill + 1;
        if (!$.taskPinArr[$.UserName]) continue;
        console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        let iiIiilI1 = 1;
        !cookie.includes("app_open") && (iiIiilI1 = 2);
        await IIiliil1(true, iiIiilI1);
        await i1II1lI();
        await iI1llI1i();
      }
    }
    if (message) {
      $.msg($.name, "", "任务详情：\n" + message);
      if ($.isNode()) {}
    }
  }
})().catch(IliI11li => $.logErr(IliI11li)).finally(() => {
  $.done();
});
async function IIll1ilI(ii1iilII = 0) {
  try {
    ii1iilII == 0 && (liIIIlIi.c822a = ii1IIi1I("c822a", $.UA), await liIIIlIi.c822a.__genAlgo());
    $.UVCookie = $.UVCookieArr[$.UserName] || "";
    !$.UVCookie && ll11Ii();
    resMsg = "";
    let i1Ii1lI = false,
      l111I1l = 0,
      ll1liIiI = 0,
      IIlIllI = 0;
    $.shareFlag = true;
    do {
      if (ll1liIiI > 2) l111I1l = 0;
      $.flag = 0;
      l1lIllii = "";
      $.url1 = "";
      await llIilIii();
      if (!$.url1) {
        console.log("获取url1失败");
        $.end = true;
        break;
      }
      $.url2 = "";
      $.UVCookie = IIllIi.getUVCookie("", "", $.url1, $.UVCookie);
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      await illl1lI1();
      if (!$.url2) {
        console.log("获取不到红包页面");
        break;
      }
      if (!/unionActId=\d+/.test($.url2) && !new RegExp("&d=" + lli11).test($.url2)) {
        console.log("改返利url：https://u.jd.com/" + lli11 + " 可能不是红包页面");
        $.runEnd = true;
        return;
      }
      if (!$.url2) $.url2 = "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html?unionActId=31177&d=" + lli11 + "&cu=true&utm_source=kong&utm_medium=jingfen";
      $.actId = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/mall\/active\/([^/]+)\/index\.html/)[1] || "3Rztcv2tMwdpFqWiqaAUzBAToowC";
      $.UVCookie = IIllIi.getUVCookie("", "", $.url2, $.UVCookie);
      $.origin = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "https://pro.m.jd.com";
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      $.eid = "";
      !$.eid && ($.eid = -1);
      if (ii1iilII == 0) {
        let lliillIi = 0,
          llii1II1 = true,
          iIIII1ii = 0;
        if (Object.getOwnPropertyNames(iI1Ii).length > l111I1l && $.shareFlag) for (let iill1i11 in iI1Ii || {}) {
          if (iill1i11 == $.UserName) {
            $.flag = 1;
            continue;
          }
          if (lliillIi == l111I1l) {
            $.flag = 0;
            $.shareCode = iI1Ii[iill1i11] || "";
            if ($.shareCodePinArr[iill1i11] && $.shareCodePinArr[iill1i11].includes($.UserName)) {
              iIIII1ii++;
              continue;
            }
            if ($.shareCode.count >= $.shareCodeArr.shareCount) {
              iIIII1ii++;
              continue;
            }
            $.getlj = false;
            if ($.shareCode) console.log("助力[" + iill1i11 + "]");
            let iIliIli = await iiI1il($.shareCode.code, 1);
            if (/重复助力/.test(iIliIli)) {
              if (!$.shareCodePinArr[iill1i11]) $.shareCodePinArr[iill1i11] = [];
              $.shareCodePinArr[iill1i11].push($.UserName);
              l111I1l--;
              IIlIllI--;
            } else {
              if (/助力/.test(iIliIli) && /上限/.test(iIliIli)) $.shareFlag = false;else {
                if (!/领取上限/.test(iIliIli) && $.getlj == true) {
                  if (!$.shareCodePinArr[iill1i11]) $.shareCodePinArr[iill1i11] = [];
                  !$.shareCodePinArr[iill1i11].includes($.UserName) && $.shareCodePinArr[iill1i11].push($.UserName);
                  l111I1l--;
                } else llii1II1 = false;
              }
            }
          }
          lliillIi++;
        }
        llii1II1 && iIIII1ii == Object.getOwnPropertyNames(iI1Ii).length && (i1Ii1lI = true);
        if (lliillIi == 0) {
          $.getlj = false;
          let I1I1Ili = await iiI1il("", 1);
          !/领取上限/.test(I1I1Ili) && $.getlj == true && l111I1l--;
        }
        if ($.endFlag) break;
      } else {
        let IllIllI = await IIiiI1l();
        if (!$.endFlag && IllIllI && $.again == false) await IliIlIII();
        if ($.again == false) break;
      }
      $.again == true && ll1liIiI < 1 && (ll1liIiI++, $.again = false);
      l111I1l++;
      IIlIllI++;
      $.flag == 1 && (await $.wait(parseInt(Math.random() * 500 + 100, 10)));
      if (redCount > 0 && redCount <= IIlIllI) break;
    } while ($.flag == 1 && l111I1l < 4);
    if ($.endFlag) return;
    resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
    if (i1Ii1lI) {}
    if (!$.proxyArr.host) {
      let i111llli = parseInt(Math.random() * 1000 + redTimes, 10);
      console.log("等待 " + i111llli / 1000 + " 秒");
      await $.wait(i111llli);
    }
  } catch (IliIIil1) {
    console.log(IliIIil1);
  }
}
async function iiliIl1i(Illliii1 = 0) {
  try {
    let l1l = 2;
    if (Illliii1 == 1) l1l = 1;
    let Il11i1 = 0;
    for (let lll1il1 in $.shareCodeArr || {}) {
      if (lll1il1 === "flag" || lll1il1 === "updateTime" || lll1il1 === "shareCount") continue;
      if ($.shareCodeArr[lll1il1] && $.shareCodeArr.shareCount && $.shareCodeArr[lll1il1].count < $.shareCodeArr.shareCount) Il11i1++;
    }
    for (let iillII11 = 0; iillII11 < cookiesArr.length && !$.runEnd; iillII11++) {
      cookie = cookiesArr[iillII11];
      if (cookie) {
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        if (I1l1iiIi.length > 0 && I1l1iiIi.indexOf($.UserName) == -1 || $.shareCodeArr[$.UserName]) continue;
        $.index = iillII11 + 1;
        $.eid_token = "";
        await IIiliil1();
        await i1II1lI();
        await IIll1ilI(1);
        let IlI11III = 0;
        for (let i1I1I11I in $.shareCodeArr || {}) {
          if (i1I1I11I === "flag" || i1I1I11I === "updateTime" || i1I1I11I === "shareCount") continue;
          if ($.shareCodeArr[i1I1I11I] && $.shareCodeArr.shareCount && $.shareCodeArr[i1I1I11I].count < $.shareCodeArr.shareCount) IlI11III++;
        }
        if ($.endFlag || IlI11III - Il11i1 >= l1l || $.end) break;
      }
    }
  } catch (llllI1II) {
    console.log(llllI1II);
  }
  if (Object.getOwnPropertyNames($.shareCodeArr).length > 0) for (let IiiliIl in $.shareCodeArr || {}) {
    if (IiiliIl === "flag" || IiiliIl === "updateTime" || IiiliIl === "shareCount") continue;
    if ($.shareCodeArr[IiiliIl]) iI1Ii[IiiliIl] = $.shareCodeArr[IiiliIl];
  }
}
function iiI1il(I1liiiii = "", IlI111Ii = 1) {
  return new Promise(async ilII => {
    $.UVCookie = IIllIi.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let lIIillIi = "",
      IliII1i1 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const iilI1II = {
        "platform": IIll1iI,
        "unionActId": "31177",
        "actId": $.actId,
        "d": lli11,
        "unionShareId": I1liiiii,
        "type": IlI111Ii,
        "qdPageId": "MO-J2011-1",
        "mdClickId": "jxhongbao_ck",
        "actType": 1
      },
      li1iIlI1 = {
        "appid": "u_hongbao",
        "body": JSON.stringify(iilI1II),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "getCoupons"
      };
    let ii1l1Ii1 = liIIIlIi.c822a.__genH5st(li1iIlI1, $.UserName);
    lIIillIi = ii1l1Ii1.h5st || "";
    let I1I1Il1i = "",
      l1ilIlII = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + li1iIlI1.appid + "&_=" + IliII1i1 + "&loginType=2&body=" + $.toStr(iilI1II) + "&client=" + li1iIlI1.client + "&clientVersion=" + li1iIlI1.clientVersion + "&h5st=" + lIIillIi + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=Babel_H5FirstClick; " + $.UVCookie + l1lIllii + " " + cookie,
          "origin": $.origin,
          "Referer": $.origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    l1ilIlII.headers.Cookie = l1ilIlII.headers.Cookie.replace(/;\s*$/, "");
    l1ilIlII.headers.Cookie = l1ilIlII.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) l1ilIlII.headers.Referer = $.url2;
    l1ilIlII = liI1Iiil(l1ilIlII);
    var iIIlIi1I = $;
    if (li1IIii && $.proxyArr.type && $.proxyArr.type == "socks") iIIlIi1I = li1IIii;
    iIIlIi1I.post(l1ilIlII, async (i1II1iI, i1iiIl11, lillIlil) => {
      try {
        if (i1II1iI) {
          var II1Iiiil = I111i1Ii(i1II1iI, i1iiIl11);
          console.log("" + $.toStr(i1II1iI));
          console.log($.name + " getCoupons API请求失败，请检查网路重试");
          if (II1Iiiil) {
            await IIiliil1(false);
            if (!$.switchProxies) await iiI1il(...arguments);
          }
        } else {
          let I1lIllll = $.toObj(lillIlil, lillIlil);
          if (typeof I1lIllll == "object") {
            I1lIllll.msg && (I1I1Il1i = I1lIllll.msg, console.log(I1lIllll.msg));
            if (I1lIllll.msg.indexOf("不展示弹层") > -1 && IlI111Ii == 1) $.again = true;
            if (I1lIllll.msg.indexOf("领取上限") === -1 && I1lIllll.msg.indexOf("登录") === -1) {
              if (IlI111Ii == 1) $.flag = 1;
            }
            if (I1lIllll.msg.indexOf("活动已结束") > -1 || I1lIllll.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            I1liiiii && typeof I1lIllll.data !== "undefined" && typeof I1lIllll.data.joinNum !== "undefined" && console.log("当前" + I1lIllll.data.joinSuffix + ":" + I1lIllll.data.joinNum);
            if (I1lIllll.code == 0 && I1lIllll.data) {
              IlI111Ii == 1 && (typeof $.proxyArr.pin == "object" && !$.proxyArr.pin.includes($.UserName) && $.proxyArr.pin.push($.UserName), $.shareCode.count++);
              let II1iIIII = "";
              for (let illIiIl1 of I1lIllll.data.couponList) {
                II1iIIII += "" + (II1iIIII ? "\n" : "");
                $.getlj = true;
                if (illIiIl1.type == 1) II1iIIII += "获得[红包]🧧" + illIiIl1.discount + "元 使用时间:" + $.time("yyyy-MM-dd", illIiIl1.beginTime) + " " + $.time("yyyy-MM-dd", illIiIl1.endTime);else {
                  if (illIiIl1.type == 3) II1iIIII += "获得[优惠券]🎟️满" + illIiIl1.quota + "减" + illIiIl1.discount + " 使用时间:" + $.time("yyyy-MM-dd", illIiIl1.beginTime) + " " + $.time("yyyy-MM-dd", illIiIl1.endTime);else {
                    if (illIiIl1.type == 6) II1iIIII += "获得[打折券]🎫满" + illIiIl1.quota + "打" + illIiIl1.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", illIiIl1.beginTime) + " " + $.time("yyyy-MM-dd", illIiIl1.endTime);else {
                      if (illIiIl1.type == 17) II1iIIII += "获得[" + (illIiIl1.shopName || "京东支付立减") + "] " + (illIiIl1.limitStr && illIiIl1.limitStr + " " || "") + "领取之日起" + illIiIl1.limitTime + "天有效";else {
                        var IilI1Iii = "未知";
                        II1iIIII += "获得[" + (illIiIl1.shopName || IilI1Iii) + "] " + $.toStr(illIiIl1, illIiIl1);
                      }
                    }
                  }
                }
              }
              II1iIIII && (resMsg += II1iIIII + "\n", console.log(II1iIIII));
            }
            if (IlI111Ii == 1 && typeof I1lIllll.data !== "undefined" && typeof I1lIllll.data.groupData !== "undefined" && typeof I1lIllll.data.groupData.groupInfo !== "undefined") {
              var Iill1lIi = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let l1lI1lI1 of I1lIllll.data.groupData.groupInfo || []) {
                if (l1lI1lI1.status == 2) console.log("打卡满可以领取" + l1lI1lI1.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await iiI1il("", 3);else taskFlag + "" === "true" && l1lI1lI1.status == 1 && Iill1lIi == $.time("d", l1lI1lI1.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31177",
                  "platform": IIll1iI,
                  "d": lli11,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + l1lIllii + " " + cookie
                });
              }
            }
          } else console.log(lillIlil);
        }
      } catch (I1Illi) {
        $.logErr(I1Illi, i1iiIl11);
      } finally {
        ilII(I1I1Il1i);
      }
    });
  });
}
function IIiiI1l(Ililil1i = "") {
  let lii11ll1 = true;
  return new Promise(illIiiI => {
    $.UVCookie = IIllIi.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let Il1lIll = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var III1Illi = {
      "actId": $.actId,
      "unionActId": "31177",
      "platform": IIll1iI,
      "unionShareId": Ililil1i,
      "uiUpdateTime": $.uiUpdateTime,
      "d": lli11,
      "callType": 2
    };
    let lIIiIlll = {
      "url": "https://api.m.jd.com/api?functionId=showCoupon&appid=u_hongbao&_=" + Il1lIll + "&loginType=2&body=" + $.toStr(III1Illi) + "&client=apple&clientVersion=" + ($.UA.split(";")[2] || "1.1.0") + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "" + $.UVCookie + l1lIllii + " " + cookie,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    lIIiIlll.headers.Cookie = lIIiIlll.headers.Cookie.replace(/;\s*$/, "");
    lIIiIlll.headers.Cookie = lIIiIlll.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) lIIiIlll.headers.Referer = $.url2;
    lIIiIlll = liI1Iiil(lIIiIlll);
    var ii1lIi11 = $;
    if (li1IIii && $.proxyArr.type && $.proxyArr.type == "socks") ii1lIi11 = li1IIii;
    ii1lIi11.get(lIIiIlll, async (i1lIiI1l, IiliIiIi, i1Ii1lli) => {
      try {
        if (i1lIiI1l) {
          var lIIIiIi = I111i1Ii(i1lIiI1l, IiliIiIi);
          console.log("" + $.toStr(i1lIiI1l));
          console.log($.name + " showCoupon API请求失败，请检查网路重试");
          if (lIIIiIi) {
            await IIiliil1(false);
            if (!$.switchProxies) await IIiiI1l(...arguments);
          }
        } else {
          let lI1IIi = $.toObj(i1Ii1lli, i1Ii1lli);
          if (typeof lI1IIi == "object") {
            if (lI1IIi.msg) console.log(lI1IIi.msg);
            if (lI1IIi.msg.indexOf("不展示弹层") > -1) $.again = true;
            if (lI1IIi.msg.indexOf("领取上限") > -1) $.runArr[$.UserName] = true;
            lI1IIi.msg.indexOf("上限") === -1 && lI1IIi.msg.indexOf("登录") === -1 && ($.flag = 1);
            if (lI1IIi.msg.indexOf("活动已结束") > -1 || lI1IIi.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            if (lI1IIi.data.uiUpdateTime) $.uiUpdateTime = lI1IIi.data.uiUpdateTime;
            if (typeof lI1IIi.data !== "undefined" && typeof lI1IIi.data.groupData !== "undefined" && typeof lI1IIi.data.groupData.joinNum !== "undefined") {
              $.joinNum = lI1IIi.data.groupData.joinNum;
              let ili1liIi = 0;
              for (let IiIIl1 of lI1IIi.data.groupData.groupInfo) {
                if (ili1liIi < IiIIl1.num) ili1liIi = IiIIl1.num;
              }
              if ($.shareCount > 0 && ili1liIi > $.shareCount) ili1liIi = $.shareCount;
              $.shareCodeArr[$.UserName] && ($.shareCodeArr[$.UserName].count = ili1liIi);
              $.shareCodeArr.shareCount = ili1liIi;
              if (ili1liIi <= $.joinNum) {
                if (!$.shareCodeArr[$.UserName]) $.shareCodeArr[$.UserName] = {};
                $.shareCodeArr[$.UserName].count = $.joinNum;
                lii11ll1 = false;
              }
              console.log("【账号" + $.index + "】" + ($.nickName || $.UserName) + " " + $.joinNum + "/" + ili1liIi + "人");
            }
            lI1IIi.msg.indexOf("活动已结束") > -1 && (lii11ll1 = false);
            if (typeof lI1IIi.data !== "undefined" && typeof lI1IIi.data.groupData !== "undefined" && typeof lI1IIi.data.groupData.groupInfo !== "undefined") {
              var lI1lIi = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let I11I1III of lI1IIi.data.groupData.groupInfo || []) {
                if (I11I1III.status == 2) console.log("打卡满可以领取" + I11I1III.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await iiI1il("", 3);else taskFlag + "" === "true" && I11I1III.status == 1 && lI1lIi == $.time("d", I11I1III.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31177",
                  "platform": IIll1iI,
                  "d": lli11,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + l1lIllii + " " + cookie
                });
              }
            }
          } else console.log(i1Ii1lli);
        }
      } catch (lilii1) {
        $.logErr(lilii1, IiliIiIi);
      } finally {
        illIiiI(lii11ll1);
      }
    });
  });
}
function IliIlIII() {
  if ($.shareCodeArr[$.UserName]) {
    console.log("【账号" + $.index + "】缓存分享码:" + $.shareCodeArr[$.UserName].code.replace(/.+(.{3})/, "***$1"));
    return;
  }
  return new Promise(async iIIIIIli => {
    let Iliil1I = "",
      l11l1lII = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const i1IIIlIi = {
        "unionActId": "31177",
        "actId": $.actId,
        "platform": IIll1iI,
        "unionShareId": "",
        "d": lli11,
        "supportPic": 2
      },
      l11Il1Il = {
        "appid": "u_hongbao",
        "body": JSON.stringify(i1IIIlIi),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    liIIIlIi.c10dc = ii1IIi1I("c10dc", $.UA);
    await liIIIlIi.c10dc.__genAlgo();
    let l11l1ii = liIIIlIi.c10dc.__genH5st(l11Il1Il, $.UserName);
    Iliil1I = l11l1ii.h5st || "";
    let IliIIi1i = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + l11Il1Il.appid + "&_=" + l11l1lII + "&loginType=2&body=" + $.toStr(i1IIIlIi) + "&client=" + l11Il1Il.client + "&clientVersion=" + l11Il1Il.clientVersion + "&h5st=" + Iliil1I + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "" + $.UVCookie + l1lIllii + " " + cookie,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    IliIIi1i.headers.Cookie = IliIIi1i.headers.Cookie.replace(/;\s*$/, "");
    IliIIi1i.headers.Cookie = IliIIi1i.headers.Cookie.replace(/;([^\s])/g, "; $1");
    IliIIi1i = liI1Iiil(IliIIi1i);
    var lIiI1il = $;
    if (li1IIii && $.proxyArr.type && $.proxyArr.type == "socks") lIiI1il = li1IIii;
    lIiI1il.get(IliIIi1i, async (ii11IlI1, liiIIlil, IIii1l1i) => {
      try {
        if (ii11IlI1) {
          var IllIl1I1 = I111i1Ii(ii11IlI1, liiIIlil);
          console.log("" + $.toStr(ii11IlI1));
          console.log($.name + " shareUnionCoupon API请求失败，请检查网路重试");
          if (IllIl1I1) {
            await IIiliil1(false);
            if (!$.switchProxies) await IliIlIII();
          }
        } else {
          let I1III1i1 = $.toObj(IIii1l1i, IIii1l1i);
          if (typeof I1III1i1 == "object") {
            if (I1III1i1.code == 0 && I1III1i1.data && I1III1i1.data.shareUrl) {
              let llllliil = I1III1i1.data.shareUrl.match(/\?s=([^&]+)/) && I1III1i1.data.shareUrl.match(/\?s=([^&]+)/)[1] || "";
              llllliil && (console.log("【账号" + $.index + "】分享码：" + llllliil.replace(/.+(.{3})/, "***$1")), $.shareCodeArr[$.UserName] = {
                "code": llllliil,
                "count": $.joinNum
              });
            }
          } else console.log(IIii1l1i);
        }
      } catch (ili1lIIl) {
        $.logErr(ili1lIIl, liiIIlil);
      } finally {
        iIIIIIli();
      }
    });
  });
}
function illl1lI1() {
  return new Promise(I1lii11I => {
    let iIlI1ii = {
      "url": $.url1,
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + l1lIllii + " " + cookie,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var l1111lI1 = $;
    l1111lI1.get(iIlI1ii, async (Ill1IiI1, llIlil1l, l11lIl) => {
      try {
        if (Ill1IiI1) {
          var iIllIlIi = I111i1Ii(Ill1IiI1, llIlil1l);
          console.log("" + $.toStr(Ill1IiI1));
          console.log($.name + " getUrl1 API请求失败，请检查网路重试");
          if (iIllIlIi) {
            await IIiliil1(false);
            if (!$.switchProxies) await illl1lI1();
          }
        } else I111II1i(llIlil1l), $.url2 = llIlil1l && llIlil1l.headers && (llIlil1l.headers.location || llIlil1l.headers.Location || "") || "", $.url2 = decodeURIComponent($.url2), $.url2 = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[1] || "";
      } catch (i11llliI) {
        $.logErr(i11llliI, llIlil1l);
      } finally {
        I1lii11I(l11lIl);
      }
    });
  });
}
function llIilIii() {
  return new Promise(Ili1illi => {
    let IiIl1lI1 = {
      "url": "https://u.jd.com/" + lli11 + ($.shareCode && "?s=" + $.shareCode || ""),
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + l1lIllii + " " + cookie,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var Il1l1IIi = $;
    Il1l1IIi.get(IiIl1lI1, async (ii1IIlI, iiII1ii, I1lIIi1i) => {
      try {
        if (ii1IIlI) {
          var ll1ii11i = I111i1Ii(ii1IIlI, iiII1ii);
          console.log("" + $.toStr(ii1IIlI));
          console.log($.name + " getUrl API请求失败，请检查网路重试");
          if (ll1ii11i) {
            await IIiliil1(false);
            if (!$.switchProxies) await llIilIii();
          }
        } else I111II1i(iiII1ii), $.url1 = I1lIIi1i && I1lIIi1i.match(/(https:\/\/u\.jd\.com\/jda[^']+)/) && I1lIIi1i.match(/(https:\/\/u\.jd\.com\/jda[^']+)/)[1] || "";
      } catch (IlIiIIlI) {
        $.logErr(IlIiIIlI, iiII1ii);
      } finally {
        Ili1illi(I1lIIi1i);
      }
    });
  });
}
async function iI1llI1i() {
  liIIIlIi["7b74b"] = ii1IIi1I("7b74b", $.UA);
  await liIIIlIi["7b74b"].__genAlgo();
  liIIIlIi["0d977"] = ii1IIi1I("0d977", $.UA);
  await liIIIlIi["0d977"].__genAlgo();
  resMsg = "";
  await IIl1llI();
  resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
}
function IIl1llI(iiIl1iIl = 1) {
  return new Promise(lI1i111 => {
    var II1i1ili = {
      "actId": $.taskPinArr[$.UserName].actId,
      "unionActId": $.taskPinArr[$.UserName].unionActId,
      "platform": $.taskPinArr[$.UserName].platform,
      "d": $.taskPinArr[$.UserName].d,
      "taskType": 1,
      "prstate": 0
    };
    let I1IiIlII = "",
      II11ii1 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const iIll11iI = {
      "appid": "u_hongbao",
      "body": JSON.stringify(II1i1ili),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.0.0",
      "functionId": "queryFullGroupInfoMap"
    };
    let i11I1Ii1 = liIIIlIi["7b74b"].__genH5st(iIll11iI, $.UserName);
    I1IiIlII = i11I1Ii1.h5st || "";
    let Ililiill = "https://api.m.jd.com/api?functionId=queryFullGroupInfoMap&appid=" + iIll11iI.appid + "&_=" + II11ii1 + "&loginType=2&body=" + $.toStr(II1i1ili) + "&client=" + iIll11iI.client + "&clientVersion=" + iIll11iI.clientVersion + "&h5st=" + I1IiIlII + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      I1il11ll = {
        "url": Ililiill,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var li1lIII = $;
    li1lIII.get(I1il11ll, async (ilI1IIll, ilI11i11, Illli1iI) => {
      try {
        if (ilI1IIll) console.log("" + $.toStr(ilI1IIll)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var ilIIlil = $.toObj(Illli1iI, Illli1iI);
          if (ilIIlil.code == 200 && ilIIlil.data) {
            if (iiIl1iIl == 2) {
              console.log("任务完成");
              if (iiIl1iIl == 2 && ilIIlil.data.longGroupData && ilIIlil.data.longGroupData.groupInfo.length > 0) {
                var llI1lli1 = ilIIlil.data.longGroupData.groupInfo;
                for (let l1i1Ill1 of llI1lli1 || []) {
                  l1i1Ill1.status == 2 && (console.log("打卡满可以领取" + l1i1Ill1.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await ilIiIliI("", 3));
                }
              }
            } else {
              if (iiIl1iIl == 1 && ilIIlil.data.dayGroupData && ilIIlil.data.dayGroupData.groupInfo.length > 0) {
                var llI1lli1 = ilIIlil.data.dayGroupData.groupInfo,
                  IiIilll = 0;
                for (let Ii1ii1l1 of llI1lli1) {
                  if (Ii1ii1l1.taskType == 2 && Ii1ii1l1.status == 2) IiIilll++, console.log("领取邀请 " + Number(Ii1ii1l1.joinNum) + " 人奖励"), await ilIiIliI("", 2), await $.wait(2000);else {
                    if (Ii1ii1l1.taskType == 100 && (Ii1ii1l1.status == 1 || Ii1ii1l1.status == 2)) Ii1ii1l1.status == 1 && (console.log("做任务", Ii1ii1l1.showInfo), await iIlIiiiI("", Ii1ii1l1.taskId), await $.wait(2000)), console.log("抽奖", Ii1ii1l1.showInfo), await ilIiIliI("", 8, Ii1ii1l1.taskId), await $.wait(2000);else {
                      if (Ii1ii1l1.adId && Ii1ii1l1.status == 1) {
                        console.log("做任务", Ii1ii1l1.showInfo, Ii1ii1l1.taskId);
                        await i1Iil1Ii(Ii1ii1l1.componentId, Ii1ii1l1.taskId, Ii1ii1l1.adInfo.target_url);
                        await $.wait(6000);
                        await IIl1llI(2);
                        await $.wait(2000);
                      } else {
                        if (Ii1ii1l1.taskType == 102 && Ii1ii1l1.status == 1) {
                          console.log("做任务", Ii1ii1l1.showInfo);
                          await $.wait(6000);
                          await Il1iiill(decodeURIComponent(Ii1ii1l1.taskTargetUrl));
                          await $.wait(2000);
                          await IIl1llI(2);
                        } else IiIilll++;
                      }
                    }
                  }
                }
                IiIilll >= llI1lli1.length && console.log("任务已经做完了");
              } else console.log("获取不到任务");
            }
          } else console.log(ilIIlil);
        }
      } catch (iiiIlIil) {
        $.logErr(iiiIlIil, ilI11i11);
      } finally {
        lI1i111(Illli1iI);
      }
    });
  });
}
function Il1iiill(lI1lIl1I) {
  return new Promise(async Iil11lll => {
    let il11iii = "";
    var lllIlii1 = ii1i1lii(lI1lIl1I, "unionActTask");
    const I1IiilI = {
        "unionActTask": lllIlii1
      },
      ilIll11l = {
        "appid": "u_activity_h5",
        "body": JSON.stringify(I1IiilI),
        "client": "apple",
        "clientVersion": "",
        "functionId": "completeUnionTask"
      };
    liIIIlIi["66248"] = ii1IIi1I("66248", $.UA);
    await liIIIlIi["66248"].__genAlgo();
    let lllllill = liIIIlIi["66248"].__genH5st(ilIll11l, $.UserName);
    il11iii = lllllill.h5st || "";
    let i1il11il = {
      "url": "https://api.m.jd.com/api?functionId=completeUnionTask&appid=" + ilIll11l.appid + "&loginType=2&body=" + $.toStr(I1IiilI) + "&client=" + ilIll11l.client + "&clientVersion=" + ilIll11l.clientVersion + "&h5st=" + il11iii + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": "https://jingfen.jd.com",
        "Referer": lI1lIl1I + "&isLoginBack=true",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    i1il11il.headers.Cookie = i1il11il.headers.Cookie.replace(/;\s*$/, "");
    i1il11il.headers.Cookie = i1il11il.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var lilili1i = $;
    lilili1i.get(i1il11il, async (iIi11ilI, liiiilI1, iiIl11lI) => {
      try {
        if (iIi11ilI) console.log("" + $.toStr(iIi11ilI)), console.log($.name + " completeUnionTask API请求失败，请检查网路重试");else {
          let iilIIi1 = $.toObj(iiIl11lI, iiIl11lI);
          typeof iilIIi1 == "object" && iilIIi1.code == 0 && iilIIi1.msg ? console.log(iilIIi1.msg) : console.log(iiIl11lI);
        }
      } catch (IliI11ii) {
        $.logErr(IliI11ii, liiiilI1);
      } finally {
        Iil11lll();
      }
    });
  });
}
function iIlIiiiI(llIlill, lIIli1II) {
  return new Promise(async II1lI1l => {
    let ll1Ii11i = "",
      ll1lIl = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const iIllilli = {
        "unionActId": "31177",
        "actId": $.taskPinArr[$.UserName].actId,
        "platform": $.taskPinArr[$.UserName].platform,
        "unionShareId": llIlill,
        "d": lli11,
        "supportPic": 2,
        "taskId": lIIli1II
      },
      I1i1IllI = {
        "appid": "u_hongbao",
        "body": JSON.stringify(iIllilli),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    liIIIlIi.c10dc = ii1IIi1I("c10dc", $.UA);
    await liIIIlIi.c10dc.__genAlgo();
    let Iililii1 = liIIIlIi.c10dc.__genH5st(I1i1IllI, $.UserName);
    ll1Ii11i = Iililii1.h5st || "";
    let iII1l11 = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + I1i1IllI.appid + "&_=" + ll1lIl + "&loginType=2&body=" + $.toStr(iIllilli) + "&client=" + I1i1IllI.client + "&clientVersion=" + I1i1IllI.clientVersion + "&h5st=" + ll1Ii11i + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "__jd_ref_cls=hongbao_quyaoqing_ck; " + $.taskPinArr[$.UserName].cookie,
        "origin": $.taskPinArr[$.UserName].origin,
        "Referer": $.taskPinArr[$.UserName].origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    iII1l11.headers.Cookie = iII1l11.headers.Cookie.replace(/;\s*$/, "");
    iII1l11.headers.Cookie = iII1l11.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var II1li1l = $;
    II1li1l.get(iII1l11, async (lililil1, iiIIii1, ii1lIIlI) => {
      try {
        if (lililil1) console.log("" + $.toStr(lililil1)), console.log($.name + " doTaskUnionShare API请求失败，请检查网路重试");else {
          let iIIil1I1 = $.toObj(ii1lIIlI, ii1lIIlI);
          if (typeof iIIil1I1 == "object") {} else console.log(ii1lIIlI);
        }
      } catch (I1llllI1) {
        $.logErr(I1llllI1, iiIIii1);
      } finally {
        II1lI1l();
      }
    });
  });
}
function ilIiIliI(ll1III1i = "", i1illI1 = 8, Iil1liII = "") {
  return new Promise(async lI11I11i => {
    let Ili1l1Ii = "",
      I1iI111I = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var iIiIl1II = {
      "platform": $.taskPinArr[$.UserName].platform,
      "unionActId": "31177",
      "actId": $.taskPinArr[$.UserName].actId,
      "d": lli11,
      "unionShareId": ll1III1i,
      "type": i1illI1,
      "qdPageId": "MO-J2011-1",
      "mdClickId": "jxhongbao_ck",
      "actType": 1
    };
    Iil1liII && (iIiIl1II.taskId = Iil1liII, iIiIl1II.agreeState = 1);
    const iil1i = {
      "appid": "u_hongbao",
      "body": JSON.stringify(iIiIl1II),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "getCoupons"
    };
    liIIIlIi.c822a = ii1IIi1I("c822a", $.UA);
    await liIIIlIi.c822a.__genAlgo();
    let I1llI11l = liIIIlIi.c822a.__genH5st(iil1i, $.UserName);
    Ili1l1Ii = I1llI11l.h5st || "";
    let iil1Iil = "",
      iI1iliIi = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + iil1i.appid + "&_=" + I1iI111I + "&loginType=2&body=" + $.toStr(iIiIl1II) + "&client=" + iil1i.client + "&clientVersion=" + iil1i.clientVersion + "&h5st=" + Ili1l1Ii + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=hongbao_shiyongpinquchoujiang_ck; " + $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    iI1iliIi.headers.Cookie = iI1iliIi.headers.Cookie.replace(/;\s*$/, "");
    iI1iliIi.headers.Cookie = iI1iliIi.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var I11ll1I = $;
    I11ll1I.post(iI1iliIi, async (I1i1iil, Ii1ll1I, IlIIll) => {
      try {
        if (I1i1iil) console.log("" + $.toStr(I1i1iil)), console.log($.name + " doTaskGetCoupons API请求失败，请检查网路重试");else {
          let lIIliIli = $.toObj(IlIIll, IlIIll);
          if (typeof lIIliIli == "object") {
            lIIliIli.msg && (iil1Iil = lIIliIli.msg, console.log(lIIliIli.msg));
            if (lIIliIli.code == 0 && lIIliIli.data) {
              let i1iilIlI = "";
              for (let iili1II of lIIliIli.data.couponList) {
                i1iilIlI += "" + (i1iilIlI ? "\n" : "");
                $.getlj = true;
                if (iili1II.type == 1) i1iilIlI += "获得[红包]🧧" + iili1II.discount + "元 使用时间:" + $.time("yyyy-MM-dd", iili1II.beginTime) + " " + $.time("yyyy-MM-dd", iili1II.endTime);else {
                  if (iili1II.type == 3) i1iilIlI += "获得[优惠券]🎟️满" + iili1II.quota + "减" + iili1II.discount + " 使用时间:" + $.time("yyyy-MM-dd", iili1II.beginTime) + " " + $.time("yyyy-MM-dd", iili1II.endTime);else {
                    if (iili1II.type == 6) i1iilIlI += "获得[打折券]🎫满" + iili1II.quota + "打" + iili1II.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", iili1II.beginTime) + " " + $.time("yyyy-MM-dd", iili1II.endTime);else {
                      if (iili1II.type == 17) i1iilIlI += "获得[" + (iili1II.shopName || "京东支付立减") + "] " + (iili1II.limitStr && iili1II.limitStr + " " || "") + "领取之日起" + iili1II.limitTime + "天有效";else {
                        var llI1llI = "未知";
                        i1iilIlI += "获得[" + (iili1II.shopName || llI1llI) + "] " + $.toStr(iili1II, iili1II);
                      }
                    }
                  }
                }
              }
              i1iilIlI && (resMsg += i1iilIlI + "\n", console.log(i1iilIlI));
            }
          } else console.log(IlIIll);
        }
      } catch (iliIl1II) {
        $.logErr(iliIl1II, Ii1ll1I);
      } finally {
        lI11I11i(iil1Iil);
      }
    });
  });
}
function llI11Il(ll1lli1l, IIl111li) {
  return new Promise(lI1Iil1l => {
    var ilIIl1l = {
      "encryptProjectId": ll1lli1l,
      "encryptAssignmentId": IIl111li,
      "sourceCode": "ace36658",
      "actionType": 1,
      "itemId": "1"
    };
    let l111liil = "",
      li1iIlIi = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const lIiiii1i = {
      "appid": "u_hongbao",
      "body": JSON.stringify(ilIIl1l),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "doInteractiveAssignment"
    };
    let i1lIii1l = liIIIlIi["7b74b"].__genH5st(lIiiii1i, $.UserName);
    l111liil = i1lIii1l.h5st || "";
    let illi1I1l = "https://api.m.jd.com/api?functionId=doInteractiveAssignment&appid=" + lIiiii1i.appid + "&_=" + li1iIlIi + "&loginType=2&body=" + $.toStr(ilIIl1l) + "&client=" + lIiiii1i.client + "&clientVersion=" + lIiiii1i.clientVersion + "&h5st=" + l111liil + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      I1I1l = {
        "url": illi1I1l,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var li1II1i = $;
    li1II1i.get(I1I1l, async (I11l1iii, llll1iII, i11I1ll1) => {
      try {
        if (I11l1iii) console.log("" + $.toStr(I11l1iii)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var iliIII1l = $.toObj(i11I1ll1, i11I1ll1);
          iliIII1l.code == 0 ? console.log(iliIII1l.msg) : console.log(iliIII1l);
        }
      } catch (l1iIIil) {
        $.logErr(l1iIIil, llll1iII);
      } finally {
        lI1Iil1l(i11I1ll1);
      }
    });
  });
}
function i1Iil1Ii(llI1i1lI, l1lII, liI1lI1l) {
  return new Promise(i1l1lIi1 => {
    var lii1il1 = {
      "timerId": llI1i1lI,
      "uniqueId": l1lII,
      "jumpUrl": encodeURIComponent(liI1lI1l),
      "jumpType": 1
    };
    let IlIiii1i = "",
      Ill1li1I = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const IiI11iI1 = {
      "appid": "u_hongbao",
      "body": JSON.stringify(lii1il1),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.0.0",
      "functionId": "apStartTiming"
    };
    let IIIIIl1I = liIIIlIi["0d977"].__genH5st(IiI11iI1, $.UserName);
    IlIiii1i = IIIIIl1I.h5st || "";
    let i1I1I1Il = {
      "url": "https://api.m.jd.com/api",
      "body": "functionId=apStartTiming&appid=" + IiI11iI1.appid + "&_=" + Ill1li1I + "&loginType=2&body=" + $.toStr(lii1il1) + "&client=" + IiI11iI1.client + "&clientVersion=" + IiI11iI1.clientVersion + "&h5st=" + IlIiii1i + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": $.taskPinArr[$.UserName].origin,
        "Referer": $.taskPinArr[$.UserName].origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var IIi1ll11 = $;
    IIi1ll11.post(i1I1I1Il, async (I11li1, I1i1llI, I1iIilli) => {
      try {
        if (I11li1) console.log("" + $.toStr(I11li1)), console.log($.name + " dotask API请求失败，请检查网路重试");
      } catch (Ii1Il1) {
        $.logErr(Ii1Il1, I1i1llI);
      } finally {
        i1l1lIi1(I1iIilli);
      }
    });
  });
}
function il1iIiI1(iilii1I, lIli1ili, i11liIli) {
  return new Promise(l1Iii1ll => {
    var I11liII = "{\"dataSource\":\"babelInteractive\",\"method\":\"customDoInteractiveAssignmentForBabel\",\"reqParams\":\"{\\\"itemId\\\":\\\"1\\\",\\\"encryptProjectId\\\":\\\"" + iilii1I + "\\\",\\\"encryptAssignmentId\\\":\\\"" + lIli1ili + "\\\"}\",\"sdkVersion\":\"1.0.0\",\"clientLanguage\":\"zh\"}";
    let I1lIi1II = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000,
      i1liilIi = "https://api.m.jd.com/?client=wh5&clientVersion=1.0.0&functionId=qryViewkitCallbackResult&body=" + I11liII + "&_timestamp=" + I1lIi1II;
    origin = i11liIli.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && i11liIli.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "";
    let I1ili1I = {
      "url": i1liilIi,
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": origin,
        "Referer": i11liIli,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var llll1Il = $;
    llll1Il.get(I1ili1I, async (IIlIl1, lIIi1Ill, liil1I) => {
      try {
        if (IIlIl1) console.log("" + $.toStr(IIlIl1)), console.log($.name + " callbackResult API请求失败，请检查网路重试");else {
          var iillIi = $.toObj(liil1I, liil1I);
          iillIi.code == 0 ? console.log(iillIi.msg) : console.log(iillIi);
        }
      } catch (lilIll11) {
        $.logErr(lilIll11, lIIi1Ill);
      } finally {
        l1Iii1ll(liil1I);
      }
    });
  });
}
function I111II1i(liIiillI) {
  let I11I1llI = liIiillI && liIiillI.headers && (liIiillI.headers["set-cookie"] || liIiillI.headers["Set-Cookie"] || "") || "",
    i1iI1I1 = "";
  if (I11I1llI) {
    if (typeof I11I1llI != "object") i1iI1I1 = I11I1llI.split(",");else i1iI1I1 = I11I1llI;
    for (let lii1Iill of i1iI1I1) {
      let llIIi1ii = lii1Iill.split(";")[0].trim();
      if (llIIi1ii.split("=")[1]) {
        llIIi1ii.split("=")[0] == "unpl" && llIIi1ii.split("=")[1] && ($.unpl = llIIi1ii.split("=")[1]);
        if (l1lIllii.indexOf(llIIi1ii.split("=")[1]) == -1) l1lIllii += llIIi1ii.replace(/ /g, "") + "; ";
      }
    }
  }
}
function I111i1Ii(lIIIiI1i, I1iI11ii) {
  var iI1lIii = false;
  if (liIiiili) {
    if (/statusCode=407/.test(lIIIiI1i)) {
      console.log("代理连接失败");
      iI1lIii = true;
      if ($.getProxyIp) for (let ilI1iIi1 of proxyGetIpUrl) {
        if (!ilI1iIi1 || ilI1iIi1.status == false) continue;
        if (ilI1iIi1.proxyArr && ilI1iIi1.proxyArr.host == $.proxyArr.host && ilI1iIi1.proxyArr.port == $.proxyArr.port) {
          ilI1iIi1.errorCount++;
          ilI1iIi1.errorCount >= 3 && (console.log("代理池(" + ilI1iIi1.index + ")请求多次失败，禁用"), ilI1iIi1.status = false);
          break;
        }
      }
    } else {
      if (/ESOCKETTIMEDOUT|Timeout awaiting|ETIMEDOUT/.test(lIIIiI1i)) console.log("请求超时"), iI1lIii = true;else /socket|connect ECONNREFUSED/.test(lIIIiI1i) && (console.log("代理连接失败"), iI1lIii = true);
    }
  }
  return iI1lIii && ($.switchProxies = true), iI1lIii;
}
function liI1Iiil(Ii1iiil1) {
  if ($.proxyArr.host && $.proxyArr.port) {
    if ($.proxyArr.type == "socks") {
      var il1ii1i = $.proxyArr.type == "socks" ? "socks5" : "http";
      let iliiiIIi = il1ii1i + "://" + ($.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password + "@" : "") + $.proxyArr.host + ":" + $.proxyArr.port;
      if (il1ii1i == "http") Object.assign(Ii1iiil1, {
        "proxy": iliiiIIi
      });else {
        if (ilI1Il11) {
          const iiIiIiiI = new ilI1Il11(iliiiIIi);
          Object.assign(Ii1iiil1, {
            "agent": iiIiIiiI
          });
        }
      }
      delete Ii1iiil1.headers["Accept-Encoding"];
      delete Ii1iiil1.headers["accept-encoding"];
    } else {
      const II1Ill1i = {
        "http": IlI11IlI.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        }),
        "https": IlI11IlI.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        })
      };
      Object.assign(Ii1iiil1, {
        "agent": II1Ill1i
      });
    }
    Object.assign(Ii1iiil1, {
      "retry": {
        "limit": 0
      }
    });
  }
  return Ii1iiil1;
}
function iI111ilI(iIII11I1) {
  if (iIII11I1.status == false) return true;
  return iIII11I1.count++, new Promise(lIIIlIil => {
    let iliI11I = true;
    $.get({
      "url": iIII11I1.url,
      "timeout": 10000
    }, async (liIl1111, i1l1iiI, lIi1III) => {
      try {
        if (liIl1111) console.log("" + $.toStr(liIl1111)), console.log($.name + " 获取ip代理池(" + iIII11I1.index + ") API请求失败，请检查网路重试");else {
          let IiiiliI = $.toStr(lIi1III, lIi1III),
            lili1lII = IiiiliI.match(/((\d{0,3}\.){3}\d{0,3}):(\d{0,5})/);
          if (lili1lII && lili1lII.length == 4) {
            $.switchProxies && ($.proxyArr.host != lili1lII[1] || $.proxyArr.port != lili1lII[3] ? console.log("切换成功！") : console.log("切换失败，IP不变！"));
            iliI11I = false;
            $.proxyArr.host = lili1lII[1];
            $.proxyArr.port = lili1lII[3];
            $.proxyArr.pin = [];
            $.proxyArr.auth = "";
            var il1lliI = new RegExp(lili1lII[1] + ":" + lili1lII[3] + ":(\\S+):([^\\s\"]+)");
            if (il1lliI.test(IiiiliI)) {
              var lIlI11i1 = IiiiliI.match(il1lliI);
              lIlI11i1.length == 3 && ($.proxyArr.auth = {
                "username": lIlI11i1[1],
                "password": lIlI11i1[2]
              });
            }
            $.getProxyIp = true;
            iIII11I1.count = 0;
            iIII11I1.proxyArr = $.proxyArr;
          } else console.log("获取ip代理池(" + iIII11I1.index + ")失败\n" + lIi1III), /订单不存在|key无效|无可用余量|过期|充值|续费|登陆|为空|添加|联系|未检索|Error/.test(lIi1III) && (iIII11I1.count = 999);
        }
      } catch (IIlII111) {
        $.logErr(IIlII111, i1l1iiI);
        console.log(lIi1III);
      } finally {
        lIIIlIil(iliI11I);
      }
    });
  });
}
async function IIiliil1(IilIIIil = true, ll11II1i = 1) {
  if (IilIIIil) {
    $.UA = "jdapp;iPhone;12.3.1;;;M/5.0;appBuild/168960;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
      "ciphertype": 5,
      "cipher": {
        "ud": "",
        "sv": "CJGkCm==",
        "iad": ""
      },
      "ts": Math.floor(new Date().getTime() / 1000),
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "version": "1.0.3",
      "appname": "com.360buy.jdmobile",
      "ridx": -1
    })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    ll11II1i != 1 && ($.UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
  }
  try {
    if (liIiiili) {
      let I1l1lill = true;
      if (proxyGetIpUrl && ($.switchProxies || !$.proxyArr.host || !$.getProxyIp)) {
        let iiii111 = 1;
        do {
          $.getProxyIp = false;
          for (let i1IlIl1i of proxyGetIpUrl) {
            if (!i1IlIl1i || i1IlIl1i.status == false) continue;
            I1l1lill = await iI111ilI(i1IlIl1i);
            if (!I1l1lill) break;
            i1IlIl1i.count >= 3 && (console.log("代理池(" + i1IlIl1i.index + ")获取多次失败，禁用"), i1IlIl1i.status = false);
          }
          iiii111++;
        } while (I1l1lill && iiii111 <= 4);
      } else proxyGetIpUrl && $.proxyArr.host && (I1l1lill = false);
      I1l1lill && ($.proxyArr = {}, console.log("无可用代理地址，使用本地IP\n"));
      if ($.proxyArr.host && $.proxyArr.port) console.log("代理" + ($.getProxyIp ? "池" : "") + "地址:" + $.proxyArr.host + ":" + $.proxyArr.port + "\n");
      $.switchProxies = false;
    }
  } catch (l1l11lil) {
    console.log(l1l11lil);
  }
}
function I11i1iil(I11l11l1) {
  if (typeof I11l11l1 == "string") try {
    return JSON.parse(I11l11l1);
  } catch (lI111lii) {
    return console.log(lI111lii), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function i1II1lI() {
  var li11I11I = function () {
    function IlIl1li(i11lI1ii, llliiiI) {
      i11lI1ii = [i11lI1ii[0] >>> 16, 65535 & i11lI1ii[0], i11lI1ii[1] >>> 16, 65535 & i11lI1ii[1]];
      llliiiI = [llliiiI[0] >>> 16, 65535 & llliiiI[0], llliiiI[1] >>> 16, 65535 & llliiiI[1]];
      var liii1iiI = [0, 0, 0, 0];
      return liii1iiI[3] += i11lI1ii[3] + llliiiI[3], liii1iiI[2] += liii1iiI[3] >>> 16, liii1iiI[3] &= 65535, liii1iiI[2] += i11lI1ii[2] + llliiiI[2], liii1iiI[1] += liii1iiI[2] >>> 16, liii1iiI[2] &= 65535, liii1iiI[1] += i11lI1ii[1] + llliiiI[1], liii1iiI[0] += liii1iiI[1] >>> 16, liii1iiI[1] &= 65535, liii1iiI[0] += i11lI1ii[0] + llliiiI[0], liii1iiI[0] &= 65535, [liii1iiI[0] << 16 | liii1iiI[1], liii1iiI[2] << 16 | liii1iiI[3]];
    }
    function iII1IIii(ii1IIlil, Il1Iiill) {
      ii1IIlil = [ii1IIlil[0] >>> 16, 65535 & ii1IIlil[0], ii1IIlil[1] >>> 16, 65535 & ii1IIlil[1]];
      Il1Iiill = [Il1Iiill[0] >>> 16, 65535 & Il1Iiill[0], Il1Iiill[1] >>> 16, 65535 & Il1Iiill[1]];
      var IiIlIlil = [0, 0, 0, 0];
      return IiIlIlil[3] += ii1IIlil[3] * Il1Iiill[3], IiIlIlil[2] += IiIlIlil[3] >>> 16, IiIlIlil[3] &= 65535, IiIlIlil[2] += ii1IIlil[2] * Il1Iiill[3], IiIlIlil[1] += IiIlIlil[2] >>> 16, IiIlIlil[2] &= 65535, IiIlIlil[2] += ii1IIlil[3] * Il1Iiill[2], IiIlIlil[1] += IiIlIlil[2] >>> 16, IiIlIlil[2] &= 65535, IiIlIlil[1] += ii1IIlil[1] * Il1Iiill[3], IiIlIlil[0] += IiIlIlil[1] >>> 16, IiIlIlil[1] &= 65535, IiIlIlil[1] += ii1IIlil[2] * Il1Iiill[2], IiIlIlil[0] += IiIlIlil[1] >>> 16, IiIlIlil[1] &= 65535, IiIlIlil[1] += ii1IIlil[3] * Il1Iiill[1], IiIlIlil[0] += IiIlIlil[1] >>> 16, IiIlIlil[1] &= 65535, IiIlIlil[0] += ii1IIlil[0] * Il1Iiill[3] + ii1IIlil[1] * Il1Iiill[2] + ii1IIlil[2] * Il1Iiill[1] + ii1IIlil[3] * Il1Iiill[0], IiIlIlil[0] &= 65535, [IiIlIlil[0] << 16 | IiIlIlil[1], IiIlIlil[2] << 16 | IiIlIlil[3]];
    }
    function iI1I11Il(IliiiIiI, lIiIiI1I) {
      return 32 === (lIiIiI1I %= 64) ? [IliiiIiI[1], IliiiIiI[0]] : 32 > lIiIiI1I ? [IliiiIiI[0] << lIiIiI1I | IliiiIiI[1] >>> 32 - lIiIiI1I, IliiiIiI[1] << lIiIiI1I | IliiiIiI[0] >>> 32 - lIiIiI1I] : (lIiIiI1I -= 32, [IliiiIiI[1] << lIiIiI1I | IliiiIiI[0] >>> 32 - lIiIiI1I, IliiiIiI[0] << lIiIiI1I | IliiiIiI[1] >>> 32 - lIiIiI1I]);
    }
    function IiI1l1lI(ll1lI1I1, l111II11) {
      return 0 === (l111II11 %= 64) ? ll1lI1I1 : 32 > l111II11 ? [ll1lI1I1[0] << l111II11 | ll1lI1I1[1] >>> 32 - l111II11, ll1lI1I1[1] << l111II11] : [ll1lI1I1[1] << l111II11 - 32, 0];
    }
    function lil1lIil(Ii1ll, il1lllII) {
      return [Ii1ll[0] ^ il1lllII[0], Ii1ll[1] ^ il1lllII[1]];
    }
    function Ilili1i1(iiiIiI11) {
      return lil1lIil(iiiIiI11 = iII1IIii(iiiIiI11 = lil1lIil(iiiIiI11 = iII1IIii(iiiIiI11 = lil1lIil(iiiIiI11, [0, iiiIiI11[0] >>> 1]), [4283543511, 3981806797]), [0, iiiIiI11[0] >>> 1]), [3301882366, 444984403]), [0, iiiIiI11[0] >>> 1]);
    }
    return {
      "hash128": function (iiiIiilI, IiIIIIIl) {
        var lIlI1i1I = IiIIIIIl || 0;
        IiIIIIIl = (iiiIiilI = iiiIiilI || "").length % 16;
        var l1i1iiIl = iiiIiilI.length - IiIIIIIl,
          IlI1I1Ii = [0, lIlI1i1I];
        lIlI1i1I = [0, lIlI1i1I];
        for (var Il1llIi1, l11l11l1, I1IlI1l = [2277735313, 289559509], lIiIIi1I = [1291169091, 658871167], iIlIii1I = 0; iIlIii1I < l1i1iiIl; iIlIii1I += 16) Il1llIi1 = [255 & iiiIiilI.charCodeAt(iIlIii1I + 4) | (255 & iiiIiilI.charCodeAt(iIlIii1I + 5)) << 8 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 6)) << 16 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 7)) << 24, 255 & iiiIiilI.charCodeAt(iIlIii1I) | (255 & iiiIiilI.charCodeAt(iIlIii1I + 1)) << 8 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 2)) << 16 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 3)) << 24], l11l11l1 = [255 & iiiIiilI.charCodeAt(iIlIii1I + 12) | (255 & iiiIiilI.charCodeAt(iIlIii1I + 13)) << 8 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 14)) << 16 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 15)) << 24, 255 & iiiIiilI.charCodeAt(iIlIii1I + 8) | (255 & iiiIiilI.charCodeAt(iIlIii1I + 9)) << 8 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 10)) << 16 | (255 & iiiIiilI.charCodeAt(iIlIii1I + 11)) << 24], IlI1I1Ii = IlIl1li(iII1IIii(IlI1I1Ii = IlIl1li(IlI1I1Ii = iI1I11Il(IlI1I1Ii = lil1lIil(IlI1I1Ii, Il1llIi1 = iII1IIii(Il1llIi1 = iI1I11Il(Il1llIi1 = iII1IIii(Il1llIi1, I1IlI1l), 31), lIiIIi1I)), 27), lIlI1i1I), [0, 5]), [0, 1390208809]), lIlI1i1I = IlIl1li(iII1IIii(lIlI1i1I = IlIl1li(lIlI1i1I = iI1I11Il(lIlI1i1I = lil1lIil(lIlI1i1I, l11l11l1 = iII1IIii(l11l11l1 = iI1I11Il(l11l11l1 = iII1IIii(l11l11l1, lIiIIi1I), 33), I1IlI1l)), 31), IlI1I1Ii), [0, 5]), [0, 944331445]);
        switch (Il1llIi1 = [0, 0], l11l11l1 = [0, 0], IiIIIIIl) {
          case 15:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 14)], 48));
          case 14:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 13)], 40));
          case 13:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 12)], 32));
          case 12:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 11)], 24));
          case 11:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 10)], 16));
          case 10:
            l11l11l1 = lil1lIil(l11l11l1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 9)], 8));
          case 9:
            lIlI1i1I = lil1lIil(lIlI1i1I, l11l11l1 = iII1IIii(l11l11l1 = iI1I11Il(l11l11l1 = iII1IIii(l11l11l1 = lil1lIil(l11l11l1, [0, iiiIiilI.charCodeAt(iIlIii1I + 8)]), lIiIIi1I), 33), I1IlI1l));
          case 8:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 7)], 56));
          case 7:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 6)], 48));
          case 6:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 5)], 40));
          case 5:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 4)], 32));
          case 4:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 3)], 24));
          case 3:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 2)], 16));
          case 2:
            Il1llIi1 = lil1lIil(Il1llIi1, IiI1l1lI([0, iiiIiilI.charCodeAt(iIlIii1I + 1)], 8));
          case 1:
            IlI1I1Ii = lil1lIil(IlI1I1Ii, Il1llIi1 = iII1IIii(Il1llIi1 = iI1I11Il(Il1llIi1 = iII1IIii(Il1llIi1 = lil1lIil(Il1llIi1, [0, iiiIiilI.charCodeAt(iIlIii1I)]), I1IlI1l), 31), lIiIIi1I));
        }
        return IlI1I1Ii = lil1lIil(IlI1I1Ii, [0, iiiIiilI.length]), lIlI1i1I = IlIl1li(lIlI1i1I = lil1lIil(lIlI1i1I, [0, iiiIiilI.length]), IlI1I1Ii = IlIl1li(IlI1I1Ii, lIlI1i1I)), IlI1I1Ii = Ilili1i1(IlI1I1Ii), lIlI1i1I = IlIl1li(lIlI1i1I = Ilili1i1(lIlI1i1I), IlI1I1Ii = IlIl1li(IlI1I1Ii, lIlI1i1I)), ("00000000" + (IlI1I1Ii[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (IlI1I1Ii[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (lIlI1i1I[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (lIlI1i1I[1] >>> 0).toString(16)).slice(-8);
      }
    };
  }();
  function ll1iiII1(iliiill) {
    iliiill = JSON.stringify(iliiill);
    iliiill = encodeURIComponent(iliiill);
    var iIillll = "",
      l11il1li = 0;
    do {
      var llii111i = iliiill.charCodeAt(l11il1li++),
        II1li11 = iliiill.charCodeAt(l11il1li++),
        i1111lI1 = iliiill.charCodeAt(l11il1li++),
        i1iiIll = llii111i >> 2;
      llii111i = (3 & llii111i) << 4 | II1li11 >> 4;
      var lii1liII = (15 & II1li11) << 2 | i1111lI1 >> 6,
        i1lIiI1I = 63 & i1111lI1;
      isNaN(II1li11) ? lii1liII = i1lIiI1I = 64 : isNaN(i1111lI1) && (i1lIiI1I = 64);
      iIillll = iIillll + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(i1iiIll) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(llii111i) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(lii1liII) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(i1lIiI1I);
    } while (l11il1li < iliiill.length);
    return iIillll + "/";
  }
  var IiIiilI = [$.UA.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
    iII1IiI1 = li11I11I.hash128(IiIiilI.join("~~~"), 31),
    ii1i1I1l = {
      "pin": "",
      "oid": "",
      "bizId": "jd-babelh5",
      "fc": "",
      "mode": "strict",
      "p": "s",
      "fp": iII1IiI1,
      "ctype": 1,
      "v": "3.1.1.0",
      "f": "3",
      "o": "prodev.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html",
      "qs": "",
      "jsTk": "",
      "qi": ""
    },
    I1ii1i = ll1iiII1(ii1i1I1l),
    Ill11lli = {},
    IiIiilI = new Date();
  Ill11lli.ts = {};
  Ill11lli.ts.deviceTime = IiIiilI.getTime();
  Ill11lli.ca = {
    "tdHash": null
  };
  Ill11lli.m = {
    "compatMode": "CSS1Compat"
  };
  Ill11lli.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
  Ill11lli.n = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Apple Computer, Inc.",
    "maxTouchPoints": 1,
    "pdfViewerEnabled": !1,
    "hardwareConcurrency": 10,
    "cookieEnabled": !0,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": /\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1] || $.UA,
    "platform": "iPhone",
    "product": "Gecko",
    "userAgent": $.UA,
    "language": "zh-CN",
    "onLine": !0,
    "webdriver": !1,
    "javaEnabled": !1,
    "deviceMemory": 8,
    "enumerationOrder": ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
  };
  Ill11lli.p = [];
  Ill11lli.w = {
    "devicePixelRatio": 1,
    "screenTop": 0,
    "screenLeft": 0
  };
  Ill11lli.s = {
    "availHeight": 896,
    "availWidth": 414,
    "colorDepth": 24,
    "height": 896,
    "width": 414,
    "pixelDepth": 24
  };
  Ill11lli.sc = {
    "ActiveBorder": "rgb(118, 118, 118)",
    "ActiveCaption": "rgb(0, 0, 0)",
    "AppWorkspace": "rgb(255, 255, 255)",
    "Background": "rgb(255, 255, 255)",
    "ButtonFace": "rgb(239, 239, 239)",
    "ButtonHighlight": "rgb(239, 239, 239)",
    "ButtonShadow": "rgb(239, 239, 239)",
    "ButtonText": "rgb(0, 0, 0)",
    "CaptionText": "rgb(0, 0, 0)",
    "GrayText": "rgb(128, 128, 128)",
    "Highlight": "rgb(181, 213, 255)",
    "HighlightText": "rgb(0, 0, 0)",
    "InactiveBorder": "rgb(118, 118, 118)",
    "InactiveCaption": "rgb(255, 255, 255)",
    "InactiveCaptionText": "rgb(128, 128, 128)",
    "InfoBackground": "rgb(255, 255, 255)",
    "InfoText": "rgb(0, 0, 0)",
    "Menu": "rgb(255, 255, 255)",
    "MenuText": "rgb(0, 0, 0)",
    "Scrollbar": "rgb(255, 255, 255)",
    "ThreeDDarkShadow": "rgb(118, 118, 118)",
    "ThreeDFace": "rgb(239, 239, 239)",
    "ThreeDHighlight": "rgb(118, 118, 118)",
    "ThreeDLightShadow": "rgb(118, 118, 118)",
    "ThreeDShadow": "rgb(118, 118, 118)",
    "Window": "rgb(255, 255, 255)",
    "WindowFrame": "rgb(118, 118, 118)",
    "WindowText": "rgb(0, 0, 0)"
  };
  Ill11lli.ss = {
    "cookie": !0,
    "localStorage": !0,
    "sessionStorage": !0,
    "globalStorage": !1,
    "indexedDB": !0
  };
  Ill11lli.tz = -480;
  Ill11lli.lil = "";
  Ill11lli.wil = "";
  Ill11lli.ts.deviceEndTime = new Date().getTime();
  var I1Iiil1i = ll1iiII1(Ill11lli);
  let iII1iI11 = {
    "url": "https://gia.jd.com/jsTk.do?a=" + I1ii1i,
    "body": "d=" + I1Iiil1i,
    "headers": {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/",
      "User-Agent": $.UA
    },
    "timeout": 10000
  };
  return iII1iI11 = liI1Iiil(iII1iI11), new Promise(IllIli1l => {
    var Il1IIII1 = $;
    if (li1IIii && $.proxyArr.type && $.proxyArr.type == "socks") Il1IIII1 = li1IIii;
    Il1IIII1.post(iII1iI11, async (I1IllI1i, lIlllIii, IIl1ll1l) => {
      try {
        if (I1IllI1i) console.log(I1IllI1i);else {
          let Ii1lIIi1 = $.toObj(IIl1ll1l, IIl1ll1l);
          Ii1lIIi1 && typeof Ii1lIIi1 === "object" && Ii1lIIi1.code == 0 && Ii1lIIi1.data && Ii1lIIi1.data.token ? $.eid_token = Ii1lIIi1.data.token : console.log(IIl1ll1l);
        }
      } catch (IliIIlI1) {
        $.logErr(IliIIlI1, lIlllIii);
      } finally {
        IllIli1l();
      }
    });
  });
}
function II1Il1ii() {
  var l1l1Il1i = Function.prototype.bind.bind(Function.prototype.call, Function.prototype.call),
    I1l1lIiI = l1l1Il1i({}.isPrototypeOf),
    liIl1iIl = Array.prototype.slice,
    llIiiiiI = I1l1lIiI,
    l11Iil1I = liIl1iIl,
    iIiIiI1i = Array.prototype,
    i1l1lli = function (lIIIIlII) {
      var iIII1lI = lIIIIlII.slice;
      return lIIIIlII === iIiIiI1i || llIiiiiI(iIiIiI1i, lIIIIlII) && iIII1lI === iIiIiI1i.slice ? l11Iil1I : iIII1lI;
    },
    Il1i1I = i1l1lli,
    lIIiiI = Array.prototype.splice,
    IlIlIiiI = I1l1lIiI,
    lliiil1I = lIIiiI,
    iI1ili1 = iIiIiI1i,
    lI1I11il = function (II1Ill11) {
      var l1IlI111 = II1Ill11.splice;
      return II1Ill11 === iI1ili1 || IlIlIiiI(iI1ili1, II1Ill11) && l1IlI111 === iI1ili1.splice ? lliiil1I : l1IlI111;
    },
    lI1ilIii = Array.prototype.concat,
    lIiI1lIl = I1l1lIiI,
    illII1iI = lI1ilIii,
    iI1l11I = iIiIiI1i,
    lilIi1lI = function (II1iIIll) {
      var iI1IlI1 = II1iIIll.concat;
      return II1iIIll === iI1l11I || lIiI1lIl(iI1l11I, II1iIIll) && iI1IlI1 === iI1l11I.concat ? illII1iI : iI1IlI1;
    };
  function IilIiIiI(i1lIlI1l) {
    return IilIiIiI = "function" == typeof el && "symbol" == typeof yl ? function (li1Iiili) {
      return typeof li1Iiili;
    } : function (I1l1Ii11) {
      return I1l1Ii11 && "function" == typeof el && I1l1Ii11.constructor === el && I1l1Ii11 !== el.prototype ? "symbol" : typeof I1l1Ii11;
    }, IilIiIiI(i1lIlI1l);
  }
  !function (Ill11liI, I1iIIl11) {
    var IIIIil1i,
      l11Ii1i,
      iIli1II = ["parse", "_eData", "_data", "concat", "_nDataBytes", "sigBytes", "concat"],
      Ilii11I1 = Function.prototype.call,
      il1lII = [96, 67, 45, 78, 83, 43, 42, 88, 129, 19, 2, 7, 11, 64, 48, 0, 90, 48, 1, 78, 19, 19, 59, 45, 90, 61, 2, 48, 3, 78, 19, 45, 90, 46, 61, 4, 78, 61, 5, 37, 86, 4, 45, 94, 90, 27, 81, 68, 31, 0, 69, 67, 16, 127, 55, 55, 29, 19];
    l11Ii1i = function () {
      function lIl1iiIi(lIiliIII) {
        switch (lIiliIII) {
          case 140:
            return "toString";
            break;
          case 123:
            return "init";
            break;
          case 129:
            return "string";
            break;
          case 127:
            return "JdM3|5";
            break;
          default:
            break;
        }
      }
      var I1iIIiil = I1iIIiil || function (I1111Ili, lIlil1ii) {
        var iIIIiI = function () {
            if (IIIIil1i) {
              if ("function" == typeof IIIIil1i.getRandomValues) try {
                return IIIIil1i.getRandomValues(new Uint32Array(1))[0];
              } catch (lilIi1l) {}
              if ("function" == typeof IIIIil1i.randomBytes) try {
                return IIIIil1i.randomBytes(4).readInt32LE();
              } catch (l11lilll) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          I11iIi1l = Object.create || function () {
            function li1IlII() {}
            return function (Iil11Iil) {
              var IlIiili1;
              return li1IlII.prototype = Iil11Iil, IlIiili1 = new li1IlII(), li1IlII.prototype = null, IlIiili1;
            };
          }(),
          lII1II1I = {},
          i1iI1i11 = lII1II1I.lib = {},
          l1llI = i1iI1i11.Base = {
            "extend": function (lI1lI1l) {
              var i1I1lili = lIl1iiIi,
                I11il1II = I11iIi1l(this);
              return lI1lI1l && I11il1II.mixIn(lI1lI1l), (!I11il1II.hasOwnProperty(i1I1lili(123)) || this.init === I11il1II.init) && (I11il1II.init = function () {
                I11il1II.$super.init.apply(this, arguments);
              }), I11il1II.init.prototype = I11il1II, I11il1II.$super = this, I11il1II;
            },
            "create": function () {
              var liiIll1 = this.extend();
              return liiIll1.init.apply(liiIll1, arguments), liiIll1;
            },
            "init": function () {},
            "mixIn": function (iI11llll) {
              var lI1lIiI = lIl1iiIi;
              for (var I1iilil in iI11llll) iI11llll.hasOwnProperty(I1iilil) && (this[I1iilil] = iI11llll[I1iilil]);
              iI11llll.hasOwnProperty(lI1lIiI(140)) && (this.toString = iI11llll.toString);
            },
            "clone": function () {
              return this.init.prototype.extend(this);
            }
          },
          III1III1 = i1iI1i11.WordArray = l1llI.extend({
            "init": function (ll1illli, I1lI1i11) {
              ll1illli = this.words = ll1illli || [];
              this.sigBytes = null != I1lI1i11 ? I1lI1i11 : 4 * ll1illli.length;
            },
            "toString": function (l1Iil1Ii) {
              return (l1Iil1Ii || illiIlI1).stringify(this);
            },
            "concat": function (IililIl1) {
              var IlIl1i1l = this.words,
                llIiIlli = IililIl1.words,
                i1lIiIl = this.sigBytes,
                IilI1Il1 = IililIl1.sigBytes;
              if (this.clamp(), i1lIiIl % 4) for (var Il1ilIil = 0; Il1ilIil < IilI1Il1; Il1ilIil++) {
                var Ii1ill1i = llIiIlli[Il1ilIil >>> 2] >>> 24 - Il1ilIil % 4 * 8 & 255;
                IlIl1i1l[i1lIiIl + Il1ilIil >>> 2] |= Ii1ill1i << 24 - (i1lIiIl + Il1ilIil) % 4 * 8;
              } else {
                for (Il1ilIil = 0; Il1ilIil < IilI1Il1; Il1ilIil += 4) IlIl1i1l[i1lIiIl + Il1ilIil >>> 2] = llIiIlli[Il1ilIil >>> 2];
              }
              return this.sigBytes += IilI1Il1, this;
            },
            "clamp": function () {
              var ii11liIi = this.words,
                lIi1lii = this.sigBytes;
              ii11liIi[lIi1lii >>> 2] &= 4294967295 << 32 - lIi1lii % 4 * 8;
              ii11liIi.length = I1111Ili.ceil(lIi1lii / 4);
            },
            "clone": function () {
              var l1111lI,
                liIllIli = l1llI.clone.call(this);
              return liIllIli.words = Il1i1I(l1111lI = this.words).call(l1111lI, 0), liIllIli;
            },
            "random": function (liIIll) {
              for (var iI1iIiI = [], IiillIil = 0; IiillIil < liIIll; IiillIil += 4) iI1iIiI.push(iIIIiI());
              return new III1III1.init(iI1iIiI, liIIll);
            }
          }),
          i11l11I = lII1II1I.enc = {},
          illiIlI1 = i11l11I.Hex = {
            "stringify": function (IllllIiI) {
              for (var Ill1illi = IllllIiI.words, ilIIIi1l = IllllIiI.sigBytes, IiIll1li = [], lilI1i1 = 0; lilI1i1 < ilIIIi1l; lilI1i1++) {
                var Ill1lli = Ill1illi[lilI1i1 >>> 2] >>> 24 - lilI1i1 % 4 * 8 & 255;
                IiIll1li.push((Ill1lli >>> 4).toString(16));
                IiIll1li.push((15 & Ill1lli).toString(16));
              }
              return IiIll1li.join("");
            },
            "parse": function (lIIi11iI) {
              for (var iiilli1 = lIIi11iI.length, iIlIl11I = [], ll1liiil = 0; ll1liiil < iiilli1; ll1liiil += 2) iIlIl11I[ll1liiil >>> 3] |= Kk(lIIi11iI.substr(ll1liiil, 2), 16) << 24 - ll1liiil % 8 * 4;
              return new III1III1.init(iIlIl11I, iiilli1 / 2);
            }
          };
        i11l11I.Utils = {
          "toWordArray": function (IiiIIIi1) {
            for (var IilIl = [], i11ll11 = 0; i11ll11 < IiiIIIi1.length; i11ll11++) IilIl[i11ll11 >>> 2] |= IiiIIIi1[i11ll11] << 24 - i11ll11 % 4 * 8;
            return I1iIIiil.lib.WordArray.create(IilIl, IiiIIIi1.length);
          },
          "fromWordArray": function (i11I1I1i) {
            for (var l11I1ill = new Uint8Array(i11I1I1i.sigBytes), I1li1ii = 0; I1li1ii < i11I1I1i.sigBytes; I1li1ii++) l11I1ill[I1li1ii] = i11I1I1i.words[I1li1ii >>> 2] >>> 24 - I1li1ii % 4 * 8 & 255;
            return l11I1ill;
          }
        };
        var l1ill11I = i11l11I.Latin1 = {
            "stringify": function (i1l1iI1l) {
              for (var I1llI1Ii = i1l1iI1l.words, llii1I11 = i1l1iI1l.sigBytes, iIi111iI = [], l1lll111 = 0; l1lll111 < llii1I11; l1lll111++) {
                var IIIlII1I = I1llI1Ii[l1lll111 >>> 2] >>> 24 - l1lll111 % 4 * 8 & 255;
                iIi111iI.push(String.fromCharCode(IIIlII1I));
              }
              return iIi111iI.join("");
            },
            "parse": function (iIiiiii1) {
              for (var liliiii1 = iIiiiii1.length, I1II1iI1 = [], IiIIl111 = 0; IiIIl111 < liliiii1; IiIIl111++) I1II1iI1[IiIIl111 >>> 2] |= (255 & iIiiiii1.charCodeAt(IiIIl111)) << 24 - IiIIl111 % 4 * 8;
              return new III1III1.init(I1II1iI1, liliiii1);
            }
          },
          l1liII1i = i11l11I.Utf8 = {
            "stringify": function (iIi111I) {
              var ll1liii1 = lIl1iiIi;
              try {
                return decodeURIComponent(escape(l1ill11I.stringify(iIi111I)));
              } catch (ill1i1) {
                throw new Error(ll1liii1(138));
              }
            },
            "parse": function (Ill1Iii) {
              return l1ill11I.parse(unescape(encodeURIComponent(Ill1Iii)));
            }
          },
          lI1iIiI1 = i1iI1i11.BufferedBlockAlgorithm = l1llI.extend({
            "reset": function () {
              this._data = new III1III1.init();
              this._nDataBytes = 0;
            },
            "_append": function (lI1l1IiI) {
              for (var iIiIlIii, Illi1ilI, l1iiiIli = Ilii11I1, I1IiIi1l = il1lII, Ii1Iil1 = [], l1illli = 0;;) switch (I1IiIi1l[l1illli++]) {
                case 2:
                  Illi1ilI = Ii1Iil1.pop(), Ii1Iil1[Ii1Iil1.length - 1] = Ii1Iil1[Ii1Iil1.length - 1] == Illi1ilI;
                  break;
                case 7:
                  Ii1Iil1[Ii1Iil1.length - 1] ? (++l1illli, --Ii1Iil1.length) : l1illli += I1IiIi1l[l1illli];
                  break;
                case 19:
                  null != Ii1Iil1[Ii1Iil1.length - 2] ? (Ii1Iil1[Ii1Iil1.length - 3] = l1iiiIli.call(Ii1Iil1[Ii1Iil1.length - 3], Ii1Iil1[Ii1Iil1.length - 2], Ii1Iil1[Ii1Iil1.length - 1]), Ii1Iil1.length -= 2) : (Illi1ilI = Ii1Iil1[Ii1Iil1.length - 3], Ii1Iil1[Ii1Iil1.length - 3] = Illi1ilI(Ii1Iil1[Ii1Iil1.length - 1]), Ii1Iil1.length -= 2);
                  break;
                case 37:
                  Illi1ilI = Ii1Iil1.pop(), Ii1Iil1[Ii1Iil1.length - 1] += Illi1ilI;
                  break;
                case 42:
                  Ii1Iil1.push(null);
                  break;
                case 43:
                  Ii1Iil1.push(iIiIlIii);
                  break;
                case 45:
                  Ii1Iil1.pop();
                  break;
                case 46:
                  Ii1Iil1.push(Ii1Iil1[Ii1Iil1.length - 1]);
                  break;
                case 48:
                  Ii1Iil1.push(Ii1Iil1[Ii1Iil1.length - 1]), Ii1Iil1[Ii1Iil1.length - 2] = Ii1Iil1[Ii1Iil1.length - 2][iIli1II[I1IiIi1l[l1illli++]]];
                  break;
                case 59:
                  lI1l1IiI = Ii1Iil1[Ii1Iil1.length - 1];
                  break;
                case 61:
                  Ii1Iil1[Ii1Iil1.length - 1] = Ii1Iil1[Ii1Iil1.length - 1][iIli1II[I1IiIi1l[l1illli++]]];
                  break;
                case 64:
                  Ii1Iil1.push(l1liII1i);
                  break;
                case 67:
                  iIiIlIii = Ii1Iil1[Ii1Iil1.length - 1];
                  break;
                case 78:
                  Ii1Iil1.push(lI1l1IiI);
                  break;
                case 83:
                  Ii1Iil1[Ii1Iil1.length - 1] = IilIiIiI(Ii1Iil1[Ii1Iil1.length - 1]);
                  break;
                case 86:
                  Ii1Iil1[Ii1Iil1.length - 2][iIli1II[I1IiIi1l[l1illli++]]] = Ii1Iil1[Ii1Iil1.length - 1], Ii1Iil1[Ii1Iil1.length - 2] = Ii1Iil1[Ii1Iil1.length - 1], Ii1Iil1.length--;
                  break;
                case 88:
                  Ii1Iil1.push(I1IiIi1l[l1illli++]);
                  break;
                case 90:
                  Ii1Iil1.push(this);
                  break;
                case 94:
                  return;
                case 96:
                  Ii1Iil1.push(lIl1iiIi);
              }
            },
            "_process": function (I1liIII) {
              var lilIIli1,
                IIi1I1l = this._data,
                I1I1li11 = IIi1I1l.words,
                IiiIlIII = IIi1I1l.sigBytes,
                ilili = this.blockSize,
                li1i1il = IiiIlIII / (4 * ilili),
                iliII1i = (li1i1il = I1liIII ? I1111Ili.ceil(li1i1il) : I1111Ili.max((0 | li1i1il) - this._minBufferSize, 0)) * ilili,
                il1Il11i = I1111Ili.min(4 * iliII1i, IiiIlIII);
              if (iliII1i) {
                for (var Illll11 = 0; Illll11 < iliII1i; Illll11 += ilili) this._doProcessBlock(I1I1li11, Illll11);
                lilIIli1 = lI1I11il(I1I1li11).call(I1I1li11, 0, iliII1i);
                IIi1I1l.sigBytes -= il1Il11i;
              }
              return new III1III1.init(lilIIli1, il1Il11i);
            },
            "_eData": function (iIi1i1) {
              for (var ill1i1il, i1lI1i, I1ll11I1 = Ilii11I1, IiI1li1i = il1lII, ilIII1i1 = [], l1iIiII1 = 44;;) switch (IiI1li1i[l1iIiII1++]) {
                case 16:
                  ilIII1i1.push(IiI1li1i[l1iIiII1++]);
                  break;
                case 19:
                  return;
                case 27:
                  ill1i1il = ilIII1i1[ilIII1i1.length - 1];
                  break;
                case 29:
                  return ilIII1i1.pop();
                case 31:
                  ilIII1i1.push(ilIII1i1[ilIII1i1.length - 1]), ilIII1i1[ilIII1i1.length - 2] = ilIII1i1[ilIII1i1.length - 2][iIli1II[6 + IiI1li1i[l1iIiII1++]]];
                  break;
                case 55:
                  null != ilIII1i1[ilIII1i1.length - 2] ? (ilIII1i1[ilIII1i1.length - 3] = I1ll11I1.call(ilIII1i1[ilIII1i1.length - 3], ilIII1i1[ilIII1i1.length - 2], ilIII1i1[ilIII1i1.length - 1]), ilIII1i1.length -= 2) : (i1lI1i = ilIII1i1[ilIII1i1.length - 3], ilIII1i1[ilIII1i1.length - 3] = i1lI1i(ilIII1i1[ilIII1i1.length - 1]), ilIII1i1.length -= 2);
                  break;
                case 67:
                  ilIII1i1.push(null);
                  break;
                case 68:
                  ilIII1i1.push(iIi1i1);
                  break;
                case 69:
                  ilIII1i1.push(ill1i1il);
                  break;
                case 81:
                  ilIII1i1.pop();
                  break;
                case 90:
                  ilIII1i1.push(lIl1iiIi);
              }
            },
            "clone": function () {
              var iil1I1I = l1llI.clone.call(this);
              return iil1I1I._data = this._data.clone(), iil1I1I;
            },
            "_minBufferSize": 0
          });
        i1iI1i11.Hasher = lI1iIiI1.extend({
          "cfg": l1llI.extend(),
          "init": function (liIiiliI) {
            this.cfg = this.cfg.extend(liIiiliI);
            this.reset();
          },
          "reset": function () {
            lI1iIiI1.reset.call(this);
            this._doReset();
          },
          "update": function (iiii1lI) {
            return this._append(iiii1lI), this._process(), this;
          },
          "finalize": function (lIil1iI) {
            return lIil1iI && this._append(lIil1iI), this._doFinalize();
          },
          "blockSize": 16,
          "_createHelper": function (iI1lIlII) {
            return function (lIiilIiI, IiI1i11I) {
              return new iI1lIlII.init(IiI1i11I).finalize(lIiilIiI);
            };
          },
          "_createHmacHelper": function (IIIi11l) {
            return function (Ii1111I, iIlIIiil) {
              var l11I1Il = new IlIIl1li.HMAC.init(IIIi11l, iIlIIiil);
              return l11I1Il.finalize(Ii1111I);
            };
          }
        });
        var IlIIl1li = lII1II1I.algo = {};
        return lII1II1I;
      }(Math);
      return I1iIIiil;
    };
    Ill11liI.exports = l11Ii1i();
  }(il1IiI11);
  var l1I1liI1 = {
    "exports": {}
  };
  !function (l1iIli1, iI1ii1) {
    var liII11Il,
      l1I1II1i = ["lastIndexOf", "substr", "concat"],
      iiIIi = Function.prototype.call,
      Il1i1I1l = [72, 62, 8, 90, 7, 0, 44, 82, 45, 467, 78, 78, 60, 8, 86, 45, -5714, 45, -4420, 43, 45, 10134, 43, 39, 34, 12, 90, 7, 1, 44, 82, 45, 467, 78, 24, 78, 23, 90, 7, 2, 44, 82, 45, 476, 78, 78, 23, 68];
    liII11Il = function (lll1l1ll) {
      return function (lIil1II) {
        function IiI1i11i(iI11IlI1) {
          switch (iI11IlI1) {
            case 476:
              return "JdM3|5";
              break;
            case 467:
              return "envCollect";
              break;
            case 417:
              return "object";
              break;
            case 421:
              return "string";
              break;
            default:
              break;
          }
        }
        var liili11I = lll1l1ll,
          Il1111Ii = liili11I.lib,
          iIl1i1i = Il1111Ii.WordArray,
          lll1i1Il = Il1111Ii.Hasher,
          ill1iII1 = liili11I.algo,
          iIlIil1 = [];
        !function () {
          for (var liI111Ii = 0; liI111Ii < 64; liI111Ii++) iIlIil1[liI111Ii] = 4294967296 * lIil1II.abs(lIil1II.sin(liI111Ii + 1)) | 0;
        }();
        var Ii1iIIli = ill1iII1.MD5 = lll1i1Il.extend({
          "_doReset": function () {
            this._hash = new iIl1i1i.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          "_doProcessBlock": function (liIllIi, iilIIiIl) {
            for (var ii1lI1I1 = 0; ii1lI1I1 < 16; ii1lI1I1++) {
              var Iii1liiI = iilIIiIl + ii1lI1I1,
                I111I1Il = liIllIi[Iii1liiI];
              liIllIi[Iii1liiI] = 16711935 & (I111I1Il << 8 | I111I1Il >>> 24) | 4278255360 & (I111I1Il << 24 | I111I1Il >>> 8);
            }
            var ll11IilI = this._hash.words,
              IlI1llIl = liIllIi[iilIIiIl + 0],
              llIiIiiI = liIllIi[iilIIiIl + 1],
              iII1l1i = liIllIi[iilIIiIl + 2],
              iI1llIl1 = liIllIi[iilIIiIl + 3],
              l1lli1 = liIllIi[iilIIiIl + 4],
              l1llll = liIllIi[iilIIiIl + 5],
              iilIiiIi = liIllIi[iilIIiIl + 6],
              ilIIli1I = liIllIi[iilIIiIl + 7],
              iIi11I11 = liIllIi[iilIIiIl + 8],
              Ii1I1lil = liIllIi[iilIIiIl + 9],
              l1lI1ill = liIllIi[iilIIiIl + 10],
              iliII1 = liIllIi[iilIIiIl + 11],
              l1Iliiii = liIllIi[iilIIiIl + 12],
              i1iiIili = liIllIi[iilIIiIl + 13],
              IlIlI1 = liIllIi[iilIIiIl + 14],
              IIli1IIi = liIllIi[iilIIiIl + 15],
              lI1iIlIl = ll11IilI[0],
              iIl11ill = ll11IilI[1],
              li1IliIi = ll11IilI[2],
              l11il1Il = ll11IilI[3];
            lI1iIlIl = ll1lI1iI(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, IlI1llIl, 7, iIlIil1[0]);
            l11il1Il = ll1lI1iI(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, llIiIiiI, 12, iIlIil1[1]);
            li1IliIi = ll1lI1iI(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iII1l1i, 17, iIlIil1[2]);
            iIl11ill = ll1lI1iI(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, iI1llIl1, 22, iIlIil1[3]);
            lI1iIlIl = ll1lI1iI(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, l1lli1, 7, iIlIil1[4]);
            l11il1Il = ll1lI1iI(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, l1llll, 12, iIlIil1[5]);
            li1IliIi = ll1lI1iI(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iilIiiIi, 17, iIlIil1[6]);
            iIl11ill = ll1lI1iI(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, ilIIli1I, 22, iIlIil1[7]);
            lI1iIlIl = ll1lI1iI(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, iIi11I11, 7, iIlIil1[8]);
            l11il1Il = ll1lI1iI(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, Ii1I1lil, 12, iIlIil1[9]);
            li1IliIi = ll1lI1iI(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, l1lI1ill, 17, iIlIil1[10]);
            iIl11ill = ll1lI1iI(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, iliII1, 22, iIlIil1[11]);
            lI1iIlIl = ll1lI1iI(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, l1Iliiii, 7, iIlIil1[12]);
            l11il1Il = ll1lI1iI(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, i1iiIili, 12, iIlIil1[13]);
            li1IliIi = ll1lI1iI(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, IlIlI1, 17, iIlIil1[14]);
            lI1iIlIl = IiIlI1l1(lI1iIlIl, iIl11ill = ll1lI1iI(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, IIli1IIi, 22, iIlIil1[15]), li1IliIi, l11il1Il, llIiIiiI, 5, iIlIil1[16]);
            l11il1Il = IiIlI1l1(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, iilIiiIi, 9, iIlIil1[17]);
            li1IliIi = IiIlI1l1(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iliII1, 14, iIlIil1[18]);
            iIl11ill = IiIlI1l1(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, IlI1llIl, 20, iIlIil1[19]);
            lI1iIlIl = IiIlI1l1(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, l1llll, 5, iIlIil1[20]);
            l11il1Il = IiIlI1l1(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, l1lI1ill, 9, iIlIil1[21]);
            li1IliIi = IiIlI1l1(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, IIli1IIi, 14, iIlIil1[22]);
            iIl11ill = IiIlI1l1(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, l1lli1, 20, iIlIil1[23]);
            lI1iIlIl = IiIlI1l1(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, Ii1I1lil, 5, iIlIil1[24]);
            l11il1Il = IiIlI1l1(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, IlIlI1, 9, iIlIil1[25]);
            li1IliIi = IiIlI1l1(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iI1llIl1, 14, iIlIil1[26]);
            iIl11ill = IiIlI1l1(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, iIi11I11, 20, iIlIil1[27]);
            lI1iIlIl = IiIlI1l1(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, i1iiIili, 5, iIlIil1[28]);
            l11il1Il = IiIlI1l1(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, iII1l1i, 9, iIlIil1[29]);
            li1IliIi = IiIlI1l1(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, ilIIli1I, 14, iIlIil1[30]);
            lI1iIlIl = llliill(lI1iIlIl, iIl11ill = IiIlI1l1(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, l1Iliiii, 20, iIlIil1[31]), li1IliIi, l11il1Il, l1llll, 4, iIlIil1[32]);
            l11il1Il = llliill(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, iIi11I11, 11, iIlIil1[33]);
            li1IliIi = llliill(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iliII1, 16, iIlIil1[34]);
            iIl11ill = llliill(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, IlIlI1, 23, iIlIil1[35]);
            lI1iIlIl = llliill(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, llIiIiiI, 4, iIlIil1[36]);
            l11il1Il = llliill(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, l1lli1, 11, iIlIil1[37]);
            li1IliIi = llliill(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, ilIIli1I, 16, iIlIil1[38]);
            iIl11ill = llliill(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, l1lI1ill, 23, iIlIil1[39]);
            lI1iIlIl = llliill(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, i1iiIili, 4, iIlIil1[40]);
            l11il1Il = llliill(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, IlI1llIl, 11, iIlIil1[41]);
            li1IliIi = llliill(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iI1llIl1, 16, iIlIil1[42]);
            iIl11ill = llliill(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, iilIiiIi, 23, iIlIil1[43]);
            lI1iIlIl = llliill(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, Ii1I1lil, 4, iIlIil1[44]);
            l11il1Il = llliill(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, l1Iliiii, 11, iIlIil1[45]);
            li1IliIi = llliill(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, IIli1IIi, 16, iIlIil1[46]);
            lI1iIlIl = iiliiIIl(lI1iIlIl, iIl11ill = llliill(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, iII1l1i, 23, iIlIil1[47]), li1IliIi, l11il1Il, IlI1llIl, 6, iIlIil1[48]);
            l11il1Il = iiliiIIl(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, ilIIli1I, 10, iIlIil1[49]);
            li1IliIi = iiliiIIl(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, IlIlI1, 15, iIlIil1[50]);
            iIl11ill = iiliiIIl(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, l1llll, 21, iIlIil1[51]);
            lI1iIlIl = iiliiIIl(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, l1Iliiii, 6, iIlIil1[52]);
            l11il1Il = iiliiIIl(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, iI1llIl1, 10, iIlIil1[53]);
            li1IliIi = iiliiIIl(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, l1lI1ill, 15, iIlIil1[54]);
            iIl11ill = iiliiIIl(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, llIiIiiI, 21, iIlIil1[55]);
            lI1iIlIl = iiliiIIl(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, iIi11I11, 6, iIlIil1[56]);
            l11il1Il = iiliiIIl(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, IIli1IIi, 10, iIlIil1[57]);
            li1IliIi = iiliiIIl(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iilIiiIi, 15, iIlIil1[58]);
            iIl11ill = iiliiIIl(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, i1iiIili, 21, iIlIil1[59]);
            lI1iIlIl = iiliiIIl(lI1iIlIl, iIl11ill, li1IliIi, l11il1Il, l1lli1, 6, iIlIil1[60]);
            l11il1Il = iiliiIIl(l11il1Il, lI1iIlIl, iIl11ill, li1IliIi, iliII1, 10, iIlIil1[61]);
            li1IliIi = iiliiIIl(li1IliIi, l11il1Il, lI1iIlIl, iIl11ill, iII1l1i, 15, iIlIil1[62]);
            iIl11ill = iiliiIIl(iIl11ill, li1IliIi, l11il1Il, lI1iIlIl, Ii1I1lil, 21, iIlIil1[63]);
            ll11IilI[0] = ll11IilI[0] + lI1iIlIl | 0;
            ll11IilI[1] = ll11IilI[1] + iIl11ill | 0;
            ll11IilI[2] = ll11IilI[2] + li1IliIi | 0;
            ll11IilI[3] = ll11IilI[3] + l11il1Il | 0;
          },
          "_doFinalize": function () {
            var Ii1i1111 = this._data,
              ll1i11il = Ii1i1111.words,
              ilIlIIl1 = 8 * this._nDataBytes,
              IIlIllIl = 8 * Ii1i1111.sigBytes;
            ll1i11il[IIlIllIl >>> 5] |= 128 << 24 - IIlIllIl % 32;
            var lilIiiIl = lIil1II.floor(ilIlIIl1 / 4294967296),
              i1ll1I1I = ilIlIIl1;
            ll1i11il[15 + (IIlIllIl + 64 >>> 9 << 4)] = 16711935 & (lilIiiIl << 8 | lilIiiIl >>> 24) | 4278255360 & (lilIiiIl << 24 | lilIiiIl >>> 8);
            ll1i11il[14 + (IIlIllIl + 64 >>> 9 << 4)] = 16711935 & (i1ll1I1I << 8 | i1ll1I1I >>> 24) | 4278255360 & (i1ll1I1I << 24 | i1ll1I1I >>> 8);
            Ii1i1111.sigBytes = 4 * (ll1i11il.length + 1);
            this._process();
            for (var iiIlIIlI = this._hash, lIIiiIll = iiIlIIlI.words, i1iilIIl = 0; i1iilIIl < 4; i1iilIIl++) {
              var iiI11I1I = lIIiiIll[i1iilIIl];
              lIIiiIll[i1iilIIl] = 16711935 & (iiI11I1I << 8 | iiI11I1I >>> 24) | 4278255360 & (iiI11I1I << 24 | iiI11I1I >>> 8);
            }
            return iiIlIIlI;
          },
          "_eData": function (iI1lill1) {
            for (var I1IllllI, llI1I1lI, li1ii1li, llI1lIli = iiIIi, ll1IIII1 = Il1i1I1l, i1ll1111 = [], l111IIIl = 0;;) switch (ll1IIII1[l111IIIl++]) {
              case 7:
                i1ll1111.push(i1ll1111[i1ll1111.length - 1]), i1ll1111[i1ll1111.length - 2] = i1ll1111[i1ll1111.length - 2][l1I1II1i[ll1IIII1[l111IIIl++]]];
                break;
              case 8:
                i1ll1111.pop();
                break;
              case 23:
                return i1ll1111.pop();
              case 24:
                i1ll1111[i1ll1111.length - 1] = i1ll1111[i1ll1111.length - 1].length;
                break;
              case 34:
                i1ll1111.pop() ? ++l111IIIl : l111IIIl += ll1IIII1[l111IIIl];
                break;
              case 39:
                li1ii1li = i1ll1111.pop(), i1ll1111[i1ll1111.length - 1] = i1ll1111[i1ll1111.length - 1] === li1ii1li;
                break;
              case 43:
                li1ii1li = i1ll1111.pop(), i1ll1111[i1ll1111.length - 1] += li1ii1li;
                break;
              case 44:
                i1ll1111.push(I1IllllI);
                break;
              case 45:
                i1ll1111.push(ll1IIII1[l111IIIl++]);
                break;
              case 60:
                llI1I1lI = i1ll1111[i1ll1111.length - 1];
                break;
              case 62:
                I1IllllI = i1ll1111[i1ll1111.length - 1];
                break;
              case 68:
                return;
              case 72:
                i1ll1111.push(IiI1i11i);
                break;
              case 78:
                null != i1ll1111[i1ll1111.length - 2] ? (i1ll1111[i1ll1111.length - 3] = llI1lIli.call(i1ll1111[i1ll1111.length - 3], i1ll1111[i1ll1111.length - 2], i1ll1111[i1ll1111.length - 1]), i1ll1111.length -= 2) : (li1ii1li = i1ll1111[i1ll1111.length - 3], i1ll1111[i1ll1111.length - 3] = li1ii1li(i1ll1111[i1ll1111.length - 1]), i1ll1111.length -= 2);
                break;
              case 82:
                i1ll1111.push(null);
                break;
              case 86:
                i1ll1111.push(llI1I1lI);
                break;
              case 90:
                i1ll1111.push(iI1lill1);
            }
          },
          "clone": function () {
            var I1111ill = lll1i1Il.clone.call(this);
            return I1111ill._hash = this._hash.clone(), I1111ill;
          }
        });
        function ll1lI1iI(Ili1Illl, iIi1iIl1, lI1I1111, ilIi1iil, iIIIlIl, IiIlI11I, I11l11i1) {
          var i11Ilili = Ili1Illl + (iIi1iIl1 & lI1I1111 | ~iIi1iIl1 & ilIi1iil) + iIIIlIl + I11l11i1;
          return (i11Ilili << IiIlI11I | i11Ilili >>> 32 - IiIlI11I) + iIi1iIl1;
        }
        function IiIlI1l1(iili1i1l, lI1IIil1, iliIlII, iliii1Il, li1lili1, ilIIiIi, iiiI1i11) {
          var lIl1lIi1 = iili1i1l + (lI1IIil1 & iliii1Il | iliIlII & ~iliii1Il) + li1lili1 + iiiI1i11;
          return (lIl1lIi1 << ilIIiIi | lIl1lIi1 >>> 32 - ilIIiIi) + lI1IIil1;
        }
        function llliill(Iilli1il, Ii111lil, l1iiIIlI, lIi1II, iI1iIII1, il1l1lII, IIl1lil) {
          var lIIIl1 = Iilli1il + (Ii111lil ^ l1iiIIlI ^ lIi1II) + iI1iIII1 + IIl1lil;
          return (lIIIl1 << il1l1lII | lIIIl1 >>> 32 - il1l1lII) + Ii111lil;
        }
        function iiliiIIl(I1iIl1, iIiiIIl1, ii111llI, l1Ii1i1, I1IIIlIl, Ii1liIl1, lIIllIIl) {
          var IilIIlI1 = I1iIl1 + (ii111llI ^ (iIiiIIl1 | ~l1Ii1i1)) + I1IIIlIl + lIIllIIl;
          return (IilIIlI1 << Ii1liIl1 | IilIIlI1 >>> 32 - Ii1liIl1) + iIiiIIl1;
        }
        liili11I.MD5 = lll1i1Il._createHelper(Ii1iIIli);
        liili11I.HmacMD5 = lll1i1Il._createHmacHelper(Ii1iIIli);
      }(Math), lll1l1ll.MD5;
    };
    l1iIli1.exports = liII11Il(il1IiI11.exports);
  }(l1I1liI1);
  var I11Ii1il = {
    "exports": {}
  };
  !function (l1l1llI, I1lII1Ii) {
    var lIll1liI, iiiIilI1, I11I1iii, ii11ilII, II1, i1ilil1, iIilIIli, l1li1;
    l1l1llI.exports = (iiiIilI1 = (lIll1liI = l1li1 = il1IiI11.exports).lib, I11I1iii = iiiIilI1.WordArray, ii11ilII = iiiIilI1.Hasher, II1 = lIll1liI.algo, i1ilil1 = [], iIilIIli = II1.SHA1 = ii11ilII.extend({
      "_doReset": function () {
        this._hash = new I11I1iii.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      "_doProcessBlock": function (lI1111il, lIiI1l1l) {
        for (var iIl1iIi = this._hash.words, lliIii1l = iIl1iIi[0], i11IIiii = iIl1iIi[1], i11II1 = iIl1iIi[2], iIl1lii1 = iIl1iIi[3], IIlIIIll = iIl1iIi[4], ll1ilIil = 0; ll1ilIil < 80; ll1ilIil++) {
          if (ll1ilIil < 16) i1ilil1[ll1ilIil] = 0 | lI1111il[lIiI1l1l + ll1ilIil];else {
            var l1IlII1I = i1ilil1[ll1ilIil - 3] ^ i1ilil1[ll1ilIil - 8] ^ i1ilil1[ll1ilIil - 14] ^ i1ilil1[ll1ilIil - 16];
            i1ilil1[ll1ilIil] = l1IlII1I << 1 | l1IlII1I >>> 31;
          }
          var lll1iII = (lliIii1l << 5 | lliIii1l >>> 27) + IIlIIIll + i1ilil1[ll1ilIil];
          lll1iII += ll1ilIil < 20 ? 1518500249 + (i11IIiii & i11II1 | ~i11IIiii & iIl1lii1) : ll1ilIil < 40 ? 1859775393 + (i11IIiii ^ i11II1 ^ iIl1lii1) : ll1ilIil < 60 ? (i11IIiii & i11II1 | i11IIiii & iIl1lii1 | i11II1 & iIl1lii1) - 1894007588 : (i11IIiii ^ i11II1 ^ iIl1lii1) - 899497514;
          IIlIIIll = iIl1lii1;
          iIl1lii1 = i11II1;
          i11II1 = i11IIiii << 30 | i11IIiii >>> 2;
          i11IIiii = lliIii1l;
          lliIii1l = lll1iII;
        }
        iIl1iIi[0] = iIl1iIi[0] + lliIii1l | 0;
        iIl1iIi[1] = iIl1iIi[1] + i11IIiii | 0;
        iIl1iIi[2] = iIl1iIi[2] + i11II1 | 0;
        iIl1iIi[3] = iIl1iIi[3] + iIl1lii1 | 0;
        iIl1iIi[4] = iIl1iIi[4] + IIlIIIll | 0;
      },
      "_doFinalize": function () {
        var iIii1Ii1 = this._data,
          iiiillli = iIii1Ii1.words,
          ll1IIl11 = 8 * this._nDataBytes,
          llIiiIii = 8 * iIii1Ii1.sigBytes;
        return iiiillli[llIiiIii >>> 5] |= 128 << 24 - llIiiIii % 32, iiiillli[14 + (llIiiIii + 64 >>> 9 << 4)] = Math.floor(ll1IIl11 / 4294967296), iiiillli[15 + (llIiiIii + 64 >>> 9 << 4)] = ll1IIl11, iIii1Ii1.sigBytes = 4 * iiiillli.length, this._process(), this._hash;
      },
      "clone": function () {
        var lIi1III1 = ii11ilII.clone.call(this);
        return lIi1III1._hash = this._hash.clone(), lIi1III1;
      }
    }), lIll1liI.SHA1 = ii11ilII._createHelper(iIilIIli), lIll1liI.HmacSHA1 = ii11ilII._createHmacHelper(iIilIIli), l1li1.SHA1);
  }(I11Ii1il);
  var iiiII1 = {
    "exports": {}
  };
  !function (iIll1l1, Il1i1liI) {
    var iliIi1II;
    iIll1l1.exports = (iliIi1II = il1IiI11.exports, function (illiiliI) {
      var i1liilII = iliIi1II,
        IIlIi1i1 = i1liilII.lib,
        IilI111i = IIlIi1i1.WordArray,
        Iiii1Ili = IIlIi1i1.Hasher,
        il1Illi1 = i1liilII.algo,
        IiIlII1l = [],
        i1Illill = [];
      !function () {
        function ilII1i1(iII1i11I) {
          for (var IlIIII = illiiliI.sqrt(iII1i11I), iIlilIi1 = 2; iIlilIi1 <= IlIIII; iIlilIi1++) if (!(iII1i11I % iIlilIi1)) return !1;
          return !0;
        }
        function IilIII11(iIiIlil1) {
          return 4294967296 * (iIiIlil1 - (0 | iIiIlil1)) | 0;
        }
        for (var IlliIlI = 2, IiiI1III = 0; IiiI1III < 64;) ilII1i1(IlliIlI) && (IiiI1III < 8 && (IiIlII1l[IiiI1III] = IilIII11(illiiliI.pow(IlliIlI, 0.5))), i1Illill[IiiI1III] = IilIII11(illiiliI.pow(IlliIlI, 1 / 3)), IiiI1III++), IlliIlI++;
      }();
      var illll1l = [],
        i11I11l = il1Illi1.SHA256 = Iiii1Ili.extend({
          "_doReset": function () {
            this._hash = new IilI111i.init(Il1i1I(IiIlII1l).call(IiIlII1l, 0));
          },
          "_doProcessBlock": function (I111I1i1, iiiIIi11) {
            for (var Ill1ii1l = this._hash.words, Ilii11II = Ill1ii1l[0], III1il1 = Ill1ii1l[1], Iil11Ii = Ill1ii1l[2], IIi1llI = Ill1ii1l[3], li1I1Il1 = Ill1ii1l[4], IIi1II11 = Ill1ii1l[5], iIliIllI = Ill1ii1l[6], l1I1ilII = Ill1ii1l[7], lI1l1iiI = 0; lI1l1iiI < 64; lI1l1iiI++) {
              if (lI1l1iiI < 16) illll1l[lI1l1iiI] = 0 | I111I1i1[iiiIIi11 + lI1l1iiI];else {
                var iii11IIi = illll1l[lI1l1iiI - 15],
                  Ii1lI1il = (iii11IIi << 25 | iii11IIi >>> 7) ^ (iii11IIi << 14 | iii11IIi >>> 18) ^ iii11IIi >>> 3,
                  I1I = illll1l[lI1l1iiI - 2],
                  i1iillil = (I1I << 15 | I1I >>> 17) ^ (I1I << 13 | I1I >>> 19) ^ I1I >>> 10;
                illll1l[lI1l1iiI] = Ii1lI1il + illll1l[lI1l1iiI - 7] + i1iillil + illll1l[lI1l1iiI - 16];
              }
              var Ii11I1II = Ilii11II & III1il1 ^ Ilii11II & Iil11Ii ^ III1il1 & Iil11Ii,
                i11iliI = (Ilii11II << 30 | Ilii11II >>> 2) ^ (Ilii11II << 19 | Ilii11II >>> 13) ^ (Ilii11II << 10 | Ilii11II >>> 22),
                Ilii1i = l1I1ilII + ((li1I1Il1 << 26 | li1I1Il1 >>> 6) ^ (li1I1Il1 << 21 | li1I1Il1 >>> 11) ^ (li1I1Il1 << 7 | li1I1Il1 >>> 25)) + (li1I1Il1 & IIi1II11 ^ ~li1I1Il1 & iIliIllI) + i1Illill[lI1l1iiI] + illll1l[lI1l1iiI];
              l1I1ilII = iIliIllI;
              iIliIllI = IIi1II11;
              IIi1II11 = li1I1Il1;
              li1I1Il1 = IIi1llI + Ilii1i | 0;
              IIi1llI = Iil11Ii;
              Iil11Ii = III1il1;
              III1il1 = Ilii11II;
              Ilii11II = Ilii1i + (i11iliI + Ii11I1II) | 0;
            }
            Ill1ii1l[0] = Ill1ii1l[0] + Ilii11II | 0;
            Ill1ii1l[1] = Ill1ii1l[1] + III1il1 | 0;
            Ill1ii1l[2] = Ill1ii1l[2] + Iil11Ii | 0;
            Ill1ii1l[3] = Ill1ii1l[3] + IIi1llI | 0;
            Ill1ii1l[4] = Ill1ii1l[4] + li1I1Il1 | 0;
            Ill1ii1l[5] = Ill1ii1l[5] + IIi1II11 | 0;
            Ill1ii1l[6] = Ill1ii1l[6] + iIliIllI | 0;
            Ill1ii1l[7] = Ill1ii1l[7] + l1I1ilII | 0;
          },
          "_doFinalize": function () {
            var Ili1Iiil = this._data,
              l11l1i1I = Ili1Iiil.words,
              iI1il = 8 * this._nDataBytes,
              li1l1I1l = 8 * Ili1Iiil.sigBytes;
            return l11l1i1I[li1l1I1l >>> 5] |= 128 << 24 - li1l1I1l % 32, l11l1i1I[14 + (li1l1I1l + 64 >>> 9 << 4)] = illiiliI.floor(iI1il / 4294967296), l11l1i1I[15 + (li1l1I1l + 64 >>> 9 << 4)] = iI1il, Ili1Iiil.sigBytes = 4 * l11l1i1I.length, this._process(), this._hash;
          },
          "clone": function () {
            var iI11IlI = Iiii1Ili.clone.call(this);
            return iI11IlI._hash = this._hash.clone(), iI11IlI;
          }
        });
      i1liilII.SHA256 = Iiii1Ili._createHelper(i11I11l);
      i1liilII.HmacSHA256 = Iiii1Ili._createHmacHelper(i11I11l);
    }(Math), iliIi1II.SHA256);
  }(iiiII1);
  var ill1IliI = {
    "exports": {}
  };
  !function (iiIIIllI, IlI1i1ii) {
    var iliilIl1,
      il1iiIl = ["init", "_hasher", "parse", "eKey", "blockSize", "sigBytes", "finalize", "clamp", "clone", "_oKey", "_iKey", "words", 2736052183, "reset", "split", "", "slice", "pop", "charCodeAt", "fromCharCode", "push", "concat", "join"],
      ill1l1II = Function.prototype.call,
      II1llIl1 = [44, 33, 77, 26, 25, 21, 0, 57, 39, 23, 1, 93, 77, 30, 32, 11, 50, 60, 421, 14, 87, 59, 11, 7, 13, 2, 26, 13, 3, 30, 14, 14, 97, 77, 25, 21, 4, 71, 77, 55, 60, -6693, 60, -6518, 54, 60, 13215, 54, 95, 69, 77, 30, 21, 5, 18, 83, 59, 7, 25, 13, 6, 30, 14, 97, 77, 30, 13, 7, 91, 77, 26, 30, 13, 8, 91, 23, 9, 62, 77, 26, 30, 13, 8, 91, 23, 10, 40, 77, 88, 21, 11, 86, 77, 9, 21, 11, 28, 77, 60, -8911, 60, -9770, 54, 60, 18681, 54, 42, 77, 89, 27, 65, 72, 75, 99, 60, -1329317024, 60, 142821669, 54, 53, 12, 54, 56, 94, 77, 15, 72, 75, 99, 60, 909522486, 56, 94, 77, 6, 77, 72, 55, 35, 68, -30, 88, 9, 18, 23, 5, 23, 5, 77, 26, 13, 13, 91, 77, 17, 13, 81, 0, 32, 1, 11, 53, 12, 79, 81, 2, 15, -6938, 15, 6135, 77, 15, 803, 77, 15, -1423, 15, -3610, 77, 15, 5040, 77, 18, 25, 12, 79, 81, 2, 15, 5591, 15, -2785, 77, 15, -2799, 77, 11, 47, 12, 27, 0, 28, 12, 83, 40, 84, 81, 3, 8, 81, 4, 15, -3397, 15, -4121, 77, 15, 7518, 77, 11, 21, 12, 19, 81, 5, 15, -73, 15, 7869, 77, 15, -7638, 77, 35, 86, 11, 65, 12, 95, 81, 6, 10, 11, 12, 84, 89, 15, 1790, 15, -5805, 77, 15, 4015, 77, 48, 9, -51, 95, 81, 7, 17, 11, 28, 12, 95, 81, 8, 32, 1, 11, 31, 26];
    iliilIl1 = function (i1illiII) {
      function iiIllil(lI1l1II) {
        switch (lI1l1II) {
          case 421:
            return "string";
            break;
          default:
            break;
        }
      }
      var lI1i1Il1, ii1i1IlI, l1lliiIl;
      ii1i1IlI = (lI1i1Il1 = i1illiII).lib.Base;
      l1lliiIl = lI1i1Il1.enc.Utf8;
      lI1i1Il1.algo.HMAC = ii1i1IlI.extend({
        "init": function (l1lIIl11, lI1ii1i) {
          for (var ilIiIlII, i1iiiiIi, ilIII1I, IIIlIli, iliiIilI, i1IIiI1i, IiIIII, Ill1i1il, lil1lIII, I1iiIil = ill1l1II, llIIII11 = II1llIl1, Ii11I11i = [], II1illi1 = 0;;) switch (llIIII11[II1illi1++]) {
            case 6:
              Ii11I11i.push(Ill1i1il++);
              break;
            case 7:
              Ii11I11i.push(l1lliiIl);
              break;
            case 9:
              Ii11I11i.push(iliiIilI);
              break;
            case 11:
              Ii11I11i.push(ilIiIlII);
              break;
            case 13:
              Ii11I11i.push(Ii11I11i[Ii11I11i.length - 1]), Ii11I11i[Ii11I11i.length - 2] = Ii11I11i[Ii11I11i.length - 2][il1iiIl[llIIII11[II1illi1++]]];
              break;
            case 14:
              null != Ii11I11i[Ii11I11i.length - 2] ? (Ii11I11i[Ii11I11i.length - 3] = I1iiIil.call(Ii11I11i[Ii11I11i.length - 3], Ii11I11i[Ii11I11i.length - 2], Ii11I11i[Ii11I11i.length - 1]), Ii11I11i.length -= 2) : (lil1lIII = Ii11I11i[Ii11I11i.length - 3], Ii11I11i[Ii11I11i.length - 3] = lil1lIII(Ii11I11i[Ii11I11i.length - 1]), Ii11I11i.length -= 2);
              break;
            case 15:
              Ii11I11i.push(IiIIII);
              break;
            case 17:
              return;
            case 18:
              Ii11I11i.push(ilIII1I);
              break;
            case 21:
              Ii11I11i[Ii11I11i.length - 1] = Ii11I11i[Ii11I11i.length - 1][il1iiIl[llIIII11[II1illi1++]]];
              break;
            case 23:
              Ii11I11i[Ii11I11i.length - 2][il1iiIl[llIIII11[II1illi1++]]] = Ii11I11i[Ii11I11i.length - 1], Ii11I11i[Ii11I11i.length - 2] = Ii11I11i[Ii11I11i.length - 1], Ii11I11i.length--;
              break;
            case 25:
              Ii11I11i.push(l1lIIl11);
              break;
            case 26:
              Ii11I11i.push(this);
              break;
            case 28:
              IiIIII = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 30:
              Ii11I11i.push(lI1ii1i);
              break;
            case 32:
              Ii11I11i[Ii11I11i.length - 1] = IilIiIiI(Ii11I11i[Ii11I11i.length - 1]);
              break;
            case 33:
              ilIiIlII = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 35:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] = Ii11I11i[Ii11I11i.length - 1] < lil1lIII;
              break;
            case 39:
              Ii11I11i[Ii11I11i.length - 2] = new Ii11I11i[Ii11I11i.length - 2](), Ii11I11i.length -= 1;
              break;
            case 40:
              iliiIilI = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 42:
              Ill1i1il = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 44:
              Ii11I11i.push(iiIllil);
              break;
            case 50:
              Ii11I11i.push(null);
              break;
            case 53:
              Ii11I11i.push(il1iiIl[llIIII11[II1illi1++]]);
              break;
            case 54:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] += lil1lIII;
              break;
            case 55:
              Ii11I11i.push(i1iiiiIi);
              break;
            case 56:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] ^= lil1lIII;
              break;
            case 57:
              Ii11I11i.push(void 0);
              break;
            case 59:
              Ii11I11i[Ii11I11i.length - 1] ? (++II1illi1, --Ii11I11i.length) : II1illi1 += llIIII11[II1illi1];
              break;
            case 60:
              Ii11I11i.push(llIIII11[II1illi1++]);
              break;
            case 62:
              IIIlIli = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 65:
              Ii11I11i.push(i1IIiI1i);
              break;
            case 68:
              Ii11I11i.pop() ? II1illi1 += llIIII11[II1illi1] : ++II1illi1;
              break;
            case 69:
              ilIII1I = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 71:
              i1iiiiIi = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 72:
              Ii11I11i.push(Ill1i1il);
              break;
            case 75:
              Ii11I11i.push(Ii11I11i[Ii11I11i.length - 2]), Ii11I11i.push(Ii11I11i[Ii11I11i.length - 2]);
              break;
            case 77:
              Ii11I11i.pop();
              break;
            case 83:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] = Ii11I11i[Ii11I11i.length - 1] > lil1lIII;
              break;
            case 86:
              i1IIiI1i = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 87:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] = Ii11I11i[Ii11I11i.length - 1] == lil1lIII;
              break;
            case 88:
              Ii11I11i.push(IIIlIli);
              break;
            case 89:
              II1illi1 += llIIII11[II1illi1];
              break;
            case 91:
              null != Ii11I11i[Ii11I11i.length - 1] ? Ii11I11i[Ii11I11i.length - 2] = I1iiIil.call(Ii11I11i[Ii11I11i.length - 2], Ii11I11i[Ii11I11i.length - 1]) : (lil1lIII = Ii11I11i[Ii11I11i.length - 2], Ii11I11i[Ii11I11i.length - 2] = lil1lIII()), Ii11I11i.length--;
              break;
            case 93:
              l1lIIl11 = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 94:
              Ii11I11i[Ii11I11i.length - 3][Ii11I11i[Ii11I11i.length - 2]] = Ii11I11i[Ii11I11i.length - 1], Ii11I11i[Ii11I11i.length - 3] = Ii11I11i[Ii11I11i.length - 1], Ii11I11i.length -= 2;
              break;
            case 95:
              lil1lIII = Ii11I11i.pop(), Ii11I11i[Ii11I11i.length - 1] *= lil1lIII;
              break;
            case 97:
              lI1ii1i = Ii11I11i[Ii11I11i.length - 1];
              break;
            case 99:
              Ii11I11i[Ii11I11i.length - 2] = Ii11I11i[Ii11I11i.length - 2][Ii11I11i[Ii11I11i.length - 1]], Ii11I11i.length--;
          }
        },
        "reset": function () {
          var l1lIiIIi = this._hasher;
          l1lIiIIi.reset();
          l1lIiIIi.update(this._iKey);
        },
        "update": function (ii1lII) {
          return this._hasher.update(ii1lII), this;
        },
        "eKey": function (llI1IiI1) {
          for (var i1lil11I, Iilil11, iI1Ii1I, lI1II1l, i11l11II, i11Ii1II, I1IillI1, IllI11I1 = ill1l1II, iIIIi1l1 = II1llIl1, Il1111ii = [], iI11IIil = 155;;) switch (iIIIi1l1[iI11IIil++]) {
            case 8:
              null != Il1111ii[Il1111ii.length - 1] ? Il1111ii[Il1111ii.length - 2] = IllI11I1.call(Il1111ii[Il1111ii.length - 2], Il1111ii[Il1111ii.length - 1]) : (I1IillI1 = Il1111ii[Il1111ii.length - 2], Il1111ii[Il1111ii.length - 2] = I1IillI1()), Il1111ii.length--;
              break;
            case 9:
              Il1111ii.pop() ? iI11IIil += iIIIi1l1[iI11IIil] : ++iI11IIil;
              break;
            case 10:
              Il1111ii.push(i11Ii1II);
              break;
            case 11:
              null != Il1111ii[Il1111ii.length - 2] ? (Il1111ii[Il1111ii.length - 3] = IllI11I1.call(Il1111ii[Il1111ii.length - 3], Il1111ii[Il1111ii.length - 2], Il1111ii[Il1111ii.length - 1]), Il1111ii.length -= 2) : (I1IillI1 = Il1111ii[Il1111ii.length - 3], Il1111ii[Il1111ii.length - 3] = I1IillI1(Il1111ii[Il1111ii.length - 1]), Il1111ii.length -= 2);
              break;
            case 12:
              Il1111ii.pop();
              break;
            case 13:
              Il1111ii.push(llI1IiI1);
              break;
            case 15:
              Il1111ii.push(iIIIi1l1[iI11IIil++]);
              break;
            case 17:
              Il1111ii.push(iI1Ii1I);
              break;
            case 18:
              Il1111ii[Il1111ii.length - 4] = IllI11I1.call(Il1111ii[Il1111ii.length - 4], Il1111ii[Il1111ii.length - 3], Il1111ii[Il1111ii.length - 2], Il1111ii[Il1111ii.length - 1]), Il1111ii.length -= 3;
              break;
            case 19:
              Il1111ii.push(String);
              break;
            case 21:
              i11l11II = Il1111ii[Il1111ii.length - 1];
              break;
            case 25:
              Iilil11 = Il1111ii[Il1111ii.length - 1];
              break;
            case 26:
              return;
            case 27:
              Il1111ii.push(new Array(iIIIi1l1[iI11IIil++]));
              break;
            case 28:
              lI1II1l = Il1111ii[Il1111ii.length - 1];
              break;
            case 31:
              return Il1111ii.pop();
            case 32:
              Il1111ii.push(il1iiIl[14 + iIIIi1l1[iI11IIil++]]);
              break;
            case 35:
              Il1111ii.push(i11l11II);
              break;
            case 47:
              iI1Ii1I = Il1111ii[Il1111ii.length - 1];
              break;
            case 48:
              I1IillI1 = Il1111ii.pop(), Il1111ii[Il1111ii.length - 1] = Il1111ii[Il1111ii.length - 1] > I1IillI1;
              break;
            case 53:
              i1lil11I = Il1111ii[Il1111ii.length - 1];
              break;
            case 65:
              i11Ii1II = Il1111ii[Il1111ii.length - 1];
              break;
            case 77:
              I1IillI1 = Il1111ii.pop(), Il1111ii[Il1111ii.length - 1] += I1IillI1;
              break;
            case 79:
              Il1111ii.push(i1lil11I);
              break;
            case 81:
              Il1111ii.push(Il1111ii[Il1111ii.length - 1]), Il1111ii[Il1111ii.length - 2] = Il1111ii[Il1111ii.length - 2][il1iiIl[14 + iIIIi1l1[iI11IIil++]]];
              break;
            case 83:
              iI11IIil += iIIIi1l1[iI11IIil];
              break;
            case 84:
              Il1111ii.push(Iilil11);
              break;
            case 86:
              I1IillI1 = Il1111ii.pop(), Il1111ii[Il1111ii.length - 1] -= I1IillI1;
              break;
            case 89:
              Il1111ii[Il1111ii.length - 1] = Il1111ii[Il1111ii.length - 1].length;
              break;
            case 95:
              Il1111ii.push(lI1II1l);
          }
        },
        "finalize": function (li11IlII) {
          var i1IlIl,
            lIl1iIl = this._hasher,
            iIIli1ii = lIl1iIl.finalize(li11IlII);
          return lIl1iIl.reset(), lIl1iIl.finalize(lilIi1lI(i1IlIl = this._oKey.clone()).call(i1IlIl, iIIli1ii));
        }
      });
    };
    iiIIIllI.exports = iliilIl1(il1IiI11.exports);
  }(ill1IliI);
  var lllI1III = {
    "exports": {}
  };
  !function (iii1ilii, Iiii1I1i) {
    var I1i1illl,
      l1li1Ill = ["enc", "Utils", "fromWordArray", "slice", "call", "prototype", "push", "apply", "toWordArray", "words", "sigBytes", "_map1", "clamp", "charAt", 0.75, "reverse", "join", ""],
      l1iIi1ii = Function.prototype.call,
      I11ilI11 = [36, 6, 0, 6, 1, 21, 2, 50, 94, 54, 76, 90, 0, 6, 3, 21, 4, 33, 94, 56, 76, 90, 0, 87, 76, 43, 6, 5, 6, 6, 21, 7, 52, 25, 84, 76, 29, -8956, 29, 6189, 62, 29, 2770, 62, 52, 47, 29, -6898, 29, 5570, 62, 29, 1331, 62, 5, 55, 63, 76, 29, 8711, 29, -2858, 62, 29, -5853, 62, 49, 76, 3, 9, 52, 21, 6, 30, 94, 76, 7, 76, 13, 30, 89, 39, -12, 90, 0, 14, 76, 52, 47, 29, 8472, 29, -1796, 62, 29, -6675, 62, 55, 83, 76, 3, 47, 43, 6, 5, 6, 6, 21, 7, 70, 52, 21, 3, 20, 29, -7207, 29, 4113, 62, 29, 3096, 62, 55, 20, 29, 4, 29, -8118, 62, 29, 8115, 62, 62, 84, 84, 76, 20, 29, 8214, 29, 3340, 62, 29, -11551, 62, 55, 83, 76, 20, 29, 2116, 29, -9645, 62, 29, 7529, 62, 1, 39, -57, 36, 6, 0, 6, 1, 21, 8, 70, 94, 85, 76, 66, 6, 9, 71, 76, 66, 6, 10, 12, 76, 92, 11, 80, 76, 66, 21, 12, 26, 76, 90, 0, 10, 76, 29, 5802, 29, -3698, 62, 29, -2104, 62, 82, 76, 3, 295, 28, 77, 29, 429, 29, -5764, 62, 29, 5337, 62, 17, 18, 29, -6426, 29, 4235, 62, 29, 2215, 62, 77, 29, 2656, 29, 5733, 62, 29, -8385, 62, 5, 29, 8, 99, 55, 17, 29, -6065, 29, 7515, 62, 29, -1195, 62, 2, 48, 76, 28, 77, 29, 8577, 29, -2163, 62, 29, -6413, 62, 62, 29, -3327, 29, -3568, 62, 29, 6897, 62, 17, 18, 29, -5903, 29, -444, 62, 29, 6371, 62, 77, 29, 8826, 29, 8537, 62, 29, -17362, 62, 62, 29, 8745, 29, -8835, 62, 29, 94, 62, 5, 29, 7071, 29, -4463, 62, 29, -2600, 62, 99, 55, 17, 29, -523, 29, -3762, 62, 29, 4540, 62, 2, 81, 76, 28, 77, 29, 5725, 29, -1492, 62, 29, -4231, 62, 62, 29, -3281, 29, 5384, 62, 29, -2101, 62, 17, 18, 29, -9380, 29, 8254, 62, 29, 1150, 62, 77, 29, 5404, 29, -1008, 62, 29, -4394, 62, 62, 29, -4905, 29, 7865, 62, 29, -2956, 62, 5, 29, -6221, 29, 3440, 62, 29, 2789, 62, 99, 55, 17, 29, -1790, 29, 4846, 62, 29, -2801, 62, 2, 27, 76, 32, 29, -1481, 29, -6790, 62, 29, 8287, 62, 24, 4, 29, 3380, 29, -2364, 62, 29, -1008, 62, 24, 9, 42, 9, 65, 76, 44, 69, 76, 3, 36, 11, 21, 6, 79, 21, 13, 64, 29, -8358, 29, 5538, 62, 29, 2826, 62, 29, 3, 78, 55, 99, 17, 29, -7726, 29, 4023, 62, 29, 3766, 62, 2, 94, 94, 76, 41, 76, 78, 29, 8304, 29, -1210, 62, 29, -7090, 62, 89, 68, 18, 77, 78, 29, -920, 29, -1999, 62, 29, 2919, 62, 38, 14, 62, 99, 62, 95, 89, 39, -65, 77, 29, -7099, 29, 9233, 62, 29, -2131, 62, 62, 82, 76, 77, 95, 89, 39, -298, 90, 0, 73, 76, 29, 5498, 29, 2050, 62, 29, -7548, 62, 96, 76, 3, 41, 43, 6, 5, 6, 6, 21, 7, 40, 11, 21, 3, 91, 91, 29, -7490, 29, -1401, 62, 29, 8895, 62, 62, 84, 21, 15, 26, 84, 76, 91, 29, -7054, 29, 3784, 62, 29, 3274, 62, 62, 96, 76, 91, 11, 47, 89, 39, -45, 40, 21, 16, 38, 17, 94, 53, 86];
    I1i1illl = function (i1i1ll1i) {
      function IiilIiII(I1iIIl1I) {
        switch (I1iIIl1I) {
          case 316:
            return "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX";
            break;
          case 319:
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            break;
          default:
            break;
        }
      }
      return IlIl1ll1 = IiilIiII, IlIiilI = (lIIiii1 = i1i1ll1i).lib.WordArray, lIIiii1.enc.Base64 = {
        "stringify": function (IIlIi111) {
          var lliiIlIi = IIlIi111.words,
            IlI11liI = IIlIi111.sigBytes,
            ll1I1lil = this._map;
          IIlIi111.clamp();
          for (var ill1I1Il = [], i11l1IlI = 0; i11l1IlI < IlI11liI; i11l1IlI += 3) for (var I11IiIli = (lliiIlIi[i11l1IlI >>> 2] >>> 24 - i11l1IlI % 4 * 8 & 255) << 16 | (lliiIlIi[i11l1IlI + 1 >>> 2] >>> 24 - (i11l1IlI + 1) % 4 * 8 & 255) << 8 | lliiIlIi[i11l1IlI + 2 >>> 2] >>> 24 - (i11l1IlI + 2) % 4 * 8 & 255, li1ili1i = 0; li1ili1i < 4 && i11l1IlI + 0.75 * li1ili1i < IlI11liI; li1ili1i++) ill1I1Il.push(ll1I1lil.charAt(I11IiIli >>> 6 * (3 - li1ili1i) & 63));
          var IIIIilIi = ll1I1lil.charAt(64);
          if (IIIIilIi) {
            for (; ill1I1Il.length % 4;) ill1I1Il.push(IIIIilIi);
          }
          return ill1I1Il.join("");
        },
        "parse": function (i1lli1lI) {
          var iliI1I11 = i1lli1lI.length,
            I1l1ii1I = this._map,
            lliIiI11 = this._reverseMap;
          if (!lliIiI11) {
            lliIiI11 = this._reverseMap = [];
            for (var liIilii = 0; liIilii < I1l1ii1I.length; liIilii++) lliIiI11[I1l1ii1I.charCodeAt(liIilii)] = liIilii;
          }
          var iI1I1ii = I1l1ii1I.charAt(64);
          if (iI1I1ii) {
            var ll1li1I1 = rm(i1lli1lI).call(i1lli1lI, iI1I1ii);
            -1 !== ll1li1I1 && (iliI1I11 = ll1li1I1);
          }
          return function (lIIlI1ll, lIl1liiI, liII1l11) {
            for (var ll11l1 = [], i1I11Iii = 0, Iil1I1Ii = 0; Iil1I1Ii < lIl1liiI; Iil1I1Ii++) if (Iil1I1Ii % 4) {
              var li1lIlII = liII1l11[lIIlI1ll.charCodeAt(Iil1I1Ii - 1)] << Iil1I1Ii % 4 * 2 | liII1l11[lIIlI1ll.charCodeAt(Iil1I1Ii)] >>> 6 - Iil1I1Ii % 4 * 2;
              ll11l1[i1I11Iii >>> 2] |= li1lIlII << 24 - i1I11Iii % 4 * 8;
              i1I11Iii++;
            }
            return IlIiilI.create(ll11l1, i1I11Iii);
          }(i1lli1lI, iliI1I11, lliIiI11);
        },
        "encode": function (II11l1l) {
          for (var I111IIl, lilil1il, iIilI1I1, i1llI1l1, IlIll1, l11I11lI, iiIlili1, iIIii1ii, l1lIli, iiIiliIl, lIl1iIl1, lI1I1Ili, li1Iil1i, IIIi11Ii, iiIii1il, l1lIi1I1, iiIiI1II, I1liil11, lll1lIl, IIliIl1I, li11i1, iII1lIll = l1iIi1ii, i1I1lIII = I11ilI11, liiiiili = [], lll1I11 = 0;;) switch (i1I1lIII[lll1I11++]) {
            case 1:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] = liiiiili[liiiiili.length - 1] >= li11i1;
              break;
            case 2:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] &= li11i1;
              break;
            case 3:
              lll1I11 += i1I1lIII[lll1I11];
              break;
            case 4:
              liiiiili.push(iiIii1il);
              break;
            case 5:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] %= li11i1;
              break;
            case 6:
              liiiiili[liiiiili.length - 1] = liiiiili[liiiiili.length - 1][l1li1Ill[i1I1lIII[lll1I11++]]];
              break;
            case 7:
              liiiiili.push(IlIll1++);
              break;
            case 9:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] |= li11i1;
              break;
            case 10:
              lI1I1Ili = liiiiili[liiiiili.length - 1];
              break;
            case 11:
              liiiiili.push(lI1I1Ili);
              break;
            case 12:
              iiIiliIl = liiiiili[liiiiili.length - 1];
              break;
            case 13:
              liiiiili.push(IlIll1);
              break;
            case 14:
              l11I11lI = liiiiili[liiiiili.length - 1];
              break;
            case 17:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] >>>= li11i1;
              break;
            case 18:
              liiiiili[liiiiili.length - 2] = liiiiili[liiiiili.length - 2][liiiiili[liiiiili.length - 1]], liiiiili.length--;
              break;
            case 20:
              liiiiili.push(iiIlili1);
              break;
            case 21:
              liiiiili.push(liiiiili[liiiiili.length - 1]), liiiiili[liiiiili.length - 2] = liiiiili[liiiiili.length - 2][l1li1Ill[i1I1lIII[lll1I11++]]];
              break;
            case 24:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] <<= li11i1;
              break;
            case 25:
              liiiiili.push(lilil1il);
              break;
            case 26:
              null != liiiiili[liiiiili.length - 1] ? liiiiili[liiiiili.length - 2] = iII1lIll.call(liiiiili[liiiiili.length - 2], liiiiili[liiiiili.length - 1]) : (li11i1 = liiiiili[liiiiili.length - 2], liiiiili[liiiiili.length - 2] = li11i1()), liiiiili.length--;
              break;
            case 27:
              l1lIi1I1 = liiiiili[liiiiili.length - 1];
              break;
            case 28:
              liiiiili.push(l1lIli);
              break;
            case 29:
              liiiiili.push(i1I1lIII[lll1I11++]);
              break;
            case 30:
              liiiiili.push(i1llI1l1);
              break;
            case 32:
              liiiiili.push(IIIi11Ii);
              break;
            case 33:
              liiiiili.push(I111IIl);
              break;
            case 36:
              liiiiili.push(i1i1ll1i);
              break;
            case 38:
              liiiiili.push(l1li1Ill[i1I1lIII[lll1I11++]]);
              break;
            case 39:
              liiiiili.pop() ? lll1I11 += i1I1lIII[lll1I11] : ++lll1I11;
              break;
            case 40:
              liiiiili.push(lll1lIl);
              break;
            case 41:
              liiiiili.push(I1liil11++);
              break;
            case 42:
              liiiiili.push(l1lIi1I1);
              break;
            case 43:
              liiiiili.push(Array);
              break;
            case 44:
              liiiiili.push(0);
              break;
            case 47:
              liiiiili[liiiiili.length - 1] = liiiiili[liiiiili.length - 1].length;
              break;
            case 48:
              IIIi11Ii = liiiiili[liiiiili.length - 1];
              break;
            case 49:
              IlIll1 = liiiiili[liiiiili.length - 1];
              break;
            case 50:
              liiiiili.push(II11l1l);
              break;
            case 52:
              liiiiili.push(iIilI1I1);
              break;
            case 53:
              return liiiiili.pop();
            case 54:
              I111IIl = liiiiili[liiiiili.length - 1];
              break;
            case 55:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] -= li11i1;
              break;
            case 56:
              lilil1il = liiiiili[liiiiili.length - 1];
              break;
            case 62:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] += li11i1;
              break;
            case 63:
              i1llI1l1 = liiiiili[liiiiili.length - 1];
              break;
            case 64:
              liiiiili.push(iiIiI1II);
              break;
            case 65:
              iiIiI1II = liiiiili[liiiiili.length - 1];
              break;
            case 66:
              liiiiili.push(iIIii1ii);
              break;
            case 68:
              liiiiili[liiiiili.length - 1] ? (++lll1I11, --liiiiili.length) : lll1I11 += i1I1lIII[lll1I11];
              break;
            case 69:
              I1liil11 = liiiiili[liiiiili.length - 1];
              break;
            case 70:
              liiiiili.push(l11I11lI);
              break;
            case 71:
              l1lIli = liiiiili[liiiiili.length - 1];
              break;
            case 73:
              lll1lIl = liiiiili[liiiiili.length - 1];
              break;
            case 76:
              liiiiili.pop();
              break;
            case 77:
              liiiiili.push(li1Iil1i);
              break;
            case 78:
              liiiiili.push(I1liil11);
              break;
            case 79:
              liiiiili.push(lIl1iIl1);
              break;
            case 80:
              lIl1iIl1 = liiiiili[liiiiili.length - 1];
              break;
            case 81:
              iiIii1il = liiiiili[liiiiili.length - 1];
              break;
            case 82:
              li1Iil1i = liiiiili[liiiiili.length - 1];
              break;
            case 83:
              iiIlili1 = liiiiili[liiiiili.length - 1];
              break;
            case 84:
              liiiiili[liiiiili.length - 4] = iII1lIll.call(liiiiili[liiiiili.length - 4], liiiiili[liiiiili.length - 3], liiiiili[liiiiili.length - 2], liiiiili[liiiiili.length - 1]), liiiiili.length -= 3;
              break;
            case 85:
              iIIii1ii = liiiiili[liiiiili.length - 1];
              break;
            case 86:
              return;
            case 87:
              iIilI1I1 = liiiiili[liiiiili.length - 1];
              break;
            case 89:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] = liiiiili[liiiiili.length - 1] < li11i1;
              break;
            case 90:
              liiiiili.push(new Array(i1I1lIII[lll1I11++]));
              break;
            case 91:
              liiiiili.push(IIliIl1I);
              break;
            case 92:
              liiiiili.push(this[l1li1Ill[i1I1lIII[lll1I11++]]]);
              break;
            case 94:
              null != liiiiili[liiiiili.length - 2] ? (liiiiili[liiiiili.length - 3] = iII1lIll.call(liiiiili[liiiiili.length - 3], liiiiili[liiiiili.length - 2], liiiiili[liiiiili.length - 1]), liiiiili.length -= 2) : (li11i1 = liiiiili[liiiiili.length - 3], liiiiili[liiiiili.length - 3] = li11i1(liiiiili[liiiiili.length - 1]), liiiiili.length -= 2);
              break;
            case 95:
              liiiiili.push(iiIiliIl);
              break;
            case 96:
              IIliIl1I = liiiiili[liiiiili.length - 1];
              break;
            case 99:
              li11i1 = liiiiili.pop(), liiiiili[liiiiili.length - 1] *= li11i1;
          }
        },
        "_map1": IlIl1ll1(316),
        "_map": IlIl1ll1(319)
      }, i1i1ll1i.enc.Base64;
      var IlIl1ll1, lIIiii1, IlIiilI;
    };
    iii1ilii.exports = I1i1illl(il1IiI11.exports);
  }(lllI1III);
  var liil1iil = {
      "exports": {}
    },
    I1li1l1 = {
      "exports": {}
    };
  !function (I1111ll1, iIlIlI11) {
    var IIll11I1, illIIii, ilII11li, i1lil11l, lilI1II1, iliiIlll, lIlili;
    I1111ll1.exports = (ilII11li = (illIIii = lIlili = il1IiI11.exports).lib, i1lil11l = ilII11li.Base, lilI1II1 = ilII11li.WordArray, (iliiIlll = illIIii.x64 = {}).Word = i1lil11l.extend({
      "init": function (iIi11IiI, Iiii1lli) {
        this.high = iIi11IiI;
        this.low = Iiii1lli;
      }
    }), iliiIlll.WordArray = i1lil11l.extend({
      "init": function (iIlllill, liIIl1I) {
        iIlllill = this.words = iIlllill || [];
        this.sigBytes = liIIl1I != IIll11I1 ? liIIl1I : 8 * iIlllill.length;
      },
      "toX32": function () {
        for (var Iiilill1 = this.words, IlIiIil = Iiilill1.length, iI1liIlI = [], II1iiI1 = 0; II1iiI1 < IlIiIil; II1iiI1++) {
          var IliiiiI1 = Iiilill1[II1iiI1];
          iI1liIlI.push(IliiiiI1.high);
          iI1liIlI.push(IliiiiI1.low);
        }
        return lilI1II1.create(iI1liIlI, this.sigBytes);
      },
      "clone": function () {
        for (var lli1l11i, IilIiil = i1lil11l.clone.call(this), Iii1llI = IilIiil.words = Il1i1I(lli1l11i = this.words).call(lli1l11i, 0), iilillI = Iii1llI.length, I1iI1Iil = 0; I1iI1Iil < iilillI; I1iI1Iil++) Iii1llI[I1iI1Iil] = Iii1llI[I1iI1Iil].clone();
        return IilIiil;
      }
    }), lIlili);
  }(I1li1l1);
  (function (ii11liII, iI1I1l11) {
    var l1IIlIIl;
    ii11liII.exports = (l1IIlIIl = il1IiI11.exports, function () {
      var iIiI1llI = l1IIlIIl,
        l1i1ll1i = iIiI1llI.lib.Hasher,
        iIIii1Il = iIiI1llI.x64,
        i1i1I1iI = iIIii1Il.Word,
        l1iill1i = iIIii1Il.WordArray,
        lI1ilI1l = iIiI1llI.algo;
      function IIlI1IIl() {
        return i1i1I1iI.create.apply(i1i1I1iI, arguments);
      }
      var ll1l1ilI = [IIlI1IIl(1116352408, 3609767458), IIlI1IIl(1899447441, 602891725), IIlI1IIl(3049323471, 3964484399), IIlI1IIl(3921009573, 2173295548), IIlI1IIl(961987163, 4081628472), IIlI1IIl(1508970993, 3053834265), IIlI1IIl(2453635748, 2937671579), IIlI1IIl(2870763221, 3664609560), IIlI1IIl(3624381080, 2734883394), IIlI1IIl(310598401, 1164996542), IIlI1IIl(607225278, 1323610764), IIlI1IIl(1426881987, 3590304994), IIlI1IIl(1925078388, 4068182383), IIlI1IIl(2162078206, 991336113), IIlI1IIl(2614888103, 633803317), IIlI1IIl(3248222580, 3479774868), IIlI1IIl(3835390401, 2666613458), IIlI1IIl(4022224774, 944711139), IIlI1IIl(264347078, 2341262773), IIlI1IIl(604807628, 2007800933), IIlI1IIl(770255983, 1495990901), IIlI1IIl(1249150122, 1856431235), IIlI1IIl(1555081692, 3175218132), IIlI1IIl(1996064986, 2198950837), IIlI1IIl(2554220882, 3999719339), IIlI1IIl(2821834349, 766784016), IIlI1IIl(2952996808, 2566594879), IIlI1IIl(3210313671, 3203337956), IIlI1IIl(3336571891, 1034457026), IIlI1IIl(3584528711, 2466948901), IIlI1IIl(113926993, 3758326383), IIlI1IIl(338241895, 168717936), IIlI1IIl(666307205, 1188179964), IIlI1IIl(773529912, 1546045734), IIlI1IIl(1294757372, 1522805485), IIlI1IIl(1396182291, 2643833823), IIlI1IIl(1695183700, 2343527390), IIlI1IIl(1986661051, 1014477480), IIlI1IIl(2177026350, 1206759142), IIlI1IIl(2456956037, 344077627), IIlI1IIl(2730485921, 1290863460), IIlI1IIl(2820302411, 3158454273), IIlI1IIl(3259730800, 3505952657), IIlI1IIl(3345764771, 106217008), IIlI1IIl(3516065817, 3606008344), IIlI1IIl(3600352804, 1432725776), IIlI1IIl(4094571909, 1467031594), IIlI1IIl(275423344, 851169720), IIlI1IIl(430227734, 3100823752), IIlI1IIl(506948616, 1363258195), IIlI1IIl(659060556, 3750685593), IIlI1IIl(883997877, 3785050280), IIlI1IIl(958139571, 3318307427), IIlI1IIl(1322822218, 3812723403), IIlI1IIl(1537002063, 2003034995), IIlI1IIl(1747873779, 3602036899), IIlI1IIl(1955562222, 1575990012), IIlI1IIl(2024104815, 1125592928), IIlI1IIl(2227730452, 2716904306), IIlI1IIl(2361852424, 442776044), IIlI1IIl(2428436474, 593698344), IIlI1IIl(2756734187, 3733110249), IIlI1IIl(3204031479, 2999351573), IIlI1IIl(3329325298, 3815920427), IIlI1IIl(3391569614, 3928383900), IIlI1IIl(3515267271, 566280711), IIlI1IIl(3940187606, 3454069534), IIlI1IIl(4118630271, 4000239992), IIlI1IIl(116418474, 1914138554), IIlI1IIl(174292421, 2731055270), IIlI1IIl(289380356, 3203993006), IIlI1IIl(460393269, 320620315), IIlI1IIl(685471733, 587496836), IIlI1IIl(852142971, 1086792851), IIlI1IIl(1017036298, 365543100), IIlI1IIl(1126000580, 2618297676), IIlI1IIl(1288033470, 3409855158), IIlI1IIl(1501505948, 4234509866), IIlI1IIl(1607167915, 987167468), IIlI1IIl(1816402316, 1246189591)],
        lliIliIi = [];
      !function () {
        for (var l1i1111I = 0; l1i1111I < 80; l1i1111I++) lliIliIi[l1i1111I] = IIlI1IIl();
      }();
      var i1iiII1I = lI1ilI1l.SHA512 = l1i1ll1i.extend({
        "_doReset": function () {
          this._hash = new l1iill1i.init([new i1i1I1iI.init(1779033703, 4089235720), new i1i1I1iI.init(3144134277, 2227873595), new i1i1I1iI.init(1013904242, 4271175723), new i1i1I1iI.init(2773480762, 1595750129), new i1i1I1iI.init(1359893119, 2917565137), new i1i1I1iI.init(2600822924, 725511199), new i1i1I1iI.init(528734635, 4215389547), new i1i1I1iI.init(1541459225, 327033209)]);
        },
        "_doProcessBlock": function (liI1Ii1i, iIII1ll1) {
          for (var ii1il1lI = this._hash.words, I1lllII = ii1il1lI[0], I111I1il = ii1il1lI[1], lIIliiIi = ii1il1lI[2], i11111l1 = ii1il1lI[3], lllIi1I1 = ii1il1lI[4], l1Ii1II = ii1il1lI[5], lII1IiI = ii1il1lI[6], il1l1i = ii1il1lI[7], llil1I11 = I1lllII.high, I1liIlIi = I1lllII.low, ii1lIi1l = I111I1il.high, Il1lII1I = I111I1il.low, i1i1i1 = lIIliiIi.high, Ill1lIi1 = lIIliiIi.low, il1lI1 = i11111l1.high, llI1l1lI = i11111l1.low, ll11ill1 = lllIi1I1.high, ii1il1il = lllIi1I1.low, iIli1iIi = l1Ii1II.high, liii11iI = l1Ii1II.low, ii1iiI1 = lII1IiI.high, I1iI = lII1IiI.low, i11i1lil = il1l1i.high, I1iIll1 = il1l1i.low, III1ll = llil1I11, iIiIl1i = I1liIlIi, ll1l1ii = ii1lIi1l, IlliiIlI = Il1lII1I, iI1I1li = i1i1i1, ll1I1iIl = Ill1lIi1, IiIIiIiI = il1lI1, IIllII1 = llI1l1lI, lIlIlIIi = ll11ill1, l11li1il = ii1il1il, lillI1II = iIli1iIi, iIiI11l = liii11iI, IiII1III = ii1iiI1, Ilil1li1 = I1iI, iIiii1I = i11i1lil, lIllliII = I1iIll1, lII1lll = 0; lII1lll < 80; lII1lll++) {
            var i11lIlll,
              iiiIIil1,
              iII1Iiii = lliIliIi[lII1lll];
            if (lII1lll < 16) iiiIIil1 = iII1Iiii.high = 0 | liI1Ii1i[iIII1ll1 + 2 * lII1lll], i11lIlll = iII1Iiii.low = 0 | liI1Ii1i[iIII1ll1 + 2 * lII1lll + 1];else {
              var i1II11l1 = lliIliIi[lII1lll - 15],
                I1l1iI1i = i1II11l1.high,
                lliiill = i1II11l1.low,
                il1I11l = (I1l1iI1i >>> 1 | lliiill << 31) ^ (I1l1iI1i >>> 8 | lliiill << 24) ^ I1l1iI1i >>> 7,
                lIl1il1I = (lliiill >>> 1 | I1l1iI1i << 31) ^ (lliiill >>> 8 | I1l1iI1i << 24) ^ (lliiill >>> 7 | I1l1iI1i << 25),
                iIl1lIIl = lliIliIi[lII1lll - 2],
                iill1l1I = iIl1lIIl.high,
                IiIllilI = iIl1lIIl.low,
                iI1l1i1 = (iill1l1I >>> 19 | IiIllilI << 13) ^ (iill1l1I << 3 | IiIllilI >>> 29) ^ iill1l1I >>> 6,
                I1iilIi1 = (IiIllilI >>> 19 | iill1l1I << 13) ^ (IiIllilI << 3 | iill1l1I >>> 29) ^ (IiIllilI >>> 6 | iill1l1I << 26),
                Iilliii = lliIliIi[lII1lll - 7],
                Ii1Il1Il = Iilliii.high,
                lillIi11 = Iilliii.low,
                Il1iIii1 = lliIliIi[lII1lll - 16],
                iiiill1 = Il1iIii1.high,
                llIiI1II = Il1iIii1.low;
              iiiIIil1 = (iiiIIil1 = (iiiIIil1 = il1I11l + Ii1Il1Il + ((i11lIlll = lIl1il1I + lillIi11) >>> 0 < lIl1il1I >>> 0 ? 1 : 0)) + iI1l1i1 + ((i11lIlll += I1iilIi1) >>> 0 < I1iilIi1 >>> 0 ? 1 : 0)) + iiiill1 + ((i11lIlll += llIiI1II) >>> 0 < llIiI1II >>> 0 ? 1 : 0);
              iII1Iiii.high = iiiIIil1;
              iII1Iiii.low = i11lIlll;
            }
            var ilIlliII,
              Ii1Ii1i = lIlIlIIi & lillI1II ^ ~lIlIlIIi & IiII1III,
              i1IlliIl = l11li1il & iIiI11l ^ ~l11li1il & Ilil1li1,
              l1lIIiIi = III1ll & ll1l1ii ^ III1ll & iI1I1li ^ ll1l1ii & iI1I1li,
              IIIIlIii = iIiIl1i & IlliiIlI ^ iIiIl1i & ll1I1iIl ^ IlliiIlI & ll1I1iIl,
              Iil11Il = (III1ll >>> 28 | iIiIl1i << 4) ^ (III1ll << 30 | iIiIl1i >>> 2) ^ (III1ll << 25 | iIiIl1i >>> 7),
              ll1I1ii = (iIiIl1i >>> 28 | III1ll << 4) ^ (iIiIl1i << 30 | III1ll >>> 2) ^ (iIiIl1i << 25 | III1ll >>> 7),
              l1illl1i = (lIlIlIIi >>> 14 | l11li1il << 18) ^ (lIlIlIIi >>> 18 | l11li1il << 14) ^ (lIlIlIIi << 23 | l11li1il >>> 9),
              IIlIiii1 = (l11li1il >>> 14 | lIlIlIIi << 18) ^ (l11li1il >>> 18 | lIlIlIIi << 14) ^ (l11li1il << 23 | lIlIlIIi >>> 9),
              l1l1lII1 = ll1l1ilI[lII1lll],
              l1I11iil = l1l1lII1.high,
              il1ili1i = l1l1lII1.low,
              Iii1lIIi = iIiii1I + l1illl1i + ((ilIlliII = lIllliII + IIlIiii1) >>> 0 < lIllliII >>> 0 ? 1 : 0),
              il1iiI1 = ll1I1ii + IIIIlIii;
            iIiii1I = IiII1III;
            lIllliII = Ilil1li1;
            IiII1III = lillI1II;
            Ilil1li1 = iIiI11l;
            lillI1II = lIlIlIIi;
            iIiI11l = l11li1il;
            lIlIlIIi = IiIIiIiI + (Iii1lIIi = (Iii1lIIi = (Iii1lIIi = Iii1lIIi + Ii1Ii1i + ((ilIlliII += i1IlliIl) >>> 0 < i1IlliIl >>> 0 ? 1 : 0)) + l1I11iil + ((ilIlliII += il1ili1i) >>> 0 < il1ili1i >>> 0 ? 1 : 0)) + iiiIIil1 + ((ilIlliII += i11lIlll) >>> 0 < i11lIlll >>> 0 ? 1 : 0)) + ((l11li1il = IIllII1 + ilIlliII | 0) >>> 0 < IIllII1 >>> 0 ? 1 : 0) | 0;
            IiIIiIiI = iI1I1li;
            IIllII1 = ll1I1iIl;
            iI1I1li = ll1l1ii;
            ll1I1iIl = IlliiIlI;
            ll1l1ii = III1ll;
            IlliiIlI = iIiIl1i;
            III1ll = Iii1lIIi + (Iil11Il + l1lIIiIi + (il1iiI1 >>> 0 < ll1I1ii >>> 0 ? 1 : 0)) + ((iIiIl1i = ilIlliII + il1iiI1 | 0) >>> 0 < ilIlliII >>> 0 ? 1 : 0) | 0;
          }
          I1liIlIi = I1lllII.low = I1liIlIi + iIiIl1i;
          I1lllII.high = llil1I11 + III1ll + (I1liIlIi >>> 0 < iIiIl1i >>> 0 ? 1 : 0);
          Il1lII1I = I111I1il.low = Il1lII1I + IlliiIlI;
          I111I1il.high = ii1lIi1l + ll1l1ii + (Il1lII1I >>> 0 < IlliiIlI >>> 0 ? 1 : 0);
          Ill1lIi1 = lIIliiIi.low = Ill1lIi1 + ll1I1iIl;
          lIIliiIi.high = i1i1i1 + iI1I1li + (Ill1lIi1 >>> 0 < ll1I1iIl >>> 0 ? 1 : 0);
          llI1l1lI = i11111l1.low = llI1l1lI + IIllII1;
          i11111l1.high = il1lI1 + IiIIiIiI + (llI1l1lI >>> 0 < IIllII1 >>> 0 ? 1 : 0);
          ii1il1il = lllIi1I1.low = ii1il1il + l11li1il;
          lllIi1I1.high = ll11ill1 + lIlIlIIi + (ii1il1il >>> 0 < l11li1il >>> 0 ? 1 : 0);
          liii11iI = l1Ii1II.low = liii11iI + iIiI11l;
          l1Ii1II.high = iIli1iIi + lillI1II + (liii11iI >>> 0 < iIiI11l >>> 0 ? 1 : 0);
          I1iI = lII1IiI.low = I1iI + Ilil1li1;
          lII1IiI.high = ii1iiI1 + IiII1III + (I1iI >>> 0 < Ilil1li1 >>> 0 ? 1 : 0);
          I1iIll1 = il1l1i.low = I1iIll1 + lIllliII;
          il1l1i.high = i11i1lil + iIiii1I + (I1iIll1 >>> 0 < lIllliII >>> 0 ? 1 : 0);
        },
        "_doFinalize": function () {
          var IilI1ii = this._data,
            iiIl1lil = IilI1ii.words,
            iiiI1lII = 8 * this._nDataBytes,
            IIIiIl1i = 8 * IilI1ii.sigBytes;
          return iiIl1lil[IIIiIl1i >>> 5] |= 128 << 24 - IIIiIl1i % 32, iiIl1lil[30 + (IIIiIl1i + 128 >>> 10 << 5)] = Math.floor(iiiI1lII / 4294967296), iiIl1lil[31 + (IIIiIl1i + 128 >>> 10 << 5)] = iiiI1lII, IilI1ii.sigBytes = 4 * iiIl1lil.length, this._process(), this._hash.toX32();
        },
        "clone": function () {
          var lIiiil11 = l1i1ll1i.clone.call(this);
          return lIiiil11._hash = this._hash.clone(), lIiiil11;
        },
        "blockSize": 32
      });
      iIiI1llI.SHA512 = l1i1ll1i._createHelper(i1iiII1I);
      iIiI1llI.HmacSHA512 = l1i1ll1i._createHmacHelper(i1iiII1I);
    }(), l1IIlIIl.SHA512);
  })(liil1iil);
  var iiiII1 = {
    "exports": {}
  };
  !function (IliiiIl1, lIIIlIlI) {
    var IIIllilI;
    IliiiIl1.exports = (IIIllilI = il1IiI11.exports, function (iIililII) {
      var liIIII = IIIllilI,
        Il1ilii = liIIII.lib,
        lll1III = Il1ilii.WordArray,
        i1lIIIi1 = Il1ilii.Hasher,
        IlilI1l = liIIII.algo,
        liIIllIi = [],
        iIiil1Il = [];
      !function () {
        function Il11Ii(li1lllII) {
          for (var lI1IIiiI = iIililII.sqrt(li1lllII), lI11ll = 2; lI11ll <= lI1IIiiI; lI11ll++) if (!(li1lllII % lI11ll)) return !1;
          return !0;
        }
        function IIlil1l1(i11iI1Il) {
          return 4294967296 * (i11iI1Il - (0 | i11iI1Il)) | 0;
        }
        for (var iIlii11I = 2, llilII1I = 0; llilII1I < 64;) Il11Ii(iIlii11I) && (llilII1I < 8 && (liIIllIi[llilII1I] = IIlil1l1(iIililII.pow(iIlii11I, 0.5))), iIiil1Il[llilII1I] = IIlil1l1(iIililII.pow(iIlii11I, 1 / 3)), llilII1I++), iIlii11I++;
      }();
      var l1i1IiI = [],
        IIIIIli1 = IlilI1l.SHA256 = i1lIIIi1.extend({
          "_doReset": function () {
            this._hash = new lll1III.init(Il1i1I(liIIllIi).call(liIIllIi, 0));
          },
          "_doProcessBlock": function (I1Il11i1, iIll1lli) {
            for (var III11li = this._hash.words, iilli1Il = III11li[0], ill1I1Ii = III11li[1], iIilIiii = III11li[2], II1IIlll = III11li[3], illi1lI = III11li[4], IlIilIl1 = III11li[5], I1i1i1I1 = III11li[6], IIiiII11 = III11li[7], lilI1ll1 = 0; lilI1ll1 < 64; lilI1ll1++) {
              if (lilI1ll1 < 16) l1i1IiI[lilI1ll1] = 0 | I1Il11i1[iIll1lli + lilI1ll1];else {
                var I1111iIl = l1i1IiI[lilI1ll1 - 15],
                  iili1II1 = (I1111iIl << 25 | I1111iIl >>> 7) ^ (I1111iIl << 14 | I1111iIl >>> 18) ^ I1111iIl >>> 3,
                  IIliI1li = l1i1IiI[lilI1ll1 - 2],
                  li11i11 = (IIliI1li << 15 | IIliI1li >>> 17) ^ (IIliI1li << 13 | IIliI1li >>> 19) ^ IIliI1li >>> 10;
                l1i1IiI[lilI1ll1] = iili1II1 + l1i1IiI[lilI1ll1 - 7] + li11i11 + l1i1IiI[lilI1ll1 - 16];
              }
              var illl11ll = iilli1Il & ill1I1Ii ^ iilli1Il & iIilIiii ^ ill1I1Ii & iIilIiii,
                lll111 = (iilli1Il << 30 | iilli1Il >>> 2) ^ (iilli1Il << 19 | iilli1Il >>> 13) ^ (iilli1Il << 10 | iilli1Il >>> 22),
                iIIl1I = IIiiII11 + ((illi1lI << 26 | illi1lI >>> 6) ^ (illi1lI << 21 | illi1lI >>> 11) ^ (illi1lI << 7 | illi1lI >>> 25)) + (illi1lI & IlIilIl1 ^ ~illi1lI & I1i1i1I1) + iIiil1Il[lilI1ll1] + l1i1IiI[lilI1ll1];
              IIiiII11 = I1i1i1I1;
              I1i1i1I1 = IlIilIl1;
              IlIilIl1 = illi1lI;
              illi1lI = II1IIlll + iIIl1I | 0;
              II1IIlll = iIilIiii;
              iIilIiii = ill1I1Ii;
              ill1I1Ii = iilli1Il;
              iilli1Il = iIIl1I + (lll111 + illl11ll) | 0;
            }
            III11li[0] = III11li[0] + iilli1Il | 0;
            III11li[1] = III11li[1] + ill1I1Ii | 0;
            III11li[2] = III11li[2] + iIilIiii | 0;
            III11li[3] = III11li[3] + II1IIlll | 0;
            III11li[4] = III11li[4] + illi1lI | 0;
            III11li[5] = III11li[5] + IlIilIl1 | 0;
            III11li[6] = III11li[6] + I1i1i1I1 | 0;
            III11li[7] = III11li[7] + IIiiII11 | 0;
          },
          "_doFinalize": function () {
            var i1llII1I = this._data,
              Iil1Ii1I = i1llII1I.words,
              Iiill1I1 = 8 * this._nDataBytes,
              I1iIlII1 = 8 * i1llII1I.sigBytes;
            return Iil1Ii1I[I1iIlII1 >>> 5] |= 128 << 24 - I1iIlII1 % 32, Iil1Ii1I[14 + (I1iIlII1 + 64 >>> 9 << 4)] = iIililII.floor(Iiill1I1 / 4294967296), Iil1Ii1I[15 + (I1iIlII1 + 64 >>> 9 << 4)] = Iiill1I1, i1llII1I.sigBytes = 4 * Iil1Ii1I.length, this._process(), this._hash;
          },
          "clone": function () {
            var IIIiiiii = i1lIIIi1.clone.call(this);
            return IIIiiiii._hash = this._hash.clone(), IIIiiiii;
          }
        });
      liIIII.SHA256 = i1lIIIi1._createHelper(IIIIIli1);
      liIIII.HmacSHA256 = i1lIIIi1._createHmacHelper(IIIIIli1);
    }(Math), IIIllilI.SHA256);
  }(iiiII1);
}
function ii1IIi1I(ilIiii1l, i11Ii1Il, llIii1I1 = "") {
  class lii1I1i1 {
    constructor(llIIIl = "", llliiii = "", Ii1iIl11 = "") {
      this.appId = llIIIl;
      this.v = "4.7";
      llliiii ? this.ua = llliiii : this.ua = this.__genUA();
      this.fp = Ii1iIl11 ? Ii1iIl11 : this.__genFp();
    }
    ["__format"](II11i1I1, l11l1i1l) {
      if (!II11i1I1) II11i1I1 = "yyyy-MM-dd";
      var i11li111;
      !l11l1i1l ? i11li111 = Date.now() : i11li111 = new Date(l11l1i1l);
      var lIlil1i1 = new Date(i11li111),
        l11lI1ii = II11i1I1,
        Iil1I1il = {
          "M+": lIlil1i1.getMonth() + 1,
          "d+": lIlil1i1.getDate(),
          "D+": lIlil1i1.getDate(),
          "h+": lIlil1i1.getHours(),
          "H+": lIlil1i1.getHours(),
          "m+": lIlil1i1.getMinutes(),
          "s+": lIlil1i1.getSeconds(),
          "w+": lIlil1i1.getDay(),
          "q+": Math.floor((lIlil1i1.getMonth() + 3) / 3),
          "S+": lIlil1i1.getMilliseconds()
        };
      /(y+)/i.test(l11lI1ii) && (l11lI1ii = l11lI1ii.replace(RegExp.$1, "".concat(lIlil1i1.getFullYear()).substr(4 - RegExp.$1.length)));
      Object.keys(Iil1I1il).forEach(I1I1iiI1 => {
        if (new RegExp("(".concat(I1I1iiI1, ")")).test(l11lI1ii)) {
          var lIiiIi1l = "S+" === I1I1iiI1 ? "000" : "00";
          l11lI1ii = l11lI1ii.replace(RegExp.$1, 1 == RegExp.$1.length ? Iil1I1il[I1I1iiI1] : "".concat(lIiiIi1l).concat(Iil1I1il[I1I1iiI1]).substr("".concat(Iil1I1il[I1I1iiI1]).length));
        }
      });
      return l11lI1ii;
    }
    ["__genUA"]() {
      return i11Ii1Il = "jdapp;iPhone;12.3.1;;;M/5.0;appBuild/168960;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
        "ciphertype": 5,
        "cipher": {
          "ud": "",
          "sv": "CJGkCm==",
          "iad": ""
        },
        "ts": Math.floor(new Date().getTime() / 1000),
        "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
        "version": "1.0.3",
        "appname": "com.360buy.jdmobile",
        "ridx": -1
      })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;", i11Ii1Il;
    }
    ["__genFp"]() {
      function IlIiIilI(lllllI1l, llillIi) {
        var ii1I1i11 = [],
          Il1iIi1 = lllllI1l.length,
          ii1I1I1i = lllllI1l.split(""),
          I1Iil1II = "";
        for (; I1Iil1II = ii1I1I1i.shift();) {
          if (Math.random() * Il1iIi1 < llillIi) {
            ii1I1i11.push(I1Iil1II);
            if (--llillIi == 0) break;
          }
          Il1iIi1--;
        }
        for (var li111lil = "", i11iilI = 0; i11iilI < ii1I1i11.length; i11iilI++) {
          var IlIIi11 = Math.random() * (ii1I1i11.length - i11iilI) | 0;
          li111lil += ii1I1i11[IlIIi11];
          ii1I1i11[IlIIi11] = ii1I1i11[ii1I1i11.length - i11iilI - 1];
        }
        return li111lil;
      }
      function l11l1Il1(IiIl111, lI11IiIl) {
        for (let lIli1lii of lI11IiIl.slice()) IiIl111 = IiIl111.replace(lIli1lii, "");
        return IiIl111;
      }
      var lili1ii = "1uct6d0jhq",
        Ii1l1Ill = IlIiIilI(lili1ii, 5),
        lIlllliI = Math.random() * 10 | 0,
        Iil1iilI = l11l1Il1(lili1ii, Ii1l1Ill),
        liIi1IIi = {};
      liIi1IIi.size = lIlllliI;
      liIi1IIi.customDict = Iil1iilI;
      var lllllll1 = this.getRandomIDPro(liIi1IIi) + Ii1l1Ill + this.getRandomIDPro({
          "size": 11 - lIlllliI - 1,
          "customDict": Iil1iilI
        }) + lIlllliI,
        IiIi1I1 = lllllll1.split(""),
        l1llli1I = IiIi1I1,
        iiIIIiIl;
      l1llli1I = IiIi1I1.slice(0, 15);
      iiIIIiIl = IiIi1I1.slice(15);
      var IlII1iil = [];
      for (; l1llli1I.length > 0;) {
        IlII1iil.push((35 - parseInt(l1llli1I.pop(), 36)).toString(36));
      }
      IlII1iil = IlII1iil.concat(iiIIIiIl);
      var il1lIiIi = IlII1iil.join("");
      return il1lIiIi;
    }
    ["getRandomIDPro"]() {
      var Ili1II1I,
        iIi11lIl,
        il11I1Il = void 0 === (IIl1IiiI = (iIi11lIl = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : IIl1IiiI,
        IIl1IiiI = void 0 === (IIl1IiiI = iIi11lIl.dictType) ? "number" : IIl1IiiI,
        ll11i1l1 = "";
      if ((iIi11lIl = iIi11lIl.customDict) && "string" == typeof iIi11lIl) Ili1II1I = iIi11lIl;else switch (IIl1IiiI) {
        case "alphabet":
          Ili1II1I = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "max":
          Ili1II1I = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          break;
        case "number":
        default:
          Ili1II1I = "0123456789";
      }
      for (; il11I1Il--;) ll11i1l1 += Ili1II1I[Math.random() * Ili1II1I.length | 0];
      return ll11i1l1;
    }
    ["Encrypt"](lliIll1I, Iiil1lII) {
      let ili1II11 = $.CryptoJS.AES.encrypt(lliIll1I, $.CryptoJS.enc.Utf8.parse(Iiil1lII.key), {
        "iv": $.CryptoJS.enc.Utf8.parse(Iiil1lII.iv),
        "mode": $.CryptoJS.mode.CBC,
        "padding": $.CryptoJS.pad.Pkcs7
      });
      return il1IiI11.exports.enc.Base64.encode(ili1II11.ciphertext);
      return ili1II11.ciphertext.toString();
    }
    async ["__genAlgo"]() {
      let l11Il1i1 = {
          "wc": 0,
          "wd": 0,
          "l": "zh-cn",
          "ls": "zh-cn",
          "ml": 0,
          "pl": 0,
          "av": /\/(.+)/g.exec(this.ua) && /\/(.+)/g.exec(this.ua)[1] || this.ua,
          "ua": this.ua,
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "lite_0.1.5",
            "bu2": 0,
            "bu3": 73,
            "bu4": 0,
            "bu5": 0
          },
          "pp1": "",
          "w": 390,
          "h": 844,
          "ow": 390,
          "oh": 844,
          "url": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html?unionActId=31177&d=&s=&cu=true&utm_source=kong&utm_medium=jingfen",
          "og": "https://pro.m.jd.com",
          "pf": "",
          "pr": 3,
          "re": "https://u.jd.com/",
          "random": this.getRandomIDPro({
            "size": 12,
            "dictType": "max",
            "customDict": null
          }),
          "referer": "https://u.jd.com/",
          "v": "h5_file_v4.7.2",
          "ccn": 10,
          "ai": this.appId,
          "fp": this.fp
        },
        llIi1IIl = JSON.stringify(l11Il1i1, null, 2),
        Iii1I11I = this.Encrypt(llIi1IIl, {
          "key": "(olf1ll#s-w@!0mw",
          "iv": "0102030405060708"
        });
      var IIi1IIil = {};
      if (this.v == "4.7") IIi1IIil = {
        "appId": this.appId.toString(),
        "expandParams": Iii1I11I || "",
        "fp": this.fp,
        "fv": "h5_file_v4.7.2",
        "platform": "web",
        "timestamp": Date.now(),
        "version": this.v
      };else this.v == "4.1" ? IIi1IIil = {
        "appId": this.appId.toString(),
        "expandParams": Iii1I11I || "",
        "fp": this.fp,
        "fv": "v1.6.1",
        "platform": "web",
        "timestamp": Date.now(),
        "version": this.v
      } : IIi1IIil = {
        "version": this.v,
        "fp": this.fp,
        "appId": this.appId.toString(),
        "timestamp": Date.now(),
        "platform": "web",
        "expandParams": Iii1I11I || ""
      };
      return new Promise(ilIIIl1i => {
        let l1Iliii1 = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "body": JSON.stringify(IIi1IIil),
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "zh-cn",
            "Origin": "https://pro.m.jd.com",
            "Referer": "https://pro.m.jd.com/",
            "user-agent": this.ua
          },
          "timeout": 30000
        };
        $.post(l1Iliii1, async (i1IIlIll, Il1ililI, iliIiIiI) => {
          try {
            if (i1IIlIll) console.log(i1IIlIll);else {
              let l1lI1ilI = $.toObj(iliIiIiI, iliIiIiI);
              l1lI1ilI && typeof l1lI1ilI === "object" && l1lI1ilI.data && l1lI1ilI.data.result && l1lI1ilI.data.result.tk && (this.tk = l1lI1ilI.data.result.tk, this.genKey = new Function("return " + l1lI1ilI.data.result.algo)());
            }
          } catch (iIl1il1) {
            $.logErr(iIl1il1, Il1ililI);
          } finally {
            ilIIIl1i();
          }
        });
      });
    }
    ["__genH5st"](I111lli = {}, li1II1iI = "") {
      let l111i1Il = undefined,
        l1IIl = {
          "ua": this.ua,
          "uid": this.uid
        };
      if (this.tk && this.genKey) {
        this.time = Date.now();
        this.timestamp = this.__format("yyyyMMddhhmmssSSS", this.time);
        let ll11I11 = this.genKey(this.tk, this.fp.toString(), this.timestamp.toString() + "07", this.appId.toString(), il1IiI11.exports).toString();
        var IlllIlll = {},
          illliI1 = null;
        illliI1 = Object.keys(I111lli).sort().map(function (iI11i1ii) {
          var lilll1iI = {};
          return lilll1iI.key = iI11i1ii, lilll1iI.value = I111lli[iI11i1ii], lilll1iI;
        }).filter(function (l1I1iIll) {
          var IllIilII = l1I1iIll.value,
            llil1Ill = "number" == typeof IllIilII && !isNaN(IllIilII) || "string" == typeof IllIilII || "boolean" == typeof IllIilII || "body" == l1I1iIll.key;
          if (llil1Ill) {
            if ("body" == l1I1iIll.key && typeof l1I1iIll.value == "object") l1I1iIll.value = JSON.stringify(l1I1iIll.value);
            IlllIlll[l1I1iIll.key] = l1I1iIll.value;
          }
          return llil1Ill;
        });
        I111lli = IlllIlll;
        let Illl1i1I = "";
        Illl1i1I = Object.keys(I111lli).map(function (illIIiIi) {
          return illIIiIi + ":" + (illIIiIi == "body" && I111lli[illIIiIi].length !== 64 && I111lli[illIIiIi].slice(0, 1) == "{" ? $.CryptoJS.SHA256(I111lli[illIIiIi]).toString($.CryptoJS.enc.Hex) : I111lli[illIIiIi]);
        }).join("&");
        Illl1i1I = il1IiI11.exports.HmacSHA256(Illl1i1I, ll11I11);
        let iIilllII = {
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "lite_0.1.5",
            "bu2": -1,
            "bu3": 71,
            "bu4": 0,
            "bu5": 0
          },
          "random": this.getRandomIDPro({
            "size": 12,
            "dictType": "max",
            "customDict": null
          }),
          "v": "h5_file_v4.7.2",
          "fp": this.fp
        };
        li1II1iI && (iIilllII.pp.p1 = li1II1iI);
        let lIIilI11 = JSON.stringify(iIilllII, null, 2);
        var ii1ll1il = {
          "key": "X[FMV04Nfvd?Y6M_",
          "iv": "0102030405060708"
        };
        let l1111IIl = this.Encrypt(lIIilI11, ii1ll1il);
        l111i1Il = [this.timestamp, this.fp, this.appId.toString(), this.tk, Illl1i1I, this.v, this.time.toString(), l1111IIl].join(";");
        l1IIl.t = I111lli.t;
      }
      return l1IIl.h5st = l111i1Il, l1IIl;
    }
  }
  return new lii1I1i1(ilIiii1l, i11Ii1Il, llIii1I1);
}
function ll11Ii() {
  class i1lI1Il {
    constructor() {
      this.UVCookie = "";
      this.ltr = 0;
      this.mr = [1, 0];
      this.mbaFlag = true;
      this.document = {
        "cookie": "",
        "cookies": "__jdc=123;",
        "domain": "prodev.m.jd.com",
        "referrer": "https://u.jd.com/",
        "location": {
          "href": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html",
          "hrefs": "https://pro.m.jd.com/mall/active/3Rztcv2tMwdpFqWiqaAUzBAToowC/index.html"
        }
      };
      this.navigator = {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "userAgents": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      };
      this.window = {};
    }
    ["getUVCookie"](Ilil11li = "", i1il1IiI = "", i1li11li = "", iiiI = "") {
      try {
        this.document.location.href = this.document.location.hrefs + "";
        this.document.cookie = this.document.cookies + "";
        if (i1li11li) this.document.location.href = i1li11li;
        if (iiiI) this.document.cookie = iiiI;
        this.UVCookie = "";
        this.navigator.userAgent = this.navigator.userAgents + "";
        this.ltr = 1011 + Math.round(31 * Math.random());
        if (this.mbaFlag) {
          this.mr[1]++;
          this.mr[1] >= 314 && (this.mr[1] = Math.round(31 * Math.random()));
          !i1il1IiI && (i1il1IiI = $.CryptoJS.SHA1("").toString());
          let i1iiIiI = 0;
          while (true) {
            this.mr[0] = parseInt(i1il1IiI.match(/\d/g)[i1iiIiI]);
            i1iiIiI++;
            if (this.mr[0] > 0 || i1iiIiI >= i1il1IiI.match(/\d/g).length) break;
          }
          this.mr[0] += Math.round((new Date().getTime() - new Date("2023-06-02").getTime()) / 86400000);
        }
        if (Ilil11li) this.navigator.userAgent = Ilil11li;
        return this.lr = {
          "ckJda": "__jda",
          "ckJdb": "__jdb",
          "ckJdv": "__jdv",
          "ckJdc": "__jdc",
          "refUrl": "https://u.jd.com/"
        }, this.q(), this.s(i1il1IiI), this.UVCookie;
      } catch (Iii11III) {
        console.log(Iii11III);
      }
    }
    ["s"](I1I1i11l = "") {
      var iI11llii,
        iiIlI1li,
        II111i1l,
        li1I1i1I,
        lil1IiiI = (this.getCookie(this.lr.ckJda) || "").split("."),
        l1iIliil = (this.getCookie(this.lr.ckJdb) || "").split("."),
        Iiilli11 = (this.getCookie(this.lr.ckJdv) || "").split("|"),
        lilil11l = this.getCookie(this.lr.ckJdc) || "",
        iI1liIli = parseInt((new Date().getTime() - this.ltr) / 1000),
        lll1lIl1 = 0,
        li1I1il1 = 1,
        il11iiiI = "direct",
        l11lI11i = "-",
        lili11ii = "none",
        lIIl1l1l = "-";
      if (lil1IiiI.length > 3) for (var lIl1iiI = 2; lIl1iiI < 5 && lIl1iiI < lil1IiiI.length; lIl1iiI++) {
        var IiII1iI1 = lil1IiiI[lIl1iiI];
        IiII1iI1.length > 10 && (lil1IiiI[lIl1iiI] = IiII1iI1.substr(0, 10));
      }
      lil1IiiI.length > 5 ? (II111i1l = lil1IiiI[0], li1I1i1I = lil1IiiI[1], iI11llii = parseInt(lil1IiiI[2], 10), iiIlI1li = parseInt(lil1IiiI[3], 10), iI1liIli = parseInt(lil1IiiI[4], 10), li1I1il1 = parseInt(lil1IiiI[5], 10) || li1I1il1) : (li1I1i1I = this.genUuid(), iI11llii = iI1liIli, iiIlI1li = iI1liIli);
      this.lr.uuid = li1I1i1I;
      l1iIliil.length > 3 && (II111i1l || (II111i1l = l1iIliil[0]), lll1lIl1 = parseInt(l1iIliil[1], 10) || 0);
      Iiilli11.length > 4 && (II111i1l || (II111i1l = Iiilli11[0]), il11iiiI = Iiilli11[1], l11lI11i = Iiilli11[2], lili11ii = Iiilli11[3], lIIl1l1l = Iiilli11[4]);
      lilil11l && "" !== lilil11l && (II111i1l || (II111i1l = lilil11l));
      var Ili1iI1l,
        I1liII1 = [],
        liI11l1l = l1iIliil.length < 4,
        IIlil1i = this.getParameter("utm_source"),
        ilIil1li = false;
      if (IIlil1i) {
        var I1ii1liI = this.getParameter("utm_campaign"),
          iIi11lll = this.getParameter("utm_medium"),
          liiiIIli = this.getParameter("utm_term");
        I1liII1.push(IIlil1i || il11iiiI);
        I1liII1.push(I1ii1liI || l11lI11i);
        I1liII1.push(iIi11lll || lili11ii);
        I1liII1.push(liiiIIli || lIIl1l1l);
        lIIl1l1l = I1liII1[3];
        ilIil1li = !0;
      } else {
        var lIlIIl1,
          iii1ili = this.lr.refUrl && this.lr.refUrl.split("/")[2],
          i1iilI1I = false;
        if (iii1ili && iii1ili.indexOf(this.lr.ckDomain) < 0) {
          for (lIlIIl1 = this.lr.seo, lIl1iiI = 0; lIl1iiI < lIlIIl1.length; lIl1iiI++) {
            var IiiI111 = lIlIIl1[lIl1iiI].split(":");
            if (iii1ili.indexOf(IiiI111[0].toLowerCase()) > -1 && this.lr.refUrl.indexOf((IiiI111[1] + "=").toLowerCase()) > -1) {
              var IiIIIIII = this.getParameter(IiiI111[1], this.lr.refUrl);
              /[^\x00-\xff]/.test(IiIIIIII) && (IiIIIIII = encodeURIComponent(IiIIIIII));
              I1liII1.push(IiiI111[0]);
              I1liII1.push("-");
              I1liII1.push("organic");
              I1liII1.push(IiIIIIII || "not set");
              lIIl1l1l = I1liII1[3];
              i1iilI1I = !0;
              break;
            }
          }
          i1iilI1I || (iii1ili.indexOf("zol.com.cn") > -1 ? (I1liII1.push("zol.com.cn"), I1liII1.push("-"), I1liII1.push("cpc"), I1liII1.push("not set")) : (I1liII1.push(iii1ili), I1liII1.push("-"), I1liII1.push("referral"), I1liII1.push("-")));
        }
      }
      Ili1iI1l = I1liII1.length > 0 && (I1liII1[0] !== il11iiiI || I1liII1[1] !== l11lI11i || I1liII1[2] !== lili11ii) && "referral" !== I1liII1[2];
      liI11l1l || !liI11l1l && Ili1iI1l ? (il11iiiI = I1liII1[0] || il11iiiI, l11lI11i = I1liII1[1] || l11lI11i, lili11ii = I1liII1[2] || lili11ii, lIIl1l1l = I1liII1[3] || lIIl1l1l, lil1IiiI.length > 5 ? (iI11llii = parseInt(lil1IiiI[2], 10), iiIlI1li = parseInt(lil1IiiI[4], 10), iI1liIli = parseInt((new Date().getTime() - this.ltr) / 1000), li1I1il1++, lll1lIl1 = 1) : (li1I1il1 = 1, lll1lIl1 = 1)) : lll1lIl1++;
      var lIIIii1l = this.getPageParamFromSdk();
      if (lIIIii1l && lIIIii1l.vts) {
        var IllI1Iii = 1 * lIIIii1l.vts,
          Ill1llii = 1 * lIIIii1l.seq;
        (IllI1Iii > li1I1il1 || IllI1Iii === li1I1il1 && Ill1llii >= lll1lIl1) && (li1I1il1 = IllI1Iii, lll1lIl1 = Ill1llii + 1);
      }
      if (II111i1l || (II111i1l = this.genHash(this.lr.ckDomain)), this.setCookie(this.lr.ckJda, [II111i1l, li1I1i1I, iI11llii, iiIlI1li, iI1liIli, li1I1il1 || 1].join("."), this.lr.ckDomain, this.lr.ckJdaExp), this.setCookie(this.lr.ckJdb, [II111i1l, lll1lIl1, li1I1i1I + "|" + li1I1il1, iI1liIli].join("."), this.lr.ckDomain, this.lr.ckJdbExp), ilIil1li || Ili1iI1l || Iiilli11.length < 5) {
        var Iii1iiI1 = [II111i1l, il11iiiI || "direct", l11lI11i || "-", lili11ii || "none", lIIl1l1l || "-", new Date().getTime() - this.ltr].join("|");
        this.setJdv(Iii1iiI1 = encodeURIComponent(Iii1iiI1), II111i1l);
      }
      this.setCookie(this.lr.ckJdc, II111i1l, this.lr.ckDomain);
      if (this.mbaFlag) {
        this.setCookie("shshshfpa", this.shshshfpa(), this.lr.ckDomain);
        this.setCookie("mba_sid", this.mr.join("."), this.lr.ckDomain);
        this.setCookie("mba_muid", [li1I1i1I, this.mr[0], new Date().getTime()].join("."), this.lr.ckDomain);
        this.setCookie("pre_seq", Math.round(5 * Math.random()) * 2 + 1, this.lr.ckDomain);
        var lll1lIl1 = 0;
        var li1li1lI = "";
        if (I1I1i11l) {
          while (true) {
            li1li1lI += I1I1i11l.match(/\d/g)[lll1lIl1];
            lll1lIl1++;
            if (li1li1lI.split("").length >= 2 || lll1lIl1 >= I1I1i11l.match(/\d/g).length) break;
          }
          this.setCookie("pre_session", I1I1i11l + "|" + (parseInt(this.mr[0]) + parseInt(li1li1lI)), this.lr.ckDomain);
        }
      }
    }
    ["shshshfpa"]() {
      var lillilIl = "";
      for (var liIiIIi1 = 1; liIiIIi1 <= 32; liIiIIi1++) {
        var IlilIIl = Math.floor(Math.random() * 16).toString(16);
        lillilIl += IlilIIl;
        if (liIiIIi1 == 8 || liIiIIi1 == 12 || liIiIIi1 == 16 || liIiIIi1 == 20) lillilIl += "-";
      }
      var iliIil1i = Date.parse(new Date());
      return iliIil1i = iliIil1i / 1000, lillilIl += "-" + iliIil1i, lillilIl;
    }
    ["q"]() {
      this.lr.rpDomain = this.lr.rpDomain || "uranus.jd.com";
      this.lr.logUrl = "//" + this.lr.rpDomain + "/log/m";
      this.lr.logType = {
        "pv": "1",
        "pf": "2",
        "cl": "3",
        "od": "4",
        "pd": "5",
        "hm": "6",
        "magic": "000001"
      };
      this.lr.useTmpCookie ? (this.lr.ckJda = "__tra", this.lr.ckJdb = "__trb", this.lr.ckJdc = "__trc", this.lr.ckJdu = "__tru") : (this.lr.ckJda = "__jda", this.lr.ckJdb = "__jdb", this.lr.ckJdc = "__jdc", this.lr.ckJdu = "__jdu");
      this.lr.ckJdv = "__jdv";
      this.lr.ckWxAppCk = "__jdwxapp";
      this.lr.ckRefCls = "__jd_ref_cls";
      this.lr.ckJdaExp = 15552000000;
      this.lr.ckJdbExp = 1800000;
      this.lr.ckJduExp = 15552000000;
      this.lr.ckJdvExp = 1296000000;
      this.lr.ckJdvEmbeddedExp = 86400000;
      this.lr.ckWxAppCkExp = 15552000000;
      this.lr.mtSubsiteExp = 31536000000;
      this.lr.ckDomain = (this.document.domain.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || this.document.domain.replace(/.*?([^.]+\.[^.]+)$/, "$1");
      this.lr.title = this.document.title;
      this.lr.refUrl = this.document.referrer;
      this.lr.seo = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"];
    }
    ["setCookie"](iIIIlI1I, IIllI1iI, ll1Iili, I11iIIi1) {
      if (iIIIlI1I) {
        var III11iI = "";
        if (I11iIIi1) {
          var iill1lil = new Date();
          iill1lil.setTime(iill1lil.getTime() - this.ltr + I11iIIi1);
          III11iI = ";expires=" + iill1lil.toGMTString();
        }
        this.UVCookie += iIIIlI1I + "=" + IIllI1iI + "; ";
      }
    }
    ["setJdv"](llil1iIl, I1iII1I, l1lilii) {
      var ii1i1Ii1 = "";
      ii1i1Ii1 = this.isPrey(10) && (!llil1iIl || llil1iIl.length > 400) ? I1iII1I + "|direct|-|none|-|" + (new Date().getTime() - this.ltr) : llil1iIl;
      var iIii1Iil = l1lilii || this.isEmbedded() ? this.lr.ckJdvEmbeddedExp : this.lr.ckJdvExp;
      this.setCookie(this.lr.ckJdv || "__jdv", ii1i1Ii1, this.lr.ckDomain, iIii1Iil);
    }
    ["getCookie"](iilliIIl, lilIl1ll) {
      var ill1lI1 = this.document.cookie.match(new RegExp("(^| )" + iilliIIl + "=([^;]*)(;|$)"));
      return null !== ill1lI1 ? lilIl1ll ? ill1lI1[2] : this.urlDecode(ill1lI1[2]) : "";
    }
    ["genUuid"]() {
      return new Date().getTime() - this.ltr + "" + parseInt(2147483647 * Math.random());
    }
    ["getParameter"](Iiil1II1, liIlil1l) {
      var IIII1liI = liIlil1l || this.document.location.href,
        ii1IIl1i = new RegExp("(?:^|&|[?]|[/])" + Iiil1II1 + "=([^&]*)").exec(IIII1liI);
      return ii1IIl1i ? this.urlDecode(ii1IIl1i[1]) : null;
    }
    ["urlDecode"](Ii1Ii1Ii) {
      try {
        return decodeURIComponent(Ii1Ii1Ii);
      } catch (l1ii1lll) {
        return Ii1Ii1Ii;
      }
    }
    ["genHash"](l1iii11) {
      var iilliIi1,
        liil1Ii1 = 1,
        lI1II1ii = 0;
      if (l1iii11) for (liil1Ii1 = 0, iilliIi1 = l1iii11.length - 1; iilliIi1 >= 0; iilliIi1--) {
        liil1Ii1 = 0 !== (lI1II1ii = 266338304 & (liil1Ii1 = (liil1Ii1 << 6 & 268435455) + (lI1II1ii = l1iii11.charCodeAt(iilliIi1)) + (lI1II1ii << 14))) ? liil1Ii1 ^ lI1II1ii >> 21 : liil1Ii1;
      }
      return liil1Ii1;
    }
    ["isPrey"](llliIIi) {
      if (llliIIi >= 100) return !0;
      var I1llliIl = this.lr.uuid,
        IliI1il1 = I1llliIl.substr(I1llliIl.length - 2);
      return !!IliI1il1 && 1 * IliI1il1 < llliIIi;
    }
    ["isEmbedded"]() {
      var iIII1IiI = this.navigator.userAgent || "";
      return /^(jdapp|jdltapp|jdpingou);/.test(iIII1IiI) || this.isJdLog();
    }
    ["isJdLog"]() {
      return (this.navigator.userAgent || "").indexOf(";jdlog;") > -1;
    }
    ["getPageParamFromSdk"]() {
      var i11l11Il, I1l1l11I;
      try {
        this.window.JDMAUnifyBridge && this.window.JDMAUnifyBridge.JDMAGetMPageParam ? I1l1l11I = JDMAUnifyBridge.JDMAGetMPageParam() : this.window.JDMAGetMPageParam ? I1l1l11I = JDMAGetMPageParam() : this.window.webkit && this.window.webkit.messageHandlers && this.window.webkit.messageHandlers.JDMASetMPageParam && (I1l1l11I = this.window.prompt("JDMAGetMPageParam", ""));
        I1l1l11I && (i11l11Il = JSON.parse(I1l1l11I));
      } catch (Iii1I1ll) {}
      return i11l11Il;
    }
    ["time"](l1lii, IIiiiIl = null) {
      const Illl1Ili = IIiiiIl ? new Date(IIiiiIl) : new Date();
      let i1iiiIli = {
        "M+": Illl1Ili.getMonth() + 1,
        "d+": Illl1Ili.getDate(),
        "H+": Illl1Ili.getHours(),
        "m+": Illl1Ili.getMinutes(),
        "s+": Illl1Ili.getSeconds(),
        "q+": Math.floor((Illl1Ili.getMonth() + 3) / 3),
        "S": Illl1Ili.getMilliseconds()
      };
      /(y+)/.test(l1lii) && (l1lii = l1lii.replace(RegExp.$1, (Illl1Ili.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let IIllI1ll in i1iiiIli) new RegExp("(" + IIllI1ll + ")").test(l1lii) && (l1lii = l1lii.replace(RegExp.$1, 1 == RegExp.$1.length ? i1iiiIli[IIllI1ll] : ("00" + i1iiiIli[IIllI1ll]).substr(("" + i1iiiIli[IIllI1ll]).length)));
      return l1lii;
    }
  }
  IIllIi = new i1lI1Il();
}
function ii1i1lii(iI1iIlIl, l1iIllil) {
  var lI1l1ili = new RegExp("(^|[&?])" + l1iIllil + "=([^&]*)(&|$)"),
    i1ilI1I = iI1iIlIl.match(lI1l1ili);
  if (i1ilI1I != null) return unescape(i1ilI1I[2]);
  return null;
}
function il1iIi1l(lI1IIilI) {
  lI1IIilI = lI1IIilI || 32;
  let iIliiil1 = "abcdef0123456789",
    lllI1I11 = iIliiil1.length,
    li1I1lIi = "";
  for (i = 0; i < lI1IIilI; i++) li1I1lIi += iIliiil1.charAt(Math.floor(Math.random() * lllI1I11));
  return li1I1lIi;
  
}




function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }


