import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9625Component } from './my-comp-9625.component';

describe('MyComp9625Component', () => {
  let component: MyComp9625Component;
  let fixture: ComponentFixture<MyComp9625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
