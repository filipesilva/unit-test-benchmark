import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7945Component } from './my-comp-7945.component';

describe('MyComp7945Component', () => {
  let component: MyComp7945Component;
  let fixture: ComponentFixture<MyComp7945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
