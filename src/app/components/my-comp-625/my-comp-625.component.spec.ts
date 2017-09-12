import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp625Component } from './my-comp-625.component';

describe('MyComp625Component', () => {
  let component: MyComp625Component;
  let fixture: ComponentFixture<MyComp625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
