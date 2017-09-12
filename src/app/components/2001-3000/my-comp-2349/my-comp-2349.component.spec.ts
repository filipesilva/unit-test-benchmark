import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2349Component } from './my-comp-2349.component';

describe('MyComp2349Component', () => {
  let component: MyComp2349Component;
  let fixture: ComponentFixture<MyComp2349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
