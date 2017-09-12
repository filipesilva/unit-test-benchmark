import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9175Component } from './my-comp-9175.component';

describe('MyComp9175Component', () => {
  let component: MyComp9175Component;
  let fixture: ComponentFixture<MyComp9175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
