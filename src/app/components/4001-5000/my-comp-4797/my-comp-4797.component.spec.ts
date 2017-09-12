import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4797Component } from './my-comp-4797.component';

describe('MyComp4797Component', () => {
  let component: MyComp4797Component;
  let fixture: ComponentFixture<MyComp4797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
