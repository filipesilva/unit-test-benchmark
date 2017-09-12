import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4446Component } from './my-comp-4446.component';

describe('MyComp4446Component', () => {
  let component: MyComp4446Component;
  let fixture: ComponentFixture<MyComp4446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
