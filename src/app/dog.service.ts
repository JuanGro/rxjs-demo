import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  repeat,
  map,
  take,
  count,
  every,
  find,
  filter,
  skip,
  toArray,
  tap,
  finalize,
  delay,
} from 'rxjs';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private api = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getBreed(dog: Dog): Dog {
    dog.breed = dog.message.split('/')[4];
    return dog;
  }

  getDog(): Observable<Dog> {
    return this.http
      .get(this.api)
      .pipe(map((dog) => this.getBreed(dog as Dog)));
  }

  getDogRepeat(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      repeat(2)
    );
  }

  getDogTake(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      repeat(2),
      take(1)
    );
  }

  getDogCount(): Observable<number> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      count()
    );
  }

  getDogEvery(): Observable<boolean> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      every((dog) => dog.breed === 'Poodle')
    );
  }

  getDogFind(): Observable<Dog | undefined> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      find((dog) => dog.breed === 'Poodle')
    );
  }

  getDogFilter(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      filter((dog) => dog.breed === 'Poodle')
    );
  }

  getDogInterval(): Observable<Dog> {
    return this.http
      .get(this.api)
      .pipe(map((dog) => this.getBreed(dog as Dog)));
  }

  getDogSkip(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      repeat(2),
      skip(1)
    );
  }

  getDogToArray(): Observable<Dog[]> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      toArray()
    );
  }

  getDogTap(): Observable<Object> {
    return this.http.get(this.api).pipe(
      tap((dog) => this.getBreed(dog as Dog)),
      tap((dog) => console.log('Tap', dog))
    );
  }

  getDogFinalize(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      finalize(() => console.log('Finalize'))
    );
  }

  getDogDelay(): Observable<Dog> {
    return this.http.get(this.api).pipe(
      map((dog) => this.getBreed(dog as Dog)),
      delay(2000)
    );
  }
}
