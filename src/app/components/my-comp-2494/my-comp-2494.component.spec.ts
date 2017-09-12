import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2494Component } from './my-comp-2494.component';

describe('MyComp2494Component', () => {
  let component: MyComp2494Component;
  let fixture: ComponentFixture<MyComp2494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
