import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2304Component } from './my-comp-2304.component';

describe('MyComp2304Component', () => {
  let component: MyComp2304Component;
  let fixture: ComponentFixture<MyComp2304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
