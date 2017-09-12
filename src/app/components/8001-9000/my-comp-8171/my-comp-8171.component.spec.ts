import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8171Component } from './my-comp-8171.component';

describe('MyComp8171Component', () => {
  let component: MyComp8171Component;
  let fixture: ComponentFixture<MyComp8171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
