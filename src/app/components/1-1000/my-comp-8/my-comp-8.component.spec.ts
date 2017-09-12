import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8Component } from './my-comp-8.component';

describe('MyComp8Component', () => {
  let component: MyComp8Component;
  let fixture: ComponentFixture<MyComp8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
