import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6010Component } from './my-comp-6010.component';

describe('MyComp6010Component', () => {
  let component: MyComp6010Component;
  let fixture: ComponentFixture<MyComp6010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
