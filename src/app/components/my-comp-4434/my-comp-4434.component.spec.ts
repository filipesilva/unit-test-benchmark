import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4434Component } from './my-comp-4434.component';

describe('MyComp4434Component', () => {
  let component: MyComp4434Component;
  let fixture: ComponentFixture<MyComp4434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
