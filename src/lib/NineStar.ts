import {LunarUtil} from './LunarUtil';
import {NineStarUtil} from './NineStarUtil';

export class NineStar {
    static NAME_BEI_DOU: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];
    static NAME_XUAN_KONG: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];
    static NAME_QI_MEN: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];
    static BA_MEN_QI_MEN: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '', '敏感词', '敏感词', '敏感词', '敏感词'];
    static NAME_TAI_YI: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];
    static TYPE_TAI_YI: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];
    static SONG_TAI_YI: string[] = ['敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。', '敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词，敏感词。'];
    static LUCK_QI_MEN: string[] = ['敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词', '敏感词'];

    private readonly _index: number;

    static fromIndex(index: number): NineStar {
        return new NineStar(index);
    }

    constructor(index: number) {
        this._index = index;
    }

    getNumber(): string {
        return NineStarUtil.NUMBER[this._index];
    }

    getColor(): string {
        return NineStarUtil.COLOR[this._index];
    }

    getWuXing(): string {
        return NineStarUtil.WU_XING[this._index];
    }

    getPosition(): string {
        return NineStarUtil.POSITION[this._index];
    }

    getPositionDesc(): string {
        const v = LunarUtil.POSITION_DESC[this.getPosition()];
        return v ? v : '';
    }

    getNameInXuanKong(): string {
        return NineStar.NAME_XUAN_KONG[this._index];
    }

    getNameInBeiDou(): string {
        return NineStar.NAME_BEI_DOU[this._index];
    }

    getNameInQiMen(): string {
        return NineStar.NAME_QI_MEN[this._index];
    }

    getNameInTaiYi(): string {
        return NineStar.NAME_TAI_YI[this._index];
    }

    getLuckInQiMen(): string {
        return NineStar.LUCK_QI_MEN[this._index];
    }

    getLuckInXuanKong(): string {
        return NineStarUtil.LUCK_XUAN_KONG[this._index];
    }

    getYinYangInQiMen(): string {
        return NineStarUtil.YIN_YANG_QI_MEN[this._index];
    }

    getTypeInTaiYi(): string {
        return NineStar.TYPE_TAI_YI[this._index];
    }

    getBaMenInQiMen(): string {
        return NineStar.BA_MEN_QI_MEN[this._index];
    }

    getSongInTaiYi(): string {
        return NineStar.SONG_TAI_YI[this._index];
    }

    getIndex(): number {
        return this._index;
    }

    toString(): string {
        return this.getNumber() + this.getColor() + this.getWuXing() + this.getNameInBeiDou();
    }

    toFullString(): string {
        let s = this.getNumber();
        s += this.getColor();
        s += this.getWuXing();
        s += ' ';
        s += this.getPosition();
        s += '(';
        s += this.getPositionDesc();
        s += ') ';
        s += this.getNameInBeiDou();
        s += ' 敏感词[';
        s += this.getNameInXuanKong();
        s += ' ';
        s += this.getLuckInXuanKong();
        s += '] 敏感词[';
        s += this.getNameInQiMen();
        s += ' ';
        s += this.getLuckInQiMen();
        if (this.getBaMenInQiMen().length > 0) {
            s += ' ';
            s += this.getBaMenInQiMen();
            s += '敏感词';
        }
        s += ' ';
        s += this.getYinYangInQiMen();
        s += '] 敏感词[';
        s += this.getNameInTaiYi();
        s += ' ';
        s += this.getTypeInTaiYi();
        s += ']';
        return s;
    }
}
