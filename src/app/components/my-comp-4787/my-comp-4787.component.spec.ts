import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4787Component } from './my-comp-4787.component';

describe('MyComp4787Component', () => {
  let component: MyComp4787Component;
  let fixture: ComponentFixture<MyComp4787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
