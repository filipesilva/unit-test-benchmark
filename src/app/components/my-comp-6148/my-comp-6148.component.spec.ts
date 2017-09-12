import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6148Component } from './my-comp-6148.component';

describe('MyComp6148Component', () => {
  let component: MyComp6148Component;
  let fixture: ComponentFixture<MyComp6148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
