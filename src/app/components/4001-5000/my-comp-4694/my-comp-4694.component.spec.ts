import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4694Component } from './my-comp-4694.component';

describe('MyComp4694Component', () => {
  let component: MyComp4694Component;
  let fixture: ComponentFixture<MyComp4694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
