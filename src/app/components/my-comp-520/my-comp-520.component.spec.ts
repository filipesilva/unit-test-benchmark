import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp520Component } from './my-comp-520.component';

describe('MyComp520Component', () => {
  let component: MyComp520Component;
  let fixture: ComponentFixture<MyComp520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
