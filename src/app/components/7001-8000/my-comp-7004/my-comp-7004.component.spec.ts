import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7004Component } from './my-comp-7004.component';

describe('MyComp7004Component', () => {
  let component: MyComp7004Component;
  let fixture: ComponentFixture<MyComp7004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
