import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5276Component } from './my-comp-5276.component';

describe('MyComp5276Component', () => {
  let component: MyComp5276Component;
  let fixture: ComponentFixture<MyComp5276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
