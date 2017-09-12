import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7618Component } from './my-comp-7618.component';

describe('MyComp7618Component', () => {
  let component: MyComp7618Component;
  let fixture: ComponentFixture<MyComp7618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
