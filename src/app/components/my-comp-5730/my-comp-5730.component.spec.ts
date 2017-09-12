import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5730Component } from './my-comp-5730.component';

describe('MyComp5730Component', () => {
  let component: MyComp5730Component;
  let fixture: ComponentFixture<MyComp5730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
