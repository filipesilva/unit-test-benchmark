import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6180Component } from './my-comp-6180.component';

describe('MyComp6180Component', () => {
  let component: MyComp6180Component;
  let fixture: ComponentFixture<MyComp6180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
