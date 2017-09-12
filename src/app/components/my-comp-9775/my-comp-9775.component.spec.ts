import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9775Component } from './my-comp-9775.component';

describe('MyComp9775Component', () => {
  let component: MyComp9775Component;
  let fixture: ComponentFixture<MyComp9775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
