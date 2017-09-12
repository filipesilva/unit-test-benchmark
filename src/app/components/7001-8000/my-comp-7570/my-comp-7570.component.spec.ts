import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7570Component } from './my-comp-7570.component';

describe('MyComp7570Component', () => {
  let component: MyComp7570Component;
  let fixture: ComponentFixture<MyComp7570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
