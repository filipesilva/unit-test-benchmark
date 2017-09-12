import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8184Component } from './my-comp-8184.component';

describe('MyComp8184Component', () => {
  let component: MyComp8184Component;
  let fixture: ComponentFixture<MyComp8184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
