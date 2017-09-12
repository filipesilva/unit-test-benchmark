import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5848Component } from './my-comp-5848.component';

describe('MyComp5848Component', () => {
  let component: MyComp5848Component;
  let fixture: ComponentFixture<MyComp5848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
