import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp527Component } from './my-comp-527.component';

describe('MyComp527Component', () => {
  let component: MyComp527Component;
  let fixture: ComponentFixture<MyComp527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
