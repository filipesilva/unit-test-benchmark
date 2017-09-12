import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7240Component } from './my-comp-7240.component';

describe('MyComp7240Component', () => {
  let component: MyComp7240Component;
  let fixture: ComponentFixture<MyComp7240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
