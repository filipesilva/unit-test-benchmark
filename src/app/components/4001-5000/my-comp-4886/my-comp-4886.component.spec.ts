import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4886Component } from './my-comp-4886.component';

describe('MyComp4886Component', () => {
  let component: MyComp4886Component;
  let fixture: ComponentFixture<MyComp4886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
