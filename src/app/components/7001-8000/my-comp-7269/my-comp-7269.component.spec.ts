import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7269Component } from './my-comp-7269.component';

describe('MyComp7269Component', () => {
  let component: MyComp7269Component;
  let fixture: ComponentFixture<MyComp7269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
