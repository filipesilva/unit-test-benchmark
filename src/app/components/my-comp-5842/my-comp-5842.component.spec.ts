import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5842Component } from './my-comp-5842.component';

describe('MyComp5842Component', () => {
  let component: MyComp5842Component;
  let fixture: ComponentFixture<MyComp5842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
