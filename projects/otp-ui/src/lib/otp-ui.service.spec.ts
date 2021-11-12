import { TestBed } from '@angular/core/testing';

import { OtpUiService } from './otp-ui.service';

describe('OtpUiService', () => {
  let service: OtpUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
