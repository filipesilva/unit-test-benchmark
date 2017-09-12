import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4359Component } from './my-comp-4359.component';

describe('MyComp4359Component', () => {
  let component: MyComp4359Component;
  let fixture: ComponentFixture<MyComp4359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
