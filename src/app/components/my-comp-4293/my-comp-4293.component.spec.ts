import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4293Component } from './my-comp-4293.component';

describe('MyComp4293Component', () => {
  let component: MyComp4293Component;
  let fixture: ComponentFixture<MyComp4293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
