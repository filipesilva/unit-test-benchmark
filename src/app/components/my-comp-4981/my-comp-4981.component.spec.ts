import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4981Component } from './my-comp-4981.component';

describe('MyComp4981Component', () => {
  let component: MyComp4981Component;
  let fixture: ComponentFixture<MyComp4981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
