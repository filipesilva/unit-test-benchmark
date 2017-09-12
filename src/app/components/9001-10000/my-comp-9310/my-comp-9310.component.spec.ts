import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9310Component } from './my-comp-9310.component';

describe('MyComp9310Component', () => {
  let component: MyComp9310Component;
  let fixture: ComponentFixture<MyComp9310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
