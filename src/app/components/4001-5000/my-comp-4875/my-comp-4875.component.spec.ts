import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4875Component } from './my-comp-4875.component';

describe('MyComp4875Component', () => {
  let component: MyComp4875Component;
  let fixture: ComponentFixture<MyComp4875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
