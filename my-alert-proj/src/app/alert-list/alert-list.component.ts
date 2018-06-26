import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  title = 'app';

  columnDefs = [
    {headerName: 'AlertId', field: 'alertId', width: 150},
    {headerName: 'AlertTime', field: 'alertTime', width: 150},
    {headerName: 'Severity', field: 'severity', width: 150},
    {headerName: 'ClientIP', field: 'clientIP', width: 150},
    {headerName: 'ServerIP', field: 'serverIP', width: 150},
    {headerName: 'Protocol', field: 'protocol', width: 150},
    {headerName: 'ClientCounty', field: 'clientCounty', width: 150}
  ];

  rowData = [
    {alertId: '1234', alertTime: '2018-02-24 04:45:22', severity: 'Low', clientIP: '123.564.934.56', serverIP: '345.67.945.934',
      protocol: 'Http', clientCounty: 'America'},
    {alertId: '2134', alertTime: '2018-03-12 06:45:05', severity: 'High', clientIP: '564.239.67.987', serverIP: '485.278.209.012',
      protocol: 'FTP', clientCounty: 'America'},
    {alertId: '4234', alertTime: '2018-04-23 02:45:22', severity: 'Medium', clientIP: '983.834.214.856', serverIP: '471.267.445.34',
      protocol: 'SMTP', clientCounty: 'America'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
