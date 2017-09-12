import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9978Component } from './my-comp-9978.component';

describe('MyComp9978Component', () => {
  let component: MyComp9978Component;
  let fixture: ComponentFixture<MyComp9978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
