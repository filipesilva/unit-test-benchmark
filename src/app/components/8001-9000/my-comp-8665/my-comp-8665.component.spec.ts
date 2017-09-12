import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8665Component } from './my-comp-8665.component';

describe('MyComp8665Component', () => {
  let component: MyComp8665Component;
  let fixture: ComponentFixture<MyComp8665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
