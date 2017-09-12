import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp289Component } from './my-comp-289.component';

describe('MyComp289Component', () => {
  let component: MyComp289Component;
  let fixture: ComponentFixture<MyComp289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
