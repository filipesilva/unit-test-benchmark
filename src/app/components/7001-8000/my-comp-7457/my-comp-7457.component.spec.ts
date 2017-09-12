import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7457Component } from './my-comp-7457.component';

describe('MyComp7457Component', () => {
  let component: MyComp7457Component;
  let fixture: ComponentFixture<MyComp7457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
