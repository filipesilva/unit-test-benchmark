import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2955Component } from './my-comp-2955.component';

describe('MyComp2955Component', () => {
  let component: MyComp2955Component;
  let fixture: ComponentFixture<MyComp2955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
