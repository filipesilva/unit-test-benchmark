import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2328Component } from './my-comp-2328.component';

describe('MyComp2328Component', () => {
  let component: MyComp2328Component;
  let fixture: ComponentFixture<MyComp2328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
