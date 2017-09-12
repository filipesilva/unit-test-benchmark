import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7022Component } from './my-comp-7022.component';

describe('MyComp7022Component', () => {
  let component: MyComp7022Component;
  let fixture: ComponentFixture<MyComp7022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
