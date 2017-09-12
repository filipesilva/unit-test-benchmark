import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7962Component } from './my-comp-7962.component';

describe('MyComp7962Component', () => {
  let component: MyComp7962Component;
  let fixture: ComponentFixture<MyComp7962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
