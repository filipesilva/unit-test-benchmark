import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp367Component } from './my-comp-367.component';

describe('MyComp367Component', () => {
  let component: MyComp367Component;
  let fixture: ComponentFixture<MyComp367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
