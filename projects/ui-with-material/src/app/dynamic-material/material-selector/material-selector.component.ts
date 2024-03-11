import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import Color from 'color';

@Component({
  selector: 'app-material-selector',
  standalone: true,
  imports: [MatButtonModule, MatProgressBarModule],
  templateUrl: './material-selector.component.html',
  styleUrl: './material-selector.component.scss'
})
export class MaterialSelectorComponent {
  private error700: string = "#991617";
  private primary700: string = "#2290a9";
  private currentPrimary: string = this.primary700;

  title = 'ui-with-material';

  changePrimaryColor(): void {
    this.toggleCurrentPrimaryColor();
    this.updateGlobalPrimaryColorVariable();
  }

  private toggleCurrentPrimaryColor(): void {
    if (this.currentPrimary === this.primary700) {
      this.currentPrimary = this.error700;
    }
    else this.currentPrimary = this.primary700;
  }

  private updateGlobalPrimaryColorVariable(): void {
    document.documentElement.style.setProperty('--primary-700', this.currentPrimary);
  }

  lightenPrimaryColor(): void {
    const color: Color | null = this.buildColor(this.currentPrimary);
    if (color) {
      this.currentPrimary = color.lighten(0.5).hex();
      this.updateGlobalPrimaryColorVariable();
    }
  }

  private buildColor(color: string): Color | null {
    try {
      const newColor = new Color(color);
      return newColor;
    }
    catch (error) {
      console.log(`The provided color ${color} is not a valid hex color. We will use the default colors palette.`);
      return null;
    }
  }
}
