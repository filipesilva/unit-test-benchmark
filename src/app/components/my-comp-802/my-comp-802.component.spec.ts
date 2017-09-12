import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp802Component } from './my-comp-802.component';

describe('MyComp802Component', () => {
  let component: MyComp802Component;
  let fixture: ComponentFixture<MyComp802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
