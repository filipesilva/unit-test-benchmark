import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6013Component } from './my-comp-6013.component';

describe('MyComp6013Component', () => {
  let component: MyComp6013Component;
  let fixture: ComponentFixture<MyComp6013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
