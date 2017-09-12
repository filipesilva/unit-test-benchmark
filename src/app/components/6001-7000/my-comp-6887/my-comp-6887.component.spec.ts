import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6887Component } from './my-comp-6887.component';

describe('MyComp6887Component', () => {
  let component: MyComp6887Component;
  let fixture: ComponentFixture<MyComp6887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
