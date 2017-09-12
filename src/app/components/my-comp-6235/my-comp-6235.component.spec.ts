import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6235Component } from './my-comp-6235.component';

describe('MyComp6235Component', () => {
  let component: MyComp6235Component;
  let fixture: ComponentFixture<MyComp6235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
