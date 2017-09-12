import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2061Component } from './my-comp-2061.component';

describe('MyComp2061Component', () => {
  let component: MyComp2061Component;
  let fixture: ComponentFixture<MyComp2061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
