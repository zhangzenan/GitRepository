import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemeryDataService implements InMemoryDbService {
    createDb(){
        let blogs=[
            { id:1,title:"号外号外？奥巴马要下台啦",profile:"唐纳德·特朗普，第45任美国总统，1946年6月14日生于美国纽约，政治家、商人、作家、主持人。特朗普1968年从宾夕法尼亚大学"},
            { id:2,title:"什么？奥巴马要下台啦？",profile:"除房地产外，特朗普将投资范围延伸到其他行业，包括开设赌场、高尔夫球场等。他还涉足娱乐界，是美国真人秀《名人学徒》等电视节目的主持人"},
            { id:3,title:"号外号外？川普要上台了",profile:"特朗普在过去20年间分别支持过共和党和民主党各主要总统竞选者。2015年6月，特朗普以共和党竞选者身份正式参加2016年美国总统选举。此前，特朗普没有担任过公共职务"},
            { id:4,title:"啥？我大四川人也要当美国总统了？",profile:"2016年11月9日，美国大选计票结果显示：共和党候选人唐纳德·特朗普已获得了276张选举人票，超过270张选举人票的获胜标准，当选美国第45任总统"},
            { id:5,title:"mdzz,一群麻瓜，统统查杀",profile:"1946年6月14日，特朗普在纽约市出生，排行老二，上有一个姐姐，下有两个弟弟、一个妹妹。由于祖父英年早逝，父亲"},
            { id:6,title:"首推龙文，必须出具",profile:"父母亲友的爱心呵护下，特朗普自幼即满腹自信，活力四射，无法静下来用功读书。13岁那年，父母只好送他去“纽约军事学校”求学，冀望军校的严格训练能帮助他力争上游。在军校就读期间，特朗普"}
        ]
        return {blogs};
    }
}