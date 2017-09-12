import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4397Component } from './my-comp-4397.component';

describe('MyComp4397Component', () => {
  let component: MyComp4397Component;
  let fixture: ComponentFixture<MyComp4397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
