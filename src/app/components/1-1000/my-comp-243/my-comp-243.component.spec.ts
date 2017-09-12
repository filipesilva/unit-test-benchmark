import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp243Component } from './my-comp-243.component';

describe('MyComp243Component', () => {
  let component: MyComp243Component;
  let fixture: ComponentFixture<MyComp243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
