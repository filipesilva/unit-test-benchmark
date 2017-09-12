import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9924Component } from './my-comp-9924.component';

describe('MyComp9924Component', () => {
  let component: MyComp9924Component;
  let fixture: ComponentFixture<MyComp9924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
