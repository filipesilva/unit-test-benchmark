import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3895Component } from './my-comp-3895.component';

describe('MyComp3895Component', () => {
  let component: MyComp3895Component;
  let fixture: ComponentFixture<MyComp3895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
