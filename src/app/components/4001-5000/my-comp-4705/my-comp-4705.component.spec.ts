import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4705Component } from './my-comp-4705.component';

describe('MyComp4705Component', () => {
  let component: MyComp4705Component;
  let fixture: ComponentFixture<MyComp4705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
