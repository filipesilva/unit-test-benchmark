import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4969Component } from './my-comp-4969.component';

describe('MyComp4969Component', () => {
  let component: MyComp4969Component;
  let fixture: ComponentFixture<MyComp4969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
