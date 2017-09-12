import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8420Component } from './my-comp-8420.component';

describe('MyComp8420Component', () => {
  let component: MyComp8420Component;
  let fixture: ComponentFixture<MyComp8420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
