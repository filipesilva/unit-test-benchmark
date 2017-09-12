import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2322Component } from './my-comp-2322.component';

describe('MyComp2322Component', () => {
  let component: MyComp2322Component;
  let fixture: ComponentFixture<MyComp2322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
