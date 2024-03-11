import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import Color from 'color';
import { MaterialPaletteGenerator } from '../../../theme-generator/material-palette-generator';

@Component({
  selector: 'app-material-selector',
  standalone: true,
  imports: [MatButtonModule, MatProgressBarModule],
  templateUrl: './material-selector.component.html',
  styleUrl: './material-selector.component.scss'
})
export class MaterialSelectorComponent {
  private primary500: string = "#f7f768";
  private accent500: string = "#68ebf7";
  private warn500: string = "#f76868";
  isDefaultPalette: boolean = true;

  title = 'ui-with-material';

  constructor(private paletteGenerator: MaterialPaletteGenerator) { }

  changePalette(): void {
    this.isDefaultPalette = !this.isDefaultPalette;
    if(this.isDefaultPalette) {
      this.paletteGenerator.generateDefaultPalette();
    }
    else {
      this.paletteGenerator.generatePalette(this.primary500, this.accent500, this.warn500);
    }
  }
}
