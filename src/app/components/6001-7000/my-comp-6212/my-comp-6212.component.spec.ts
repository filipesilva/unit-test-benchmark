import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6212Component } from './my-comp-6212.component';

describe('MyComp6212Component', () => {
  let component: MyComp6212Component;
  let fixture: ComponentFixture<MyComp6212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
