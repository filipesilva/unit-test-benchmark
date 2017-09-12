import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7829Component } from './my-comp-7829.component';

describe('MyComp7829Component', () => {
  let component: MyComp7829Component;
  let fixture: ComponentFixture<MyComp7829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
