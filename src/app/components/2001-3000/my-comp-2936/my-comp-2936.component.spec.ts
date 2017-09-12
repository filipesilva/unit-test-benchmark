import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2936Component } from './my-comp-2936.component';

describe('MyComp2936Component', () => {
  let component: MyComp2936Component;
  let fixture: ComponentFixture<MyComp2936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
