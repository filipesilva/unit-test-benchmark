import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5559Component } from './my-comp-5559.component';

describe('MyComp5559Component', () => {
  let component: MyComp5559Component;
  let fixture: ComponentFixture<MyComp5559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
