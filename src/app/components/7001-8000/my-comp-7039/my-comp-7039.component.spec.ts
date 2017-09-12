import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7039Component } from './my-comp-7039.component';

describe('MyComp7039Component', () => {
  let component: MyComp7039Component;
  let fixture: ComponentFixture<MyComp7039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
