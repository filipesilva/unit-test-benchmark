import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5537Component } from './my-comp-5537.component';

describe('MyComp5537Component', () => {
  let component: MyComp5537Component;
  let fixture: ComponentFixture<MyComp5537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
