import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2985Component } from './my-comp-2985.component';

describe('MyComp2985Component', () => {
  let component: MyComp2985Component;
  let fixture: ComponentFixture<MyComp2985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
