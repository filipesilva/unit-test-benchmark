import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6137Component } from './my-comp-6137.component';

describe('MyComp6137Component', () => {
  let component: MyComp6137Component;
  let fixture: ComponentFixture<MyComp6137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
