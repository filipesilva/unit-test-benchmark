import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6087Component } from './my-comp-6087.component';

describe('MyComp6087Component', () => {
  let component: MyComp6087Component;
  let fixture: ComponentFixture<MyComp6087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
