import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9273Component } from './my-comp-9273.component';

describe('MyComp9273Component', () => {
  let component: MyComp9273Component;
  let fixture: ComponentFixture<MyComp9273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
