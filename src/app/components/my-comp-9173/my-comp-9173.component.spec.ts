import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9173Component } from './my-comp-9173.component';

describe('MyComp9173Component', () => {
  let component: MyComp9173Component;
  let fixture: ComponentFixture<MyComp9173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
