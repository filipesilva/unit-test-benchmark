import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2299Component } from './my-comp-2299.component';

describe('MyComp2299Component', () => {
  let component: MyComp2299Component;
  let fixture: ComponentFixture<MyComp2299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
