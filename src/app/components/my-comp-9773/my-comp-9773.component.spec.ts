import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9773Component } from './my-comp-9773.component';

describe('MyComp9773Component', () => {
  let component: MyComp9773Component;
  let fixture: ComponentFixture<MyComp9773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
