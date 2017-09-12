import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7397Component } from './my-comp-7397.component';

describe('MyComp7397Component', () => {
  let component: MyComp7397Component;
  let fixture: ComponentFixture<MyComp7397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
