import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9220Component } from './my-comp-9220.component';

describe('MyComp9220Component', () => {
  let component: MyComp9220Component;
  let fixture: ComponentFixture<MyComp9220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
