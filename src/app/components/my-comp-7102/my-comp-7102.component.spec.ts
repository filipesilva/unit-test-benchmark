import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7102Component } from './my-comp-7102.component';

describe('MyComp7102Component', () => {
  let component: MyComp7102Component;
  let fixture: ComponentFixture<MyComp7102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
