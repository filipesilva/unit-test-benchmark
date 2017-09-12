import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7420Component } from './my-comp-7420.component';

describe('MyComp7420Component', () => {
  let component: MyComp7420Component;
  let fixture: ComponentFixture<MyComp7420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
