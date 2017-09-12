import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2798Component } from './my-comp-2798.component';

describe('MyComp2798Component', () => {
  let component: MyComp2798Component;
  let fixture: ComponentFixture<MyComp2798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
