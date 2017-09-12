import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4623Component } from './my-comp-4623.component';

describe('MyComp4623Component', () => {
  let component: MyComp4623Component;
  let fixture: ComponentFixture<MyComp4623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
