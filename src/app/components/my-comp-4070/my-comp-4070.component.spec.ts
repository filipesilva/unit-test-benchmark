import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4070Component } from './my-comp-4070.component';

describe('MyComp4070Component', () => {
  let component: MyComp4070Component;
  let fixture: ComponentFixture<MyComp4070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
