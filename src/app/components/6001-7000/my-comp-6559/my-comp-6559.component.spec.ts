import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6559Component } from './my-comp-6559.component';

describe('MyComp6559Component', () => {
  let component: MyComp6559Component;
  let fixture: ComponentFixture<MyComp6559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
