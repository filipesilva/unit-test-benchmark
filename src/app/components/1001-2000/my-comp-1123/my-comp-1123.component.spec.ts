import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1123Component } from './my-comp-1123.component';

describe('MyComp1123Component', () => {
  let component: MyComp1123Component;
  let fixture: ComponentFixture<MyComp1123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
