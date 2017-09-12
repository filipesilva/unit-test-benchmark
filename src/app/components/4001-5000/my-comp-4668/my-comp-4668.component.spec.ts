import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4668Component } from './my-comp-4668.component';

describe('MyComp4668Component', () => {
  let component: MyComp4668Component;
  let fixture: ComponentFixture<MyComp4668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
