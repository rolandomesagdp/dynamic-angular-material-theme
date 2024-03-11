import { Injectable } from "@angular/core";
import { MaterialCssVarsService, MaterialCssVariables } from "angular-material-css-vars";

@Injectable({ providedIn: "root" })
export class MaterialPaletteGenerator {

    constructor(private cssVariablesService: MaterialCssVarsService) { }

    static defaultPaletteInitializer(defaultPaletteGenerator: MaterialPaletteGenerator) {
        defaultPaletteGenerator.generateDefaultPalette();
    }

    generatePalette(primary500: string, accent500: string, warn500: string): void {
        this.cssVariablesService.setAutoContrastEnabled(true);
        this.cssVariablesService.setPrimaryColor(primary500);
        this.cssVariablesService.setAccentColor(accent500);
        this.cssVariablesService.setWarnColor(warn500);
    }

    generateDefaultPalette(): void {
        this.cssVariablesService.setAutoContrastEnabled(false);
        this.generateDefaultPrimaryPalette();
        this.generateDefaultAccentPalette();
        this.generateDefaultWarnPalette();
    }

    generateDefaultPrimaryPalette() {
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary50, "#e1f6fc");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary100, "#b4e8f6");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary200, "#84d9ef");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary300, "#56cae6");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary400, "#3abfdf");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary500, "#2eb4d7");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary600, "#29a5c3");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary700, "#2290a9");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary800, "#1c7d90");
        this.cssVariablesService.setVariable(MaterialCssVariables.Primary900, "#125a65");
        this.generatePrimaryPaletteContrast();
    }
    
    generateDefaultAccentPalette() {
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent50, "#e6e8f4");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent100, "#c0c6e4");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent200, "#97a1d1");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent300, "#6f7dbf");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent400, "#33488d");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent500, "#2e46a6");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent600, "#283f9c");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent700, "#001a70");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent800, "#001765");
        this.cssVariablesService.setVariable(MaterialCssVariables.Accent900, "#001043");
    }
    
    generateDefaultWarnPalette() {
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn50, "#f7e6e8");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn100, "#ecc2c5");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn200, "#ce8886");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn300, "#b85d5a");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn400, "#ba3c36");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn500, "#b6281b");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn600, "#a91f1b");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn700, "#991617");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn800, "#8c1011");
        this.cssVariablesService.setVariable(MaterialCssVariables.Warn900, "#7d0606");
    }

    generatePrimaryPaletteContrast(): void {
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast50, "#000000");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast100, "#000000");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast200, "#000000");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast300, "#000000");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast400, "#000000");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast500, "#ffffff");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast600, "#ffffff");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast700, "#ffffff");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast800, "#ffffff");
        this.cssVariablesService.setVariable(MaterialCssVariables.PrimaryContrast900, "#ffffff");
    }
}