import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4818Component } from './my-comp-4818.component';

describe('MyComp4818Component', () => {
  let component: MyComp4818Component;
  let fixture: ComponentFixture<MyComp4818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
