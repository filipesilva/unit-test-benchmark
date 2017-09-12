import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2818Component } from './my-comp-2818.component';

describe('MyComp2818Component', () => {
  let component: MyComp2818Component;
  let fixture: ComponentFixture<MyComp2818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
