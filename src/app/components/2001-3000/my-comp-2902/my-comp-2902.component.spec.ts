import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2902Component } from './my-comp-2902.component';

describe('MyComp2902Component', () => {
  let component: MyComp2902Component;
  let fixture: ComponentFixture<MyComp2902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
