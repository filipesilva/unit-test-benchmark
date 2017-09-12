import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4993Component } from './my-comp-4993.component';

describe('MyComp4993Component', () => {
  let component: MyComp4993Component;
  let fixture: ComponentFixture<MyComp4993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
