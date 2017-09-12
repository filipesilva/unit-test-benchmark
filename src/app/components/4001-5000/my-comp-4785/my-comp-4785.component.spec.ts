import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4785Component } from './my-comp-4785.component';

describe('MyComp4785Component', () => {
  let component: MyComp4785Component;
  let fixture: ComponentFixture<MyComp4785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
