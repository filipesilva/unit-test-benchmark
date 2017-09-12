import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9609Component } from './my-comp-9609.component';

describe('MyComp9609Component', () => {
  let component: MyComp9609Component;
  let fixture: ComponentFixture<MyComp9609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
