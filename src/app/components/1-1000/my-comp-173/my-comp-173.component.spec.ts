import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp173Component } from './my-comp-173.component';

describe('MyComp173Component', () => {
  let component: MyComp173Component;
  let fixture: ComponentFixture<MyComp173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
