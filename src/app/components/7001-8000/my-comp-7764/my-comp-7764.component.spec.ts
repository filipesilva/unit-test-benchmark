import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7764Component } from './my-comp-7764.component';

describe('MyComp7764Component', () => {
  let component: MyComp7764Component;
  let fixture: ComponentFixture<MyComp7764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
