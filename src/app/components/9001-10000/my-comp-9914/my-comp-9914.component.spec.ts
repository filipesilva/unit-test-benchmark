import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9914Component } from './my-comp-9914.component';

describe('MyComp9914Component', () => {
  let component: MyComp9914Component;
  let fixture: ComponentFixture<MyComp9914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
