import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1243Component } from './my-comp-1243.component';

describe('MyComp1243Component', () => {
  let component: MyComp1243Component;
  let fixture: ComponentFixture<MyComp1243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
