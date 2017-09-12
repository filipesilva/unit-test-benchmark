import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7625Component } from './my-comp-7625.component';

describe('MyComp7625Component', () => {
  let component: MyComp7625Component;
  let fixture: ComponentFixture<MyComp7625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
