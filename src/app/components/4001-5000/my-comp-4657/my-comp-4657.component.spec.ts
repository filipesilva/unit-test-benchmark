import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4657Component } from './my-comp-4657.component';

describe('MyComp4657Component', () => {
  let component: MyComp4657Component;
  let fixture: ComponentFixture<MyComp4657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
