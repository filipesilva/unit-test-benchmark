import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6683Component } from './my-comp-6683.component';

describe('MyComp6683Component', () => {
  let component: MyComp6683Component;
  let fixture: ComponentFixture<MyComp6683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
