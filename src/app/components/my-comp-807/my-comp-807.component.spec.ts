import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp807Component } from './my-comp-807.component';

describe('MyComp807Component', () => {
  let component: MyComp807Component;
  let fixture: ComponentFixture<MyComp807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
