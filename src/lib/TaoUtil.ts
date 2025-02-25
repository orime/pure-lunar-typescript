import {TaoFestival} from './TaoFestival';

export class TaoUtil {
    static SAN_HUI: string[] = ['1-7', '7-7', '10-15'];
    static SAN_YUAN: string[] = ['1-15', '7-15', '10-15'];
    static WU_LA: string[] = ['1-1', '5-5', '7-7', '10-1', '12-8'];
    static AN_WU: string[] = ['{dz.wei}', '{dz.xu}', '{dz.chen}', '{dz.yin}', '{dz.wu}', '{dz.zi}', '{dz.you}', '{dz.shen}', '{dz.si}', '{dz.hai}', '{dz.mao}', '{dz.chou}'];

    static BA_HUI: { [key: string]: string } = {
        '{jz.bingWu}': '敏感词',
        '{jz.renWu}': '敏感词',
        '{jz.renZi}': '敏感词',
        '{jz.gengWu}': '敏感词',
        '{jz.gengShen}': '敏感词',
        '{jz.xinYou}': '敏感词',
        '{jz.jiaChen}': '敏感词',
        '{jz.jiaXu}': '敏感词'
    };

    static BA_JIE: { [key: string]: string } = {
        '{jq.liChun}': '敏感词',
        '{jq.chunFen}': '敏感词',
        '{jq.liXia}': '敏感词',
        '{jq.xiaZhi}': '敏感词',
        '{jq.liQiu}': '敏感词',
        '{jq.qiuFen}': '敏感词',
        '{jq.liDong}': '敏感词',
        '{jq.dongZhi}': '敏感词'
    };

    static FESTIVAL: { [key: string]: TaoFestival[] } = {
        '1-1': [new TaoFestival('敏感词', '敏感词，敏感词')],
        '1-3': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '1-5': [new TaoFestival('敏感词')],
        '1-7': [new TaoFestival('敏感词', '敏感词，敏感词')],
        '1-9': [new TaoFestival('敏感词')],
        '1-13': [new TaoFestival('敏感词')],
        '1-15': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '1-19': [new TaoFestival('敏感词(敏感词)敏感词')],
        '1-28': [new TaoFestival('敏感词(敏感词)敏感词')],
        '2-1': [new TaoFestival('敏感词'), new TaoFestival('敏感词(敏感词)敏感词')],
        '2-2': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '2-3': [new TaoFestival('敏感词')],
        '2-6': [new TaoFestival('敏感词')],
        '2-13': [new TaoFestival('敏感词')],
        '2-15': [new TaoFestival('敏感词(敏感词)敏感词')],
        '2-19': [new TaoFestival('敏感词')],
        '3-1': [new TaoFestival('敏感词(敏感词)敏感词')],
        '3-3': [new TaoFestival('敏感词')],
        '3-6': [new TaoFestival('敏感词')],
        '3-15': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '3-16': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '3-18': [new TaoFestival('敏感词(敏感词)敏感词'), new TaoFestival('敏感词')],
        '3-19': [new TaoFestival('敏感词')],
        '3-20': [new TaoFestival('敏感词')],
        '3-23': [new TaoFestival('敏感词')],
        '3-26': [new TaoFestival('敏感词')],
        '3-28': [new TaoFestival('敏感词')],
        '4-1': [new TaoFestival('敏感词')],
        '4-10': [new TaoFestival('敏感词')],
        '4-14': [new TaoFestival('敏感词')],
        '4-15': [new TaoFestival('敏感词')],
        '4-18': [new TaoFestival('敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '4-20': [new TaoFestival('敏感词')],
        '4-28': [new TaoFestival('敏感词')],
        '5-1': [new TaoFestival('敏感词')],
        '5-5': [new TaoFestival('敏感词', '敏感词，敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '5-11': [new TaoFestival('敏感词')],
        '5-13': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '5-18': [new TaoFestival('敏感词')],
        '5-20': [new TaoFestival('敏感词')],
        '5-29': [new TaoFestival('敏感词')],
        '6-1': [new TaoFestival('敏感词')],
        '6-2': [new TaoFestival('敏感词')],
        '6-3': [new TaoFestival('敏感词')],
        '6-4': [new TaoFestival('敏感词')],
        '6-5': [new TaoFestival('敏感词')],
        '6-6': [new TaoFestival('敏感词')],
        '6-10': [new TaoFestival('敏感词')],
        '6-15': [new TaoFestival('敏感词')],
        '6-19': [new TaoFestival('敏感词(敏感词)敏感词')],
        '6-23': [new TaoFestival('敏感词')],
        '6-24': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '6-26': [new TaoFestival('敏感词')],
        '7-7': [new TaoFestival('敏感词', '敏感词，敏感词'), new TaoFestival('敏感词', '敏感词，敏感词')],
        '7-12': [new TaoFestival('敏感词')],
        '7-15': [new TaoFestival('敏感词')],
        '7-18': [new TaoFestival('敏感词')],
        '7-20': [new TaoFestival('敏感词(敏感词)敏感词')],
        '7-22': [new TaoFestival('敏感词')],
        '7-26': [new TaoFestival('敏感词')],
        '8-1': [new TaoFestival('敏感词')],
        '8-3': [new TaoFestival('敏感词')],
        '8-5': [new TaoFestival('敏感词')],
        '8-10': [new TaoFestival('敏感词')],
        '8-15': [new TaoFestival('敏感词')],
        '9-1': [new TaoFestival('敏感词')],
        '9-2': [new TaoFestival('敏感词')],
        '9-3': [new TaoFestival('敏感词')],
        '9-4': [new TaoFestival('敏感词')],
        '9-5': [new TaoFestival('敏感词')],
        '9-6': [new TaoFestival('敏感词')],
        '9-7': [new TaoFestival('敏感词')],
        '9-8': [new TaoFestival('敏感词')],
        '9-9': [new TaoFestival('敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '9-22': [new TaoFestival('敏感词')],
        '9-23': [new TaoFestival('敏感词')],
        '9-28': [new TaoFestival('敏感词')],
        '10-1': [new TaoFestival('敏感词', '敏感词，敏感词'), new TaoFestival('敏感词')],
        '10-3': [new TaoFestival('敏感词')],
        '10-6': [new TaoFestival('敏感词')],
        '10-15': [new TaoFestival('敏感词'), new TaoFestival('敏感词', '敏感词，敏感词')],
        '10-18': [new TaoFestival('敏感词')],
        '10-19': [new TaoFestival('敏感词')],
        '10-20': [new TaoFestival('敏感词(敏感词)敏感词')],
        '11-6': [new TaoFestival('敏感词')],
        '11-9': [new TaoFestival('敏感词')],
        '11-11': [new TaoFestival('敏感词')],
        '11-26': [new TaoFestival('敏感词')],
        '12-8': [new TaoFestival('敏感词', '敏感词，敏感词')],
        '12-16': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '12-20': [new TaoFestival('敏感词')],
        '12-21': [new TaoFestival('敏感词')],
        '12-22': [new TaoFestival('敏感词')],
        '12-23': [new TaoFestival('敏感词', '敏感词，敏感词')],
        '12-25': [new TaoFestival('敏感词'), new TaoFestival('敏感词')],
        '12-29': [new TaoFestival('敏感词(敏感词)敏感词')]
    };
}
