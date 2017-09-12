import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4343Component } from './my-comp-4343.component';

describe('MyComp4343Component', () => {
  let component: MyComp4343Component;
  let fixture: ComponentFixture<MyComp4343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
