import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialPaletteGenerator } from '../theme-generator/material-palette-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private paletteGenerator: MaterialPaletteGenerator) { 
    //this.paletteGenerator.generateDefaultPalette();
  }
}
