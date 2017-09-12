import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5776Component } from './my-comp-5776.component';

describe('MyComp5776Component', () => {
  let component: MyComp5776Component;
  let fixture: ComponentFixture<MyComp5776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
