import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreryComponent } from './librery.component';

describe('LibreryComponent', () => {
  let component: LibreryComponent;
  let fixture: ComponentFixture<LibreryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
