import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9384Component } from './my-comp-9384.component';

describe('MyComp9384Component', () => {
  let component: MyComp9384Component;
  let fixture: ComponentFixture<MyComp9384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
