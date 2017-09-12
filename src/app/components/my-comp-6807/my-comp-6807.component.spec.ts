import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6807Component } from './my-comp-6807.component';

describe('MyComp6807Component', () => {
  let component: MyComp6807Component;
  let fixture: ComponentFixture<MyComp6807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
