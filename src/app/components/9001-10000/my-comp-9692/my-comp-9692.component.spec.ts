import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9692Component } from './my-comp-9692.component';

describe('MyComp9692Component', () => {
  let component: MyComp9692Component;
  let fixture: ComponentFixture<MyComp9692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
