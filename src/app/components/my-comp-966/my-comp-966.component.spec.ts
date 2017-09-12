import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp966Component } from './my-comp-966.component';

describe('MyComp966Component', () => {
  let component: MyComp966Component;
  let fixture: ComponentFixture<MyComp966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
