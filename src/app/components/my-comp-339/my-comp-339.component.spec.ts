import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp339Component } from './my-comp-339.component';

describe('MyComp339Component', () => {
  let component: MyComp339Component;
  let fixture: ComponentFixture<MyComp339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
