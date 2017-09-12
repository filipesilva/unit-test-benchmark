import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7965Component } from './my-comp-7965.component';

describe('MyComp7965Component', () => {
  let component: MyComp7965Component;
  let fixture: ComponentFixture<MyComp7965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
