import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6464Component } from './my-comp-6464.component';

describe('MyComp6464Component', () => {
  let component: MyComp6464Component;
  let fixture: ComponentFixture<MyComp6464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
