import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp538Component } from './my-comp-538.component';

describe('MyComp538Component', () => {
  let component: MyComp538Component;
  let fixture: ComponentFixture<MyComp538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
