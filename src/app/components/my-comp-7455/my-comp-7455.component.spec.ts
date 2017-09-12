import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7455Component } from './my-comp-7455.component';

describe('MyComp7455Component', () => {
  let component: MyComp7455Component;
  let fixture: ComponentFixture<MyComp7455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
