import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7083Component } from './my-comp-7083.component';

describe('MyComp7083Component', () => {
  let component: MyComp7083Component;
  let fixture: ComponentFixture<MyComp7083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
