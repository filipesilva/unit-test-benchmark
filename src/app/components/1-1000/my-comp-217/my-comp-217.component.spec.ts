import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp217Component } from './my-comp-217.component';

describe('MyComp217Component', () => {
  let component: MyComp217Component;
  let fixture: ComponentFixture<MyComp217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
