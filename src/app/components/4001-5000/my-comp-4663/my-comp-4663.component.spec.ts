import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4663Component } from './my-comp-4663.component';

describe('MyComp4663Component', () => {
  let component: MyComp4663Component;
  let fixture: ComponentFixture<MyComp4663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
