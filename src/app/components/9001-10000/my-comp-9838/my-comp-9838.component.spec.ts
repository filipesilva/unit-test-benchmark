import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9838Component } from './my-comp-9838.component';

describe('MyComp9838Component', () => {
  let component: MyComp9838Component;
  let fixture: ComponentFixture<MyComp9838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
