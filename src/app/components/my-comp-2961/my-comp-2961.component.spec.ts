import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2961Component } from './my-comp-2961.component';

describe('MyComp2961Component', () => {
  let component: MyComp2961Component;
  let fixture: ComponentFixture<MyComp2961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
