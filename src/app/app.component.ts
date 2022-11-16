import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.getDog();
    this.getDogRepeat();
    this.getDogTake();
    this.getDogFilter();
    this.getDogSkip();
    this.getDogToArray();
    this.getDogTap();
    this.getDogFinalize();
    this.getDogDelay();
  }

  getDog() {
    this.dogService.getDog().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogRepeat() {
    this.dogService.getDogRepeat().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogTake() {
    this.dogService.getDogTake().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogFilter() {
    this.dogService.getDogFilter().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogSkip() {
    this.dogService.getDogSkip().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogToArray() {
    this.dogService.getDogToArray().subscribe((dogArray: Dog[]) => {
      const [dog] = dogArray;
      this.dogs.push(dog);
    });
  }

  getDogTap() {
    this.dogService.getDogTap().subscribe((dog) => this.dogs.push(dog as Dog));
  }

  getDogFinalize() {
    this.dogService.getDogFinalize().subscribe((dog: Dog) => this.dogs.push(dog));
  }

  getDogDelay() {
    this.dogService.getDogDelay().subscribe((dog: Dog) => this.dogs.push(dog));
  }
}
