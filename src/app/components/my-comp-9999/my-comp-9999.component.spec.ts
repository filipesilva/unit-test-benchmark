import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9999Component } from './my-comp-9999.component';

describe('MyComp9999Component', () => {
  let component: MyComp9999Component;
  let fixture: ComponentFixture<MyComp9999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
