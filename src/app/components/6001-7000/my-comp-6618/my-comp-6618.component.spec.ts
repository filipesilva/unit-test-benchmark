import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6618Component } from './my-comp-6618.component';

describe('MyComp6618Component', () => {
  let component: MyComp6618Component;
  let fixture: ComponentFixture<MyComp6618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
