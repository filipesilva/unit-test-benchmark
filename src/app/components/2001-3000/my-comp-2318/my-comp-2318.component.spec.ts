import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2318Component } from './my-comp-2318.component';

describe('MyComp2318Component', () => {
  let component: MyComp2318Component;
  let fixture: ComponentFixture<MyComp2318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
