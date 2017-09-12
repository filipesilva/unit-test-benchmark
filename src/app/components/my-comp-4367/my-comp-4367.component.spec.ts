import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4367Component } from './my-comp-4367.component';

describe('MyComp4367Component', () => {
  let component: MyComp4367Component;
  let fixture: ComponentFixture<MyComp4367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
