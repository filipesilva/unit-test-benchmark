import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6900Component } from './my-comp-6900.component';

describe('MyComp6900Component', () => {
  let component: MyComp6900Component;
  let fixture: ComponentFixture<MyComp6900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
