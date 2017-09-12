import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1559Component } from './my-comp-1559.component';

describe('MyComp1559Component', () => {
  let component: MyComp1559Component;
  let fixture: ComponentFixture<MyComp1559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
