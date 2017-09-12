import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5149Component } from './my-comp-5149.component';

describe('MyComp5149Component', () => {
  let component: MyComp5149Component;
  let fixture: ComponentFixture<MyComp5149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
