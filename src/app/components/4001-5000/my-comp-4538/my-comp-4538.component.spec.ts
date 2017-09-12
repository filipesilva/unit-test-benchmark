import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4538Component } from './my-comp-4538.component';

describe('MyComp4538Component', () => {
  let component: MyComp4538Component;
  let fixture: ComponentFixture<MyComp4538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
