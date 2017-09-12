import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4354Component } from './my-comp-4354.component';

describe('MyComp4354Component', () => {
  let component: MyComp4354Component;
  let fixture: ComponentFixture<MyComp4354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
