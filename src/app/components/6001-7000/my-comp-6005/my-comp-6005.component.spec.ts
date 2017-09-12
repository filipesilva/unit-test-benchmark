import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6005Component } from './my-comp-6005.component';

describe('MyComp6005Component', () => {
  let component: MyComp6005Component;
  let fixture: ComponentFixture<MyComp6005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
