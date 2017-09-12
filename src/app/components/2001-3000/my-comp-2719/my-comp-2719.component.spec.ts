import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2719Component } from './my-comp-2719.component';

describe('MyComp2719Component', () => {
  let component: MyComp2719Component;
  let fixture: ComponentFixture<MyComp2719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
