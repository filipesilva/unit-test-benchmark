import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7538Component } from './my-comp-7538.component';

describe('MyComp7538Component', () => {
  let component: MyComp7538Component;
  let fixture: ComponentFixture<MyComp7538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
