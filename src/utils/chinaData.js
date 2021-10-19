function randomData() {
  return Math.round(Math.random() * 100);
}
const geoCoordMap = {
  '台湾': [121.5135, 25.0308],
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "河北": [114.4995, 38.1006],
  "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "甘肃": [103.5901, 36.3043],
  "宁夏": [106.3586, 38.1775],
  "青海": [101.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [91.11, 29.97],
  "四川": [103.9526, 30.7617],
  "重庆": [108.384366, 30.439702],
  "山东": [117.1582, 36.8701],
  "河南": [113.4668, 34.6234],
  "江苏": [118.8062, 31.9208],
  "安徽": [117.29, 32.0581],
  "湖北": [114.3896, 30.6628],
  "浙江": [119.5313, 29.8773],
  "福建": [119.4543, 25.9222],
  "江西": [116.0046, 28.6633],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],

};
const mapData = [{
    name: "北京",
    value: randomData()
  },
  {
    name: "天津",
    value: randomData()
  },
  {
    name: "河北",
    value: randomData()
  },
  {
    name: "山西",
    value: randomData()
  },
  {
    name: "内蒙古",
    value: randomData()
  },
  {
    name: "辽宁",
    value: randomData()
  },
  {
    name: "吉林",
    value: randomData()
  },
  {
    name: "黑龙江",
    value: randomData()
  },
  {
    name: "上海",
    value: randomData()
  },
  {
    name: "江苏",
    value: randomData()
  },
  {
    name: "浙江",
    value: randomData()
  },
  {
    name: "安徽",
    value: randomData()
  },
  {
    name: "福建",
    value: randomData()
  },
  {
    name: "江西",
    value: randomData()
  },
  {
    name: "山东",
    value: randomData()
  },
  {
    name: "河南",
    value: randomData()
  },
  {
    name: "湖北",
    value: randomData()
  },
  {
    name: "湖南",
    value: randomData()
  },
  {
    name: "重庆",
    value: randomData()
  },
  {
    name: "四川",
    value: randomData()
  },
  {
    name: "贵州",
    value: randomData()
  },
  {
    name: "云南",
    value: randomData()
  },
  {
    name: "西藏",
    value: randomData()
  },
  {
    name: "陕西",
    value: randomData()
  },
  {
    name: "甘肃",
    value: randomData()
  },
  {
    name: "青海",
    value: randomData()
  },
  {
    name: "宁夏",
    value: randomData()
  },
  {
    name: "新疆",
    value: randomData()
  },
  {
    name: "广东",
    value: randomData()
  },
  {
    name: "广西",
    value: randomData()
  },
  {
    name: "海南",
    value: randomData()
  },
]

const visualMapChinaData = [{
  name: '北京',
  value: randomData()
}, {
  name: '天津',
  value: randomData()
}, {
  name: '上海',
  value: randomData()
}, {
  name: '重庆',
  value: randomData()
}, {
  name: '河北',
  value: randomData()
}, {
  name: '河南',
  value: randomData()
}, {
  name: '云南',
  value: randomData()
}, {
  name: '辽宁',
  value: randomData()
}, {
  name: '黑龙江',
  value: randomData()
}, {
  name: '湖南',
  value: randomData()
}, {
  name: '安徽',
  value: randomData()
}, {
  name: '山东',
  value: randomData()
}, {
  name: '新疆',
  value: randomData()
}, {
  name: '江苏',
  value: randomData()
}, {
  name: '浙江',
  value: randomData()
}, {
  name: '江西',
  value: randomData()
}, {
  name: '湖北',
  value: randomData()
}, {
  name: '广西',
  value: randomData()
}, {
  name: '甘肃',
  value: randomData()
}, {
  name: '山西',
  value: randomData()
}, {
  name: '内蒙古',
  value: randomData()
}, {
  name: '陕西',
  value: randomData()
}, {
  name: '吉林',
  value: randomData()
}, {
  name: '福建',
  value: randomData()
}, {
  name: '贵州',
  value: randomData()
}, {
  name: '广东',
  value: randomData()
}, {
  name: '青海',
  value: randomData()
}, {
  name: '西藏',
  value: randomData()
}, {
  name: '四川',
  value: randomData()
}, {
  name: '宁夏',
  value: randomData()
}, {
  name: '海南',
  value: randomData()
}, {
  name: '台湾',
  value: randomData()
}, {
  name: '香港',
  value: randomData()
}, {
  name: '澳门',
  value: randomData()
}]
export {
  visualMapChinaData,
  geoCoordMap,
  mapData
}