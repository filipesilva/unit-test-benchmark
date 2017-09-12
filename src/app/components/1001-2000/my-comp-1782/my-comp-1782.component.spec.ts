import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1782Component } from './my-comp-1782.component';

describe('MyComp1782Component', () => {
  let component: MyComp1782Component;
  let fixture: ComponentFixture<MyComp1782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
