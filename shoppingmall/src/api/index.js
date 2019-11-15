import axios from "axios"
//base path

axios.defaults.baseURL= " https://easy-mock.com/mock/5dc9de2913bff958057d85d8/shoppingmall";
axios.interceptors.response.use((data=>{
  return data.data
}));
export let getSlidesData=()=>{
  return axios.get("slides");
};

/*
{
  imgage:'https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/vinyl.jpg',
  id:'01'
  name:Snail Mail
  https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/cards_01.jpg
  Campfire Card
  https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/stencils.jpg
  Etched Succulent Box
}*/
/*{slides:{[
  {image:'https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/vinyl.jpg',goodsid:'01',name:'Snail Mail'},
  {image:'https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/cards_01.jpg',goodsid:'02',name:' Campfire Card'},
  {image:'https://d2e2oszluhwxlw.cloudfront.net/home/v3/public/possibilities/stencils.jpg',goodsid:'03',name:'Etched Succulent Box'}
]}}*/
/*
* category:[
          {
            "mallCategoryId": "1",
            "mallCategoryName": "营养快餐",
            "bxMallSubDto": [{
              "mallSubId": "2c9f6c946016ea9b016016f79c8e0000",
              "mallCategoryId": "1",
              "mallSubName": "热带水果",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016db9b290001",
              "mallCategoryId": "1",
              "mallSubName": "苹果/梨",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dbff2f0002",
              "mallCategoryId": "1",
              "mallSubName": "柑橘橙柚",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dc55bf0003",
              "mallCategoryId": "1",
              "mallSubName": "蓝莓草莓",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dcd7c50004",
              "mallCategoryId": "1",
              "mallSubName": "葡萄提子",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de3b100008",
              "mallCategoryId": "1",
              "mallSubName": "净菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dd052e0005",
              "mallCategoryId": "1",
              "mallSubName": "瓜类",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dd339c0006",
              "mallCategoryId": "1",
              "mallSubName": "鲜果切",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de0d400007",
              "mallCategoryId": "1",
              "mallSubName": "叶菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de85870009",
              "mallCategoryId": "1",
              "mallSubName": "根茎类",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dec183000a",
              "mallCategoryId": "1",
              "mallSubName": "菌菇类",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/cy_2x_db5d2fb.png"
          }, {
            "mallCategoryId": "2",
            "mallCategoryName": "营养早餐",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016deffa0000b",
              "mallCategoryId": "2",
              "mallSubName": "猪肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df1f92000c",
              "mallCategoryId": "2",
              "mallSubName": "牛肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df3d1f000d",
              "mallCategoryId": "2",
              "mallSubName": "羊肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df7c0e000e",
              "mallCategoryId": "2",
              "mallSubName": "鸡鸭禽肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e0241d000f",
              "mallCategoryId": "2",
              "mallSubName": "鲜蛋蛋品",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e083f10010",
              "mallCategoryId": "2",
              "mallSubName": "火锅肉片",
              "comments": null
            }, {
              "mallSubId": "2c9f6c9460337d540160337fefd60000",
              "mallCategoryId": "2",
              "mallSubName": "水产",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/zc_2x_2eb8681.png"
          }, {
            "mallCategoryId": "3",
            "mallCategoryName": "营养鲜果",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e135440011",
              "mallCategoryId": "3",
              "mallSubName": "鲜奶",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e171cc0012",
              "mallCategoryId": "3",
              "mallSubName": "酸奶",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e240e60013",
              "mallCategoryId": "3",
              "mallSubName": "乳酸菌",
              "comments": ""
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/sgsx_2x_7cd0567.png"
          }, {
            "mallCategoryId": "4",
            "mallCategoryName": "飘香茶饮",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e2dcc80016",
              "mallCategoryId": "4",
              "mallSubName": "调味料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e38a3a0017",
              "mallCategoryId": "4",
              "mallSubName": "健康杂粮",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3aa370018",
              "mallCategoryId": "4",
              "mallSubName": "干货",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3d09d0019",
              "mallCategoryId": "4",
              "mallSubName": "方便速食",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3f70c001a",
              "mallCategoryId": "4",
              "mallSubName": "罐头酱菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e42c22001b",
              "mallCategoryId": "4",
              "mallSubName": "米面粉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e458ca001c",
              "mallCategoryId": "4",
              "mallSubName": "烹饪油",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/xwc_2x_274d685.png"
          }, {
            "mallCategoryId": "5",
            "mallCategoryName": "零食饮料",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e4ac16001d",
              "mallCategoryId": "5",
              "mallSubName": "坚果炒货",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e4dca2001e",
              "mallCategoryId": "5",
              "mallSubName": "风味小食",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e51380001f",
              "mallCategoryId": "5",
              "mallSubName": "膨化食品",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e549710020",
              "mallCategoryId": "5",
              "mallSubName": "饮用水",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e62bbd0021",
              "mallCategoryId": "5",
              "mallSubName": "碳酸饮料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e656c50022",
              "mallCategoryId": "5",
              "mallSubName": "果蔬汁",
              "comments": null
            }, {
              "mallSubId": "2c9f6c946016f86f01601709335d0000",
              "mallCategoryId": "5",
              "mallSubName": "乳制饮料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e67b790023",
              "mallCategoryId": "5",
              "mallSubName": "啤酒",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e713540024",
              "mallCategoryId": "5",
              "mallSubName": "白/黄/果酒",
              "comments": null
            }, {
              "mallSubId": "2c9195006076dbc50160781e03bf0013",
              "mallCategoryId": "5",
              "mallSubName": "咖啡茶饮",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/csg_2x_bf4d21e.png"
          }]*/
