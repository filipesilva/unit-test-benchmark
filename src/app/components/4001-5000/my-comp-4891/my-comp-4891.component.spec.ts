import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4891Component } from './my-comp-4891.component';

describe('MyComp4891Component', () => {
  let component: MyComp4891Component;
  let fixture: ComponentFixture<MyComp4891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
