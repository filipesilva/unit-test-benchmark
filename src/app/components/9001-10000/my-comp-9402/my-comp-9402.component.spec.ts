import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9402Component } from './my-comp-9402.component';

describe('MyComp9402Component', () => {
  let component: MyComp9402Component;
  let fixture: ComponentFixture<MyComp9402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
