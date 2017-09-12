import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9710Component } from './my-comp-9710.component';

describe('MyComp9710Component', () => {
  let component: MyComp9710Component;
  let fixture: ComponentFixture<MyComp9710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
