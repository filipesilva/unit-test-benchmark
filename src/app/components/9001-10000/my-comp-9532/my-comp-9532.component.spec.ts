import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9532Component } from './my-comp-9532.component';

describe('MyComp9532Component', () => {
  let component: MyComp9532Component;
  let fixture: ComponentFixture<MyComp9532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
