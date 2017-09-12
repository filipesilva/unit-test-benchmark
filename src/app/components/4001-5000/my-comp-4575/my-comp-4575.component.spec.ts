import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4575Component } from './my-comp-4575.component';

describe('MyComp4575Component', () => {
  let component: MyComp4575Component;
  let fixture: ComponentFixture<MyComp4575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
