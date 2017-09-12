import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9001Component } from './my-comp-9001.component';

describe('MyComp9001Component', () => {
  let component: MyComp9001Component;
  let fixture: ComponentFixture<MyComp9001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
