import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5481Component } from './my-comp-5481.component';

describe('MyComp5481Component', () => {
  let component: MyComp5481Component;
  let fixture: ComponentFixture<MyComp5481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
