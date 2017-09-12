import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4084Component } from './my-comp-4084.component';

describe('MyComp4084Component', () => {
  let component: MyComp4084Component;
  let fixture: ComponentFixture<MyComp4084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
