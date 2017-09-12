import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6453Component } from './my-comp-6453.component';

describe('MyComp6453Component', () => {
  let component: MyComp6453Component;
  let fixture: ComponentFixture<MyComp6453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
