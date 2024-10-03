import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect, MatOption, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {
  cities = ["London", "Barcelona", "Copenhagen", "Rome", "Madrid", "Paris", "New York", "Viena", "Berlin"];

  cityControl!: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
  }

  ngOnDestroy() {}

}
