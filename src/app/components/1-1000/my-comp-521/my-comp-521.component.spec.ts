import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp521Component } from './my-comp-521.component';

describe('MyComp521Component', () => {
  let component: MyComp521Component;
  let fixture: ComponentFixture<MyComp521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
