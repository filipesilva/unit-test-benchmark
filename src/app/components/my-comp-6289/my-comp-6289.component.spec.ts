import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6289Component } from './my-comp-6289.component';

describe('MyComp6289Component', () => {
  let component: MyComp6289Component;
  let fixture: ComponentFixture<MyComp6289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
