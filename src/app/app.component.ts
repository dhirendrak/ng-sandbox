import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private themingServie: ThemingService) { }
  @HostBinding('class') public cssClass: string;

  ngOnInit(): void {
    this.themingServie.theme.subscribe(theme => this.cssClass = theme);
  }
}
