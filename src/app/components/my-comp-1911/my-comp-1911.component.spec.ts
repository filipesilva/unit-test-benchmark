import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1911Component } from './my-comp-1911.component';

describe('MyComp1911Component', () => {
  let component: MyComp1911Component;
  let fixture: ComponentFixture<MyComp1911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
