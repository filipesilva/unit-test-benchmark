import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp147Component } from './my-comp-147.component';

describe('MyComp147Component', () => {
  let component: MyComp147Component;
  let fixture: ComponentFixture<MyComp147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
