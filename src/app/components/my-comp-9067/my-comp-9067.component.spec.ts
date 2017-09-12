import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9067Component } from './my-comp-9067.component';

describe('MyComp9067Component', () => {
  let component: MyComp9067Component;
  let fixture: ComponentFixture<MyComp9067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
