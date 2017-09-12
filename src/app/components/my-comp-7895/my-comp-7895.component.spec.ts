import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7895Component } from './my-comp-7895.component';

describe('MyComp7895Component', () => {
  let component: MyComp7895Component;
  let fixture: ComponentFixture<MyComp7895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
