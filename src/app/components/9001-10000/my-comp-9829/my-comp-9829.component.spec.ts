import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9829Component } from './my-comp-9829.component';

describe('MyComp9829Component', () => {
  let component: MyComp9829Component;
  let fixture: ComponentFixture<MyComp9829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
