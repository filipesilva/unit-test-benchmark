import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9594Component } from './my-comp-9594.component';

describe('MyComp9594Component', () => {
  let component: MyComp9594Component;
  let fixture: ComponentFixture<MyComp9594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
