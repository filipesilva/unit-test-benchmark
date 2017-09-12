import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6641Component } from './my-comp-6641.component';

describe('MyComp6641Component', () => {
  let component: MyComp6641Component;
  let fixture: ComponentFixture<MyComp6641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
