import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7562Component } from './my-comp-7562.component';

describe('MyComp7562Component', () => {
  let component: MyComp7562Component;
  let fixture: ComponentFixture<MyComp7562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
