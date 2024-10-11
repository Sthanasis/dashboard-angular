import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent } from 'echarts/components';

echarts.use([TitleComponent, TooltipComponent]);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './chart.component.html',
  providers: [provideEcharts()],
})
export class ChartComponent {
  @Input() xAxisData: string[] = [];
  @Input() yAxisData: number[] = [];
}
