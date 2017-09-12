import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4179Component } from './my-comp-4179.component';

describe('MyComp4179Component', () => {
  let component: MyComp4179Component;
  let fixture: ComponentFixture<MyComp4179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
