import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5309Component } from './my-comp-5309.component';

describe('MyComp5309Component', () => {
  let component: MyComp5309Component;
  let fixture: ComponentFixture<MyComp5309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
