import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8521Component } from './my-comp-8521.component';

describe('MyComp8521Component', () => {
  let component: MyComp8521Component;
  let fixture: ComponentFixture<MyComp8521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
