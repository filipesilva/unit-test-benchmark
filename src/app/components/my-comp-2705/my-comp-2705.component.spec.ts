import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2705Component } from './my-comp-2705.component';

describe('MyComp2705Component', () => {
  let component: MyComp2705Component;
  let fixture: ComponentFixture<MyComp2705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
