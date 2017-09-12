import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8632Component } from './my-comp-8632.component';

describe('MyComp8632Component', () => {
  let component: MyComp8632Component;
  let fixture: ComponentFixture<MyComp8632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
