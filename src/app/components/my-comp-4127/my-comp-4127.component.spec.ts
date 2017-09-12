import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4127Component } from './my-comp-4127.component';

describe('MyComp4127Component', () => {
  let component: MyComp4127Component;
  let fixture: ComponentFixture<MyComp4127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
