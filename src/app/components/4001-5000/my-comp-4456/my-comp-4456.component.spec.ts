import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4456Component } from './my-comp-4456.component';

describe('MyComp4456Component', () => {
  let component: MyComp4456Component;
  let fixture: ComponentFixture<MyComp4456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
