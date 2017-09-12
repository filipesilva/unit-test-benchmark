import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1306Component } from './my-comp-1306.component';

describe('MyComp1306Component', () => {
  let component: MyComp1306Component;
  let fixture: ComponentFixture<MyComp1306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
