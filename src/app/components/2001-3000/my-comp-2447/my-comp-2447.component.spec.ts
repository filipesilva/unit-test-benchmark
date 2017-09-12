import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2447Component } from './my-comp-2447.component';

describe('MyComp2447Component', () => {
  let component: MyComp2447Component;
  let fixture: ComponentFixture<MyComp2447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
