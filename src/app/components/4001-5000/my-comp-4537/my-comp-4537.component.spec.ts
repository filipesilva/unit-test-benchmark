import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4537Component } from './my-comp-4537.component';

describe('MyComp4537Component', () => {
  let component: MyComp4537Component;
  let fixture: ComponentFixture<MyComp4537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
