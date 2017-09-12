import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9698Component } from './my-comp-9698.component';

describe('MyComp9698Component', () => {
  let component: MyComp9698Component;
  let fixture: ComponentFixture<MyComp9698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
