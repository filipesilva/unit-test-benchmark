import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4021Component } from './my-comp-4021.component';

describe('MyComp4021Component', () => {
  let component: MyComp4021Component;
  let fixture: ComponentFixture<MyComp4021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
