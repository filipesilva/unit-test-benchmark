import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9008Component } from './my-comp-9008.component';

describe('MyComp9008Component', () => {
  let component: MyComp9008Component;
  let fixture: ComponentFixture<MyComp9008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
