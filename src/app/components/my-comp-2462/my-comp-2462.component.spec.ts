import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2462Component } from './my-comp-2462.component';

describe('MyComp2462Component', () => {
  let component: MyComp2462Component;
  let fixture: ComponentFixture<MyComp2462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
