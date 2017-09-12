import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4328Component } from './my-comp-4328.component';

describe('MyComp4328Component', () => {
  let component: MyComp4328Component;
  let fixture: ComponentFixture<MyComp4328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
