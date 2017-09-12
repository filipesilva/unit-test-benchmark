import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp986Component } from './my-comp-986.component';

describe('MyComp986Component', () => {
  let component: MyComp986Component;
  let fixture: ComponentFixture<MyComp986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
