import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7676Component } from './my-comp-7676.component';

describe('MyComp7676Component', () => {
  let component: MyComp7676Component;
  let fixture: ComponentFixture<MyComp7676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
