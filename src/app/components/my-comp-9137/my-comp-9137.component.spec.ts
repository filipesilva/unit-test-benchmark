import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9137Component } from './my-comp-9137.component';

describe('MyComp9137Component', () => {
  let component: MyComp9137Component;
  let fixture: ComponentFixture<MyComp9137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
