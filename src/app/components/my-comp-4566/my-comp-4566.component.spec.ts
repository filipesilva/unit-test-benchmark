import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4566Component } from './my-comp-4566.component';

describe('MyComp4566Component', () => {
  let component: MyComp4566Component;
  let fixture: ComponentFixture<MyComp4566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
