import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6279Component } from './my-comp-6279.component';

describe('MyComp6279Component', () => {
  let component: MyComp6279Component;
  let fixture: ComponentFixture<MyComp6279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
