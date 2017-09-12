import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5022Component } from './my-comp-5022.component';

describe('MyComp5022Component', () => {
  let component: MyComp5022Component;
  let fixture: ComponentFixture<MyComp5022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
