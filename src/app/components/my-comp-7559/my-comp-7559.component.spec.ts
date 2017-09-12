import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7559Component } from './my-comp-7559.component';

describe('MyComp7559Component', () => {
  let component: MyComp7559Component;
  let fixture: ComponentFixture<MyComp7559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
