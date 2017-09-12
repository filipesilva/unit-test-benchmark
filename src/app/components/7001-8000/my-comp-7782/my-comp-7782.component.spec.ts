import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7782Component } from './my-comp-7782.component';

describe('MyComp7782Component', () => {
  let component: MyComp7782Component;
  let fixture: ComponentFixture<MyComp7782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
