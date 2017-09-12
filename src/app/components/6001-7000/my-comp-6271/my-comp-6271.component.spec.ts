import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6271Component } from './my-comp-6271.component';

describe('MyComp6271Component', () => {
  let component: MyComp6271Component;
  let fixture: ComponentFixture<MyComp6271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
