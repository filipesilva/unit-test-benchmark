import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2919Component } from './my-comp-2919.component';

describe('MyComp2919Component', () => {
  let component: MyComp2919Component;
  let fixture: ComponentFixture<MyComp2919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
