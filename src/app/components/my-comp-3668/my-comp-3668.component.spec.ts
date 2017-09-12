import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3668Component } from './my-comp-3668.component';

describe('MyComp3668Component', () => {
  let component: MyComp3668Component;
  let fixture: ComponentFixture<MyComp3668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
