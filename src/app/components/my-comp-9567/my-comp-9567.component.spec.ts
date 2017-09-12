import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9567Component } from './my-comp-9567.component';

describe('MyComp9567Component', () => {
  let component: MyComp9567Component;
  let fixture: ComponentFixture<MyComp9567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
