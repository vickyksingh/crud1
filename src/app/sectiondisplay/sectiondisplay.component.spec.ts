import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiondisplayComponent } from './sectiondisplay.component';

describe('SectiondisplayComponent', () => {
  let component: SectiondisplayComponent;
  let fixture: ComponentFixture<SectiondisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectiondisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiondisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
