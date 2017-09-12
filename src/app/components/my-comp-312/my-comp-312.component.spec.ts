import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp312Component } from './my-comp-312.component';

describe('MyComp312Component', () => {
  let component: MyComp312Component;
  let fixture: ComponentFixture<MyComp312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
