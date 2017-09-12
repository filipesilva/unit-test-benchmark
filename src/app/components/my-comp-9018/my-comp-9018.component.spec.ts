import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9018Component } from './my-comp-9018.component';

describe('MyComp9018Component', () => {
  let component: MyComp9018Component;
  let fixture: ComponentFixture<MyComp9018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
