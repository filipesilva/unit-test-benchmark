import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1895Component } from './my-comp-1895.component';

describe('MyComp1895Component', () => {
  let component: MyComp1895Component;
  let fixture: ComponentFixture<MyComp1895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
