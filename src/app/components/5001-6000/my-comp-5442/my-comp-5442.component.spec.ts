import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5442Component } from './my-comp-5442.component';

describe('MyComp5442Component', () => {
  let component: MyComp5442Component;
  let fixture: ComponentFixture<MyComp5442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
