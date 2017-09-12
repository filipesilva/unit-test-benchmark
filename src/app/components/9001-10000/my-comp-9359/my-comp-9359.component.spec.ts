import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9359Component } from './my-comp-9359.component';

describe('MyComp9359Component', () => {
  let component: MyComp9359Component;
  let fixture: ComponentFixture<MyComp9359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
