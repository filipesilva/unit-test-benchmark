import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2527Component } from './my-comp-2527.component';

describe('MyComp2527Component', () => {
  let component: MyComp2527Component;
  let fixture: ComponentFixture<MyComp2527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
