import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp203Component } from './my-comp-203.component';

describe('MyComp203Component', () => {
  let component: MyComp203Component;
  let fixture: ComponentFixture<MyComp203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
