import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp347Component } from './my-comp-347.component';

describe('MyComp347Component', () => {
  let component: MyComp347Component;
  let fixture: ComponentFixture<MyComp347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
