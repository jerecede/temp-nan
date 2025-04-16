import { Injectable } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {


  constructor() { }

  getTempArrayFromHourlyData(hourly: any): TempTime[] {
    const tempTimeArray: TempTime[] = [];
    for (let i = 0; i < hourly.temperature_2m.length; i++) {
      const tempCurr = hourly.temperature_2m[i];
      const timeCurr = hourly.time[i];
      const tempTimeCUrr: TempTime = {
        time: timeCurr,
        temp: this.fromFtoC(tempCurr),
      }
      tempTimeArray.push(tempTimeCUrr);
    }
    return tempTimeArray;
  }

  getMinTemp(tempArray: TempTime[]): TempTime {
    let minTemp = Infinity;
    let indexMinTemp = -1;
    let i = 0;

    for (i; i < tempArray.length; i++) {
      const tempTime = tempArray[i];
      const temp = tempTime.temp;
      if(temp < minTemp){
        minTemp = temp;
        indexMinTemp = i;
      }
    }
    return tempArray[indexMinTemp];
  }

  getTempMean(tempArray: TempTime[]): number {
    let tot = 0;
    for (let i = 0 ; i < tempArray.length; i++) {
      const tempTime = tempArray[i];
      tot += tempTime.temp;
    }
    const mean = tot / tempArray.length;
    return mean;
  }

  getMaxTemp(tempArray: TempTime[]): TempTime {
    let maxTemp = -Infinity;
    let indexMaxTemp = -1;
    let i = 0;

    for (i; i < tempArray.length; i++) {
      const tempTime = tempArray[i];
      const temp = tempTime.temp;
      if(temp > maxTemp){
        maxTemp = temp;
        indexMaxTemp = i;
      }
    }
    return tempArray[indexMaxTemp];
  }

  fromFtoC(f: number): number{
    return (f-32)*(5/9);
  }

}
