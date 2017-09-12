import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6144Component } from './my-comp-6144.component';

describe('MyComp6144Component', () => {
  let component: MyComp6144Component;
  let fixture: ComponentFixture<MyComp6144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
