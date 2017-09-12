import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9910Component } from './my-comp-9910.component';

describe('MyComp9910Component', () => {
  let component: MyComp9910Component;
  let fixture: ComponentFixture<MyComp9910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
