import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data/data.service';
import { TempTime } from './model/temp-time';
import { ProcessingService } from './services/processing/processing.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-nan';
  data = null;
  tempMean: number = 0;
  maxTempTime: TempTime = {time: '', temp: 0};
  minTempTime: TempTime = {time: '', temp: 0};
  startDate = '';
  endDate = '';

  dataServ = inject(DataService);
  processingServ = inject(ProcessingService);

  round = Math.round;

  ngOnInit(){
    this.transformData()
  }

  async transformData(){
    const data = await this.dataServ.getData();
    console.log(data);
    const tempArray = this.processingServ.getTempArrayFromHourlyData(data.hourly);
    this.maxTempTime = this.processingServ.getMaxTemp(tempArray);
    this.minTempTime = this.processingServ.getMinTemp(tempArray);
    this.tempMean = this.processingServ.getTempMean(tempArray);

    this.startDate = tempArray[0].time;
    this.endDate = tempArray[tempArray.length-1].time;
  }

}
