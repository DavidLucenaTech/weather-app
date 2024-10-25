import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { ActivatedRoute } from '@angular/router';
import { concatMap, filter, map, Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.scss'
})
export class WeatherReportComponent {

  citySkyline!: string;

  weatherSubscription!: Observable<any>;
  day!: Date;
  
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getDate();
    this.weatherSubscription = this.route.params.pipe(
      map((params) =>params['locationName']),
      filter((name) => !!name),
      map((cityName) => {
        this.citySkyline = '/'+ cityName + '.jpg';
        return cityName;
      }),
      concatMap((name) => this.weatherService.getWeatherForCity(name))
    );
  }

  getDate() {
    this.day = new Date();
  }
}
