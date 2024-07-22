import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../ui/header/header.component";
import { AdminSidebarComponent } from '../../../ui/admin-sidebar/admin-sidebar.component';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';

// Register the required components from Chart.js
import { BarController, BarElement, LinearScale, Title, CategoryScale, Filler } from 'chart.js';
import { SidebarComponent } from '../../../ui/sidebar/sidebar.component';
Chart.register(BarController, BarElement, LinearScale, Title, CategoryScale, Filler);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HeaderComponent, AdminSidebarComponent, BaseChartDirective, SidebarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements AfterViewInit, OnInit {
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('chart') chart!: BaseChartDirective;

  ngOnInit(): void {
    this.updateCountsAndPercentages(this.selectedOption);
  }

  public selectedOption: string = 'CCS Week 2024';

  public barChartData: ChartConfiguration['data'] = this.getInitialChartData('CCS Week 2024');

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: true,
      },
      title: {
        display: true,
        text: this.selectedOption,
      }
    },
  };

  public barChartType: ChartType = 'bar';

  public bsitCount: number = 0;
  public bsemcCount: number = 0;
  public bsCsCount: number = 0;
  public totalCount: number = 0;

  public bsitPercent: number = 0;
  public bsemcPercent: number = 0;
  public bsCsPercent: number = 0;

  ngAfterViewInit() {
    if (this.dropdownButton && this.dropdownMenu) {
      this.dropdownButton.nativeElement.addEventListener('click', () => {
        this.dropdownMenu.nativeElement.style.display =
          this.dropdownMenu.nativeElement.style.display === 'block' ? 'none' : 'block';
      });
    }
    this.updateCountsAndPercentages('CCS Week 2024');
  }

  private getInitialChartData(option: string): ChartConfiguration['data'] {
    let bsitData, bscsData, bsemcData;

    switch (option) {
      case 'CCS Week 2024':
        bsitData = this.getRandomData(1);
        bscsData = this.getRandomData(1);
        bsemcData = this.getRandomData(1);
        break;
      case 'IT Olympiad 2024':
        bsitData = this.getRandomData(1);
        bscsData = this.getRandomData(1);
        bsemcData = this.getRandomData(1);
        break;
      case 'Community Service 1':
        bsitData = this.getRandomData(1);
        bscsData = this.getRandomData(1);
        bsemcData = this.getRandomData(1);
        break;
      default:
        throw new Error(`Invalid option: ${option}`);
    }

    return {
      datasets: [
        {
          data: [bsitData[0], bscsData[0], bsemcData[0]],
          backgroundColor: [
            'rgba(135, 187, 173, 1)',
            'rgba(124, 155, 156, 1)',
            'rgba(227, 212, 170, 1)'
          ],
          borderColor: [
            'rgba(135, 187, 173, 1)',
            'rgba(124, 155, 156, 1)',
            'rgba(227, 212, 170, 1)'
          ],
          borderWidth: 0,
        }
      ],
      labels: ['BSIT', 'BSCS', 'BSEMC']
    };
  }

  private getRandomData(count: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 200) + 1);
  }

  onSelectOption(event: Event, option: string) {
    event.stopPropagation();
    this.selectedOption = option;

    // Update the chart data and title
    this.barChartData = this.getInitialChartData(option);
    if (this.barChartOptions && this.barChartOptions.plugins && this.barChartOptions.plugins.title) {
      this.barChartOptions.plugins.title.text = option;
    }

    // Update the counts and percentages
    this.updateCountsAndPercentages(option);

    // Update the chart
    if (this.chart && this.chart.chart) {
      this.chart.chart.update();
    }

    // Hide the dropdown menu after selection
    this.dropdownMenu.nativeElement.style.display = 'none';

  }

  private updateCountsAndPercentages(option: string) {
    const chartData = this.barChartData.datasets;

    this.bsitCount = chartData[0].data[0] as number;
    this.bsCsCount = chartData[0].data[1] as number;
    this.bsemcCount = chartData[0].data[2] as number;

    this.totalCount = this.bsitCount + this.bsCsCount + this.bsemcCount;

    this.bsitPercent = parseFloat(((this.bsitCount / this.totalCount) * 100).toFixed(2));
    this.bsCsPercent = parseFloat(((this.bsCsCount / this.totalCount) * 100).toFixed(2));
    this.bsemcPercent = parseFloat(((this.bsemcCount / this.totalCount) * 100).toFixed(2));
  }
}