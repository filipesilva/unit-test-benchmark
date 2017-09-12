import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7599Component } from './my-comp-7599.component';

describe('MyComp7599Component', () => {
  let component: MyComp7599Component;
  let fixture: ComponentFixture<MyComp7599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
