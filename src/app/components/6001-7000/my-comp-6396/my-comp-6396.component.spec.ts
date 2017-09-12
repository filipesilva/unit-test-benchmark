import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6396Component } from './my-comp-6396.component';

describe('MyComp6396Component', () => {
  let component: MyComp6396Component;
  let fixture: ComponentFixture<MyComp6396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
