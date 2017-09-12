import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9539Component } from './my-comp-9539.component';

describe('MyComp9539Component', () => {
  let component: MyComp9539Component;
  let fixture: ComponentFixture<MyComp9539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
