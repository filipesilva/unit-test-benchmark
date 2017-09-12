import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6978Component } from './my-comp-6978.component';

describe('MyComp6978Component', () => {
  let component: MyComp6978Component;
  let fixture: ComponentFixture<MyComp6978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
