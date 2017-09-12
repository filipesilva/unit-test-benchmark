import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp57Component } from './my-comp-57.component';

describe('MyComp57Component', () => {
  let component: MyComp57Component;
  let fixture: ComponentFixture<MyComp57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
