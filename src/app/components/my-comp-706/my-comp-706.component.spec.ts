import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp706Component } from './my-comp-706.component';

describe('MyComp706Component', () => {
  let component: MyComp706Component;
  let fixture: ComponentFixture<MyComp706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
