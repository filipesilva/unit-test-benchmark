import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9181Component } from './my-comp-9181.component';

describe('MyComp9181Component', () => {
  let component: MyComp9181Component;
  let fixture: ComponentFixture<MyComp9181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
