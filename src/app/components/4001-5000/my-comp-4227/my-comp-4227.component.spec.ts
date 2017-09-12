import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4227Component } from './my-comp-4227.component';

describe('MyComp4227Component', () => {
  let component: MyComp4227Component;
  let fixture: ComponentFixture<MyComp4227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
