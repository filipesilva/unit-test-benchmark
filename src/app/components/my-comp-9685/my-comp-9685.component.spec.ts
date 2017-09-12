import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9685Component } from './my-comp-9685.component';

describe('MyComp9685Component', () => {
  let component: MyComp9685Component;
  let fixture: ComponentFixture<MyComp9685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
