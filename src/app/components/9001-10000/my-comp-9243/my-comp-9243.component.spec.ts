import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9243Component } from './my-comp-9243.component';

describe('MyComp9243Component', () => {
  let component: MyComp9243Component;
  let fixture: ComponentFixture<MyComp9243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
