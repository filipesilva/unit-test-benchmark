import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp865Component } from './my-comp-865.component';

describe('MyComp865Component', () => {
  let component: MyComp865Component;
  let fixture: ComponentFixture<MyComp865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
