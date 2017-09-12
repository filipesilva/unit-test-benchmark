import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4163Component } from './my-comp-4163.component';

describe('MyComp4163Component', () => {
  let component: MyComp4163Component;
  let fixture: ComponentFixture<MyComp4163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
