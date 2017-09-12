import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4268Component } from './my-comp-4268.component';

describe('MyComp4268Component', () => {
  let component: MyComp4268Component;
  let fixture: ComponentFixture<MyComp4268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
