import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6364Component } from './my-comp-6364.component';

describe('MyComp6364Component', () => {
  let component: MyComp6364Component;
  let fixture: ComponentFixture<MyComp6364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
