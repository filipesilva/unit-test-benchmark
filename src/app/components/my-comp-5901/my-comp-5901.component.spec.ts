import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5901Component } from './my-comp-5901.component';

describe('MyComp5901Component', () => {
  let component: MyComp5901Component;
  let fixture: ComponentFixture<MyComp5901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
