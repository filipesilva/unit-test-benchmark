import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6141Component } from './my-comp-6141.component';

describe('MyComp6141Component', () => {
  let component: MyComp6141Component;
  let fixture: ComponentFixture<MyComp6141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
