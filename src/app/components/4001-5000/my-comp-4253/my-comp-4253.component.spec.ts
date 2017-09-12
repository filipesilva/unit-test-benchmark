import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4253Component } from './my-comp-4253.component';

describe('MyComp4253Component', () => {
  let component: MyComp4253Component;
  let fixture: ComponentFixture<MyComp4253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
