import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9430Component } from './my-comp-9430.component';

describe('MyComp9430Component', () => {
  let component: MyComp9430Component;
  let fixture: ComponentFixture<MyComp9430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
