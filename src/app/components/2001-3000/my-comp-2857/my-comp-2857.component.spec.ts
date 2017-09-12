import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2857Component } from './my-comp-2857.component';

describe('MyComp2857Component', () => {
  let component: MyComp2857Component;
  let fixture: ComponentFixture<MyComp2857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
