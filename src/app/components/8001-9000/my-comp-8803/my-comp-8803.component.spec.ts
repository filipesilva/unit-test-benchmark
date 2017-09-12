import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8803Component } from './my-comp-8803.component';

describe('MyComp8803Component', () => {
  let component: MyComp8803Component;
  let fixture: ComponentFixture<MyComp8803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
