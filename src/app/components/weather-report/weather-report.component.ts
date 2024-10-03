import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.scss'
})
export class WeatherReportComponent {
  
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Our route params observable
    this.route.params;
  }
}
