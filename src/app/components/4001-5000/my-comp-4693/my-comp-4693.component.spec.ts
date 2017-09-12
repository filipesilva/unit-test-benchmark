import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4693Component } from './my-comp-4693.component';

describe('MyComp4693Component', () => {
  let component: MyComp4693Component;
  let fixture: ComponentFixture<MyComp4693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
