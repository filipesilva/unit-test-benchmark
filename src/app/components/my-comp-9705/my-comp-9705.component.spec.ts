import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9705Component } from './my-comp-9705.component';

describe('MyComp9705Component', () => {
  let component: MyComp9705Component;
  let fixture: ComponentFixture<MyComp9705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
