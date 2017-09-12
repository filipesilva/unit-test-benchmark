import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4733Component } from './my-comp-4733.component';

describe('MyComp4733Component', () => {
  let component: MyComp4733Component;
  let fixture: ComponentFixture<MyComp4733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
