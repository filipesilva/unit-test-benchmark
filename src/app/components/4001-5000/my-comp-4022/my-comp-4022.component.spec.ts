import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4022Component } from './my-comp-4022.component';

describe('MyComp4022Component', () => {
  let component: MyComp4022Component;
  let fixture: ComponentFixture<MyComp4022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
