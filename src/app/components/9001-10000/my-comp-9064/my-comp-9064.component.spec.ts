import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9064Component } from './my-comp-9064.component';

describe('MyComp9064Component', () => {
  let component: MyComp9064Component;
  let fixture: ComponentFixture<MyComp9064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
