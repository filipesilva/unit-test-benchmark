import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6597Component } from './my-comp-6597.component';

describe('MyComp6597Component', () => {
  let component: MyComp6597Component;
  let fixture: ComponentFixture<MyComp6597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
