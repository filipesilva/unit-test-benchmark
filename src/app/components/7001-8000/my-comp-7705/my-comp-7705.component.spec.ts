import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7705Component } from './my-comp-7705.component';

describe('MyComp7705Component', () => {
  let component: MyComp7705Component;
  let fixture: ComponentFixture<MyComp7705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
