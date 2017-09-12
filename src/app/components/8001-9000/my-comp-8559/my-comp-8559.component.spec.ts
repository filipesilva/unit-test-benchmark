import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8559Component } from './my-comp-8559.component';

describe('MyComp8559Component', () => {
  let component: MyComp8559Component;
  let fixture: ComponentFixture<MyComp8559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
