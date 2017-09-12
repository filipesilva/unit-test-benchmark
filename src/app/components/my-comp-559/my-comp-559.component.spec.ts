import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp559Component } from './my-comp-559.component';

describe('MyComp559Component', () => {
  let component: MyComp559Component;
  let fixture: ComponentFixture<MyComp559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
