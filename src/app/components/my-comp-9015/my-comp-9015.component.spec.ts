import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9015Component } from './my-comp-9015.component';

describe('MyComp9015Component', () => {
  let component: MyComp9015Component;
  let fixture: ComponentFixture<MyComp9015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
