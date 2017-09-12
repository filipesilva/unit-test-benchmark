import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7203Component } from './my-comp-7203.component';

describe('MyComp7203Component', () => {
  let component: MyComp7203Component;
  let fixture: ComponentFixture<MyComp7203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
