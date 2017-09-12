import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4487Component } from './my-comp-4487.component';

describe('MyComp4487Component', () => {
  let component: MyComp4487Component;
  let fixture: ComponentFixture<MyComp4487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
