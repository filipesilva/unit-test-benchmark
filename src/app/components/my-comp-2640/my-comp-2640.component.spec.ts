import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2640Component } from './my-comp-2640.component';

describe('MyComp2640Component', () => {
  let component: MyComp2640Component;
  let fixture: ComponentFixture<MyComp2640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
