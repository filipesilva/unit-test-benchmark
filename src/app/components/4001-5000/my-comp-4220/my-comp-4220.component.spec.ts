import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4220Component } from './my-comp-4220.component';

describe('MyComp4220Component', () => {
  let component: MyComp4220Component;
  let fixture: ComponentFixture<MyComp4220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
