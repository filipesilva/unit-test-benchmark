import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp895Component } from './my-comp-895.component';

describe('MyComp895Component', () => {
  let component: MyComp895Component;
  let fixture: ComponentFixture<MyComp895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
