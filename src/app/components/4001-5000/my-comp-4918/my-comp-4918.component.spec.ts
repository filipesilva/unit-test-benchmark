import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4918Component } from './my-comp-4918.component';

describe('MyComp4918Component', () => {
  let component: MyComp4918Component;
  let fixture: ComponentFixture<MyComp4918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
