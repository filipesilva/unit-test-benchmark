import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9569Component } from './my-comp-9569.component';

describe('MyComp9569Component', () => {
  let component: MyComp9569Component;
  let fixture: ComponentFixture<MyComp9569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
