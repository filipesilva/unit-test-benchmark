import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4144Component } from './my-comp-4144.component';

describe('MyComp4144Component', () => {
  let component: MyComp4144Component;
  let fixture: ComponentFixture<MyComp4144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
