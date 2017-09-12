import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8714Component } from './my-comp-8714.component';

describe('MyComp8714Component', () => {
  let component: MyComp8714Component;
  let fixture: ComponentFixture<MyComp8714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
