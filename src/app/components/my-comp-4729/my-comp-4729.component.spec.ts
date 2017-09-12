import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4729Component } from './my-comp-4729.component';

describe('MyComp4729Component', () => {
  let component: MyComp4729Component;
  let fixture: ComponentFixture<MyComp4729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
