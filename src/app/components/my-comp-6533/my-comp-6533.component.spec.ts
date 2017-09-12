import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6533Component } from './my-comp-6533.component';

describe('MyComp6533Component', () => {
  let component: MyComp6533Component;
  let fixture: ComponentFixture<MyComp6533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
