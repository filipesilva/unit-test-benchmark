import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2867Component } from './my-comp-2867.component';

describe('MyComp2867Component', () => {
  let component: MyComp2867Component;
  let fixture: ComponentFixture<MyComp2867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
