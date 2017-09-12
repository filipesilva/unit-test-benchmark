import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7243Component } from './my-comp-7243.component';

describe('MyComp7243Component', () => {
  let component: MyComp7243Component;
  let fixture: ComponentFixture<MyComp7243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
