import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp599Component } from './my-comp-599.component';

describe('MyComp599Component', () => {
  let component: MyComp599Component;
  let fixture: ComponentFixture<MyComp599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
