import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4987Component } from './my-comp-4987.component';

describe('MyComp4987Component', () => {
  let component: MyComp4987Component;
  let fixture: ComponentFixture<MyComp4987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
