import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6022Component } from './my-comp-6022.component';

describe('MyComp6022Component', () => {
  let component: MyComp6022Component;
  let fixture: ComponentFixture<MyComp6022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
