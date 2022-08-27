const Categories = [
  "花间集",
  "南唐二主词",
  "唐诗三百首",
  "诗经",
  "千家诗",
  "声律启蒙",
  "三字经",
  "百家姓",
  "唐诗三百首·蒙学",
  "宋词三百首",
  "古诗十九首",
  "元曲",
  "曹操诗集",
  "纳兰性德诗集"
]

const CategorySets: Record<string, {
  name: string;
  uri: string;
  img?: string;
  identifier?: string;
}> = {
  "花间集": {
    name: "花间集",
    uri: "wudai/huajianji/huajianji-1-juan.json",
    img: '1513781050488-6dd358209a1b',
    identifier: "title"
  },
  "南唐二主词": {
    name: "南唐二主词",
    uri: "wudai/nantang/poetrys.json",
    img: '1510423579098-f47bf52b6764',
    identifier: "title"
  },
  "唐诗三百首": {
    name: "唐诗三百首",
    uri: "quan_tang_shi/json/001.json",
    img: '1530569112985-108dc2578ec2',
    identifier: "title"
  },
  "宋词三百首": {
    name: "宋词三百首",
    uri: "ci/ci.song.0.json",
    img: '1518663392635-94580fd4ba4e',
    identifier: "rhythmic"
  },
  "古诗十九首": {
    name: "古诗十九首",
    uri: "lunyu/lunyu.json",
    img: '1540296777082-fc7bf935f673',
    identifier: "chapter"
  },
  "诗经": {
    name: "诗经",
    uri: "shijing/shijing.json",
    img: '1518471683746-63f3aff4ed13',
    identifier: "title"
  },
  "千家诗": {
    name: "千家诗",
    uri: "mengxue/qianjiashi.json",
    img: '1531878003199-99f8c1c586c5',
    identifier: "title"
  },
  "声律启蒙": {
    name: "声律启蒙",
    uri: "mengxue/shenglvqimeng.json",
    img: '1586224091090-ef99adbe9f86',
    identifier: "title"
  },
  "三字经": {
    name: "三字经",
    uri: "mengxue/sanzijing-new.json",
    img: '1537192511193-2d251b9959db',
    identifier: "title"
  },
  "百家姓": {
    name: "百家姓",
    uri: "mengxue/baijiaxing.json",
    img: '1589895009255-67c7cb06de4e',
    identifier: "title"
  },
  "唐诗三百首·蒙学": {
    name: "唐诗三百首·蒙学",
    uri: "mengxue/tangshisanbaishou.json",
    img: '1589872880653-d34099d48a8d',
    identifier: "title"
  },
  "元曲": {
    name: "元曲",
    uri: "yuanqu/yuanqu.json",
    img: '1566705710064-5864bca1ecb7',
    identifier: "chapter"
  },
  "曹操诗集": {
    name: "曹操诗集",
    uri: "caocaoshiji/caocao.json",
    img: '1547981609-4b6bfe67ca0b',
    identifier: "title"
  },
  "纳兰性德诗集": {
    name: "纳兰性德诗集",
    uri: "nalanxingde/纳兰性德诗集.json",
    img: '1542554250-726628a42330',
    identifier: "title"
  }
}

const ImageSets = [
  '1513781050488-6dd358209a1b',
  '1510423579098-f47bf52b6764',
  '1530569112985-108dc2578ec2',
  '1518663392635-94580fd4ba4e',
  '1589895009255-67c7cb06de4e',
  '1540296777082-fc7bf935f673',
  '1518471683746-63f3aff4ed13',
  '1531878003199-99f8c1c586c5',
  '1586224091090-ef99adbe9f86',
  '1537192511193-2d251b9959db',
  '1589872880653-d34099d48a8d',
  '1566705710064-5864bca1ecb7',
  '1547981609-4b6bfe67ca0b',
  '1542554250-726628a42330',
  '1557228682-25dd18e9053d',
  '1553125677-d83517b3b4af',
]

export { Categories, CategorySets, ImageSets }