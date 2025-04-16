import { TestBed } from '@angular/core/testing';

import { ProcessingService } from './processing.service';

describe('ProcessingService', () => {
  let service: ProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert F to C', () => {
    // expect(service.fromFtoC(70)).toEqual(21.1);
    // expect(service.fromFtoC(-10)).toEqual(36);
    // expect(service.fromFtoC(60)).toEqual(5);
    // expect(service.fromFtoC(0)).toEqual(-19);

    const fArray = [70, -10, 60, 0];
    const cArray = [21.1, 36, 5, -19];
    for (let i = 0; i < fArray.length; i++) {
      const f = fArray[i];
      const c = cArray[i];
      expect(service.fromFtoC(f)).toEqual(c);
    };
  });

  it('should convert hourly obj to TempTime Array', () => {
    //copia da andrea
  })

  it('should convert C to K', () => {
    expect(service.fromCtoK(25)).toEqual(298.15);
    expect(service.fromCtoK(33)).toEqual(306.15);

    // const cArray = [70, -10, 60, 0];
    // const kArray = [21.1, 36, 5, -19];
    // for (let i = 0; i < cArray.length; i++) {
    //   const c = cArray[i];
    //   const k = kArray[i];
    //   expect(service.fromCtoK(c)).toEqual(k);
    // };
  });
});
