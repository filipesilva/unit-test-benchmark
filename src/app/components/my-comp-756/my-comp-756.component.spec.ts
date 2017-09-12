import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp756Component } from './my-comp-756.component';

describe('MyComp756Component', () => {
  let component: MyComp756Component;
  let fixture: ComponentFixture<MyComp756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
