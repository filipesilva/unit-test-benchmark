import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp187Component } from './my-comp-187.component';

describe('MyComp187Component', () => {
  let component: MyComp187Component;
  let fixture: ComponentFixture<MyComp187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
