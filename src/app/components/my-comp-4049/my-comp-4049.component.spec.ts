import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4049Component } from './my-comp-4049.component';

describe('MyComp4049Component', () => {
  let component: MyComp4049Component;
  let fixture: ComponentFixture<MyComp4049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
