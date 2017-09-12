import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp587Component } from './my-comp-587.component';

describe('MyComp587Component', () => {
  let component: MyComp587Component;
  let fixture: ComponentFixture<MyComp587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
