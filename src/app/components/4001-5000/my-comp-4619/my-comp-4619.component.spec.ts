import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4619Component } from './my-comp-4619.component';

describe('MyComp4619Component', () => {
  let component: MyComp4619Component;
  let fixture: ComponentFixture<MyComp4619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
