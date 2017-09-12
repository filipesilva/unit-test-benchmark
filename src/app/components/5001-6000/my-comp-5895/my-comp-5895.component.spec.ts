import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5895Component } from './my-comp-5895.component';

describe('MyComp5895Component', () => {
  let component: MyComp5895Component;
  let fixture: ComponentFixture<MyComp5895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
