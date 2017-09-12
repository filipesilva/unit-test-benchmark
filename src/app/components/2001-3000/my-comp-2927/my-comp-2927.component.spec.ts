import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2927Component } from './my-comp-2927.component';

describe('MyComp2927Component', () => {
  let component: MyComp2927Component;
  let fixture: ComponentFixture<MyComp2927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
