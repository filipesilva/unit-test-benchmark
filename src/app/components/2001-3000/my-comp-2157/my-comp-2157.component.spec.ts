import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2157Component } from './my-comp-2157.component';

describe('MyComp2157Component', () => {
  let component: MyComp2157Component;
  let fixture: ComponentFixture<MyComp2157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
