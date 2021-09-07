import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdaterequestComponent } from './getdaterequest.component';

describe('GetdaterequestComponent', () => {
  let component: GetdaterequestComponent;
  let fixture: ComponentFixture<GetdaterequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdaterequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdaterequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
