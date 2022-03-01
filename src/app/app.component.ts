import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public  readonly title = 'FWD Band';

  public readonly PIANO_TUNE = 'I enjoy to tune';
  public readonly DRUM_TUNE = 'I enjoy the assembly';

  public readonly PIANO_PLAY = 'I play piano';
  public readonly DRUM_PLAY = 'I play drum';

  public readonly PIANO = 'Piano';
  public readonly DRUM = 'Drum';

  public pianoCounter = 0;
  public drumCounter = 0;

  public listBand: any ;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.fetchBand();
  }

  private fetchBand(): void {
    this.http.get('http://localhost:8900/band').subscribe(band => {
      this.listBand = band;
    });
  }
}
