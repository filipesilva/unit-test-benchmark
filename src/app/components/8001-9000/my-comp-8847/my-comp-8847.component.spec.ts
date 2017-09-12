import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8847Component } from './my-comp-8847.component';

describe('MyComp8847Component', () => {
  let component: MyComp8847Component;
  let fixture: ComponentFixture<MyComp8847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
