import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp489Component } from './my-comp-489.component';

describe('MyComp489Component', () => {
  let component: MyComp489Component;
  let fixture: ComponentFixture<MyComp489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
