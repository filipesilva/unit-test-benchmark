import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2618Component } from './my-comp-2618.component';

describe('MyComp2618Component', () => {
  let component: MyComp2618Component;
  let fixture: ComponentFixture<MyComp2618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
