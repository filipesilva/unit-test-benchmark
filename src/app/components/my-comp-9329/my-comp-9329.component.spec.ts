import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9329Component } from './my-comp-9329.component';

describe('MyComp9329Component', () => {
  let component: MyComp9329Component;
  let fixture: ComponentFixture<MyComp9329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
