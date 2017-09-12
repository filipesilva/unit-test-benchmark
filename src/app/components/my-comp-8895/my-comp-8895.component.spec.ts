import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8895Component } from './my-comp-8895.component';

describe('MyComp8895Component', () => {
  let component: MyComp8895Component;
  let fixture: ComponentFixture<MyComp8895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
