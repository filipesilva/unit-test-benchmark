import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6649Component } from './my-comp-6649.component';

describe('MyComp6649Component', () => {
  let component: MyComp6649Component;
  let fixture: ComponentFixture<MyComp6649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
