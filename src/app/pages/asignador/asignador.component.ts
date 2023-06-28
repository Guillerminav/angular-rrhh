import { Component, OnInit } from '@angular/core';
import { ApiService } from './asignador.service';

@Component({
  selector: 'app-asignador',
  templateUrl: './asignador.component.html',
  styleUrls: ['./asignador.component.css']
})
export class AsignadorComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.listAsignadores()
  }
  
  data: any[] = []

  listAsignadores() {
    this.apiService.getData().subscribe(data => {
      this.data = data
    })
  }

}
