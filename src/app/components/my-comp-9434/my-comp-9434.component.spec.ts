import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9434Component } from './my-comp-9434.component';

describe('MyComp9434Component', () => {
  let component: MyComp9434Component;
  let fixture: ComponentFixture<MyComp9434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
