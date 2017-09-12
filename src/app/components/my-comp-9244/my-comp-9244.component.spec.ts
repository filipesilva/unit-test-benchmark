import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9244Component } from './my-comp-9244.component';

describe('MyComp9244Component', () => {
  let component: MyComp9244Component;
  let fixture: ComponentFixture<MyComp9244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
