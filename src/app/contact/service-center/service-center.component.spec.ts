import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterComponent } from './service-center.component';

describe('ServiceCenterComponent', () => {
  let component: ServiceCenterComponent;
  let fixture: ComponentFixture<ServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
