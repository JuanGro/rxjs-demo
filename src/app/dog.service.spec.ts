import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { DogService } from './dog.service';
import { Dog } from './dog.model';

describe('DogsService', () => {
  let service: DogService;
  const fakeDog: Dog = {
    message: '',
    breed: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DogService);
  });

  it('should get dog', (done: DoneFn) => {
    spyOn(service, 'getDog').and.returnValue(of(fakeDog));
    service
      .getDog()
      .subscribe(({ message, breed }) => {
        expect(message).toBeDefined();
        expect(breed).toBeDefined();
        done();
      });
  });
});
