import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2859Component } from './my-comp-2859.component';

describe('MyComp2859Component', () => {
  let component: MyComp2859Component;
  let fixture: ComponentFixture<MyComp2859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
