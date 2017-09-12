import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6973Component } from './my-comp-6973.component';

describe('MyComp6973Component', () => {
  let component: MyComp6973Component;
  let fixture: ComponentFixture<MyComp6973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
