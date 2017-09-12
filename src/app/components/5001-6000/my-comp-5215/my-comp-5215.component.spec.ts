import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5215Component } from './my-comp-5215.component';

describe('MyComp5215Component', () => {
  let component: MyComp5215Component;
  let fixture: ComponentFixture<MyComp5215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
