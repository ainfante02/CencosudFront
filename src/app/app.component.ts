import { Component } from '@angular/core';
import{WeatherService} from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public hora= new Date();
public utc=this.hora.getTime() + (this.hora.getTimezoneOffset() * 60000);
public offset =-14400
public location = { cityName: 'Santiago' };
public weather = undefined;
public nd;
constructor(private weatherService: WeatherService) { }

ngOnInit() {
  this.getWeather(this.location.cityName);
  this.nd = new Date(this.utc + (3600000*this.offset))
}

getWeather(cityName: string) {
  this.weatherService
    .sendGetRequest()
    .subscribe(
      res => {
        console.log(res,'soy la repuesta de res');
        this.weather = res;
        
      },
      err => {
        console.log(err);
      }
    );
}

submitLocation(cityName: HTMLInputElement) {
  
  if (cityName.value) {
    this.getWeather(cityName.value);
    cityName.value = '';
  } else {
    alert('Please. Insert some values');
  }
  cityName.focus();

  return false;
  
}

}
