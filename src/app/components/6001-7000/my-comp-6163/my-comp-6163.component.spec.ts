import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6163Component } from './my-comp-6163.component';

describe('MyComp6163Component', () => {
  let component: MyComp6163Component;
  let fixture: ComponentFixture<MyComp6163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
