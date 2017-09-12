import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4848Component } from './my-comp-4848.component';

describe('MyComp4848Component', () => {
  let component: MyComp4848Component;
  let fixture: ComponentFixture<MyComp4848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
