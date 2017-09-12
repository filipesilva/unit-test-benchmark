import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7476Component } from './my-comp-7476.component';

describe('MyComp7476Component', () => {
  let component: MyComp7476Component;
  let fixture: ComponentFixture<MyComp7476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
