import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp464Component } from './my-comp-464.component';

describe('MyComp464Component', () => {
  let component: MyComp464Component;
  let fixture: ComponentFixture<MyComp464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
