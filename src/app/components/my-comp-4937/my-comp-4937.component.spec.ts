import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4937Component } from './my-comp-4937.component';

describe('MyComp4937Component', () => {
  let component: MyComp4937Component;
  let fixture: ComponentFixture<MyComp4937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
