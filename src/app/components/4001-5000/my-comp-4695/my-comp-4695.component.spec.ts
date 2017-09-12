import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4695Component } from './my-comp-4695.component';

describe('MyComp4695Component', () => {
  let component: MyComp4695Component;
  let fixture: ComponentFixture<MyComp4695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
