import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9587Component } from './my-comp-9587.component';

describe('MyComp9587Component', () => {
  let component: MyComp9587Component;
  let fixture: ComponentFixture<MyComp9587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
