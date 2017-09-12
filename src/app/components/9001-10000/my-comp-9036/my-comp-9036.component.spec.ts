import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9036Component } from './my-comp-9036.component';

describe('MyComp9036Component', () => {
  let component: MyComp9036Component;
  let fixture: ComponentFixture<MyComp9036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
