import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4895Component } from './my-comp-4895.component';

describe('MyComp4895Component', () => {
  let component: MyComp4895Component;
  let fixture: ComponentFixture<MyComp4895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
