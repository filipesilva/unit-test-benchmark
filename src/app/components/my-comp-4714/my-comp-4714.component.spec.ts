import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4714Component } from './my-comp-4714.component';

describe('MyComp4714Component', () => {
  let component: MyComp4714Component;
  let fixture: ComponentFixture<MyComp4714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
