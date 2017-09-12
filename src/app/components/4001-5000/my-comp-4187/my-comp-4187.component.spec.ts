import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4187Component } from './my-comp-4187.component';

describe('MyComp4187Component', () => {
  let component: MyComp4187Component;
  let fixture: ComponentFixture<MyComp4187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
