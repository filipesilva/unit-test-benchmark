import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp456Component } from './my-comp-456.component';

describe('MyComp456Component', () => {
  let component: MyComp456Component;
  let fixture: ComponentFixture<MyComp456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
