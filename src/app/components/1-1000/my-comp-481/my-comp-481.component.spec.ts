import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp481Component } from './my-comp-481.component';

describe('MyComp481Component', () => {
  let component: MyComp481Component;
  let fixture: ComponentFixture<MyComp481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
