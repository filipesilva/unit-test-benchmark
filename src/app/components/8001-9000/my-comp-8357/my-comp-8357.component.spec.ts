import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8357Component } from './my-comp-8357.component';

describe('MyComp8357Component', () => {
  let component: MyComp8357Component;
  let fixture: ComponentFixture<MyComp8357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
