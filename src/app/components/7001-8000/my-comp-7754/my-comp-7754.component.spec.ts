import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7754Component } from './my-comp-7754.component';

describe('MyComp7754Component', () => {
  let component: MyComp7754Component;
  let fixture: ComponentFixture<MyComp7754Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7754Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
