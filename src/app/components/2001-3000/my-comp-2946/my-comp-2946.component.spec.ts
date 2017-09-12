import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2946Component } from './my-comp-2946.component';

describe('MyComp2946Component', () => {
  let component: MyComp2946Component;
  let fixture: ComponentFixture<MyComp2946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
