import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7970Component } from './my-comp-7970.component';

describe('MyComp7970Component', () => {
  let component: MyComp7970Component;
  let fixture: ComponentFixture<MyComp7970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
