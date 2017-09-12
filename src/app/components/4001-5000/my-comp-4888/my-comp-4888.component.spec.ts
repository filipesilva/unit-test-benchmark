import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4888Component } from './my-comp-4888.component';

describe('MyComp4888Component', () => {
  let component: MyComp4888Component;
  let fixture: ComponentFixture<MyComp4888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
