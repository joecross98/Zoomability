import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-chart
          [categoryAxis]="{ categories: categories, max: 20, labels: { rotation: 'auto'} }"
          renderAs="canvas"
          [pannable]="{ lock: 'y' }"
          [zoomable]="{ mousewheel: { lock: 'y' } }"
          >
            <kendo-chart-title text="My line chart"></kendo-chart-title>
            <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
            <kendo-chart-tooltip format="{0}"></kendo-chart-tooltip>
            <kendo-chart-series>
                <kendo-chart-series-item type="line" style="smooth" [data]="series.data" [name]="series.name">
                </kendo-chart-series-item>
            </kendo-chart-series>
        </kendo-chart>
    `
})
export class AppComponent implements OnInit {

  series: { name: string, data: number[] } = {
    name: 'My data over time',
    data: []
  };
  categories: number[] = [];

  ngOnInit(): void {
    const baseYear = 2000;
    for (let i = 0; i < 200; i++) {
      this.categories.push(baseYear + i);
      this.series.data.push(Math.floor(Math.random() * 200));
    }
  }

}
