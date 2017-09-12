import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9297Component } from './my-comp-9297.component';

describe('MyComp9297Component', () => {
  let component: MyComp9297Component;
  let fixture: ComponentFixture<MyComp9297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
