import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2312Component } from './my-comp-2312.component';

describe('MyComp2312Component', () => {
  let component: MyComp2312Component;
  let fixture: ComponentFixture<MyComp2312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
