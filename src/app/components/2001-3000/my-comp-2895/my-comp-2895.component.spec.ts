import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2895Component } from './my-comp-2895.component';

describe('MyComp2895Component', () => {
  let component: MyComp2895Component;
  let fixture: ComponentFixture<MyComp2895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
