import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9987Component } from './my-comp-9987.component';

describe('MyComp9987Component', () => {
  let component: MyComp9987Component;
  let fixture: ComponentFixture<MyComp9987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
