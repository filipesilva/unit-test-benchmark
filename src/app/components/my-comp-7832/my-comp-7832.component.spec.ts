import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7832Component } from './my-comp-7832.component';

describe('MyComp7832Component', () => {
  let component: MyComp7832Component;
  let fixture: ComponentFixture<MyComp7832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
