import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private error700: string = "#991617";
  private primary700: string = "#2290a9";
  private currentColor: string = this.primary700;

  title = 'ui-with-material';

  changePrimaryColor(): void {
    this.toggleCurrentPrimaryColor();
    this.updateGlobalPrimaryColorVariable();
  }

  private toggleCurrentPrimaryColor(): void {
    if(this.currentColor === this.primary700) {
      this.currentColor = this.error700;
    }
    else this.currentColor = this.primary700;
  }

  private updateGlobalPrimaryColorVariable(): void {
    document.documentElement.style.setProperty('--primary-700', this.currentColor);
  }
}
