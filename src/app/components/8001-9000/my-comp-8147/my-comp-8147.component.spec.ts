import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8147Component } from './my-comp-8147.component';

describe('MyComp8147Component', () => {
  let component: MyComp8147Component;
  let fixture: ComponentFixture<MyComp8147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
