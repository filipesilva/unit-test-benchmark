import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp964Component } from './my-comp-964.component';

describe('MyComp964Component', () => {
  let component: MyComp964Component;
  let fixture: ComponentFixture<MyComp964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
