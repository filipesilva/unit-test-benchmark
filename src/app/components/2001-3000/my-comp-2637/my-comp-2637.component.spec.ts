import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2637Component } from './my-comp-2637.component';

describe('MyComp2637Component', () => {
  let component: MyComp2637Component;
  let fixture: ComponentFixture<MyComp2637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
