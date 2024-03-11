import Color from 'color';

export class ColorVariations {
    variant50: string = "";
    variant100: string = "";
    variant200: string = "";
    variant300: string = "";
    variant400: string = "";
    variant500: string = "";
    variant600: string = "";
    variant700: string = "";
    variant800: string = "";
    variant900: string = "";

    constructor(baseColor: string) {
        this.variant500 = baseColor;
    }

    generateVariations(): void {
        try {
            this.variant400 = Color(this.variant500).lighten(0.1)?.hex();
            this.variant600 = Color(this.variant500).darken(0.1)?.hex();
        }
        catch {
            console.log("The provided color is not a valid hex color")
        }
    }
}