import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4465Component } from './my-comp-4465.component';

describe('MyComp4465Component', () => {
  let component: MyComp4465Component;
  let fixture: ComponentFixture<MyComp4465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
