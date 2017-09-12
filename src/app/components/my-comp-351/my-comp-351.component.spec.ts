import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp351Component } from './my-comp-351.component';

describe('MyComp351Component', () => {
  let component: MyComp351Component;
  let fixture: ComponentFixture<MyComp351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
