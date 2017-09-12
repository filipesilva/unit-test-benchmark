import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8953Component } from './my-comp-8953.component';

describe('MyComp8953Component', () => {
  let component: MyComp8953Component;
  let fixture: ComponentFixture<MyComp8953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
