import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8459Component } from './my-comp-8459.component';

describe('MyComp8459Component', () => {
  let component: MyComp8459Component;
  let fixture: ComponentFixture<MyComp8459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
