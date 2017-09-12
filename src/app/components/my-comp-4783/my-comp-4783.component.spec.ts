import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4783Component } from './my-comp-4783.component';

describe('MyComp4783Component', () => {
  let component: MyComp4783Component;
  let fixture: ComponentFixture<MyComp4783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
