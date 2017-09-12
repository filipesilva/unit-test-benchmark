import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5746Component } from './my-comp-5746.component';

describe('MyComp5746Component', () => {
  let component: MyComp5746Component;
  let fixture: ComponentFixture<MyComp5746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
