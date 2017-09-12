import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9895Component } from './my-comp-9895.component';

describe('MyComp9895Component', () => {
  let component: MyComp9895Component;
  let fixture: ComponentFixture<MyComp9895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
