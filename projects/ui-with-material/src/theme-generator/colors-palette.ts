import { ColorVariations } from './color-variations';

export class ColorsPalette {
    primaryVariations: ColorVariations;
    accentVariations: ColorVariations;
    warnVariations: ColorVariations;

    constructor(public primary: string, public accent: string, public warn: string) {
        this.primaryVariations = new ColorVariations(primary);
        this.accentVariations = new ColorVariations(accent);
        this.warnVariations = new ColorVariations(warn);
    }

    generatePaletteVariations(): ColorsPalette {
        return this;
    }

    setAsCssVariables(): void {
        this.setPrimaryPalette();
    }

    private setPrimaryPalette(): void {
        document.documentElement.style.setProperty('--primary-700', this.primaryVariations.variant700);
    }
}