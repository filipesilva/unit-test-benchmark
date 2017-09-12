import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp374Component } from './my-comp-374.component';

describe('MyComp374Component', () => {
  let component: MyComp374Component;
  let fixture: ComponentFixture<MyComp374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
