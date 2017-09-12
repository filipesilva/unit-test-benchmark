import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2978Component } from './my-comp-2978.component';

describe('MyComp2978Component', () => {
  let component: MyComp2978Component;
  let fixture: ComponentFixture<MyComp2978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
