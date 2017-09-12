import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4152Component } from './my-comp-4152.component';

describe('MyComp4152Component', () => {
  let component: MyComp4152Component;
  let fixture: ComponentFixture<MyComp4152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
