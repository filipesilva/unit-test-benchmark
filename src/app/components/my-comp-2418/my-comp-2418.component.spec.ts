import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2418Component } from './my-comp-2418.component';

describe('MyComp2418Component', () => {
  let component: MyComp2418Component;
  let fixture: ComponentFixture<MyComp2418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
