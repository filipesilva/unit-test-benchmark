import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6521Component } from './my-comp-6521.component';

describe('MyComp6521Component', () => {
  let component: MyComp6521Component;
  let fixture: ComponentFixture<MyComp6521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
