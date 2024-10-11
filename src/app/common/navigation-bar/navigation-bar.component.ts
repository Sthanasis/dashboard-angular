import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TableIconComponent } from '../../icons/table-icon/table-icon.component';
import { ChartIconComponent } from '../../icons/chart-icon/chart-icon.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TableIconComponent,
    ChartIconComponent,
  ],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {}
