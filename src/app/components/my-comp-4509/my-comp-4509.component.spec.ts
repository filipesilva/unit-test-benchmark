import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4509Component } from './my-comp-4509.component';

describe('MyComp4509Component', () => {
  let component: MyComp4509Component;
  let fixture: ComponentFixture<MyComp4509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
