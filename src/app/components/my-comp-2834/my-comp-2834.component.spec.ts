import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2834Component } from './my-comp-2834.component';

describe('MyComp2834Component', () => {
  let component: MyComp2834Component;
  let fixture: ComponentFixture<MyComp2834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
