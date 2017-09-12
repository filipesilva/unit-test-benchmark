import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1846Component } from './my-comp-1846.component';

describe('MyComp1846Component', () => {
  let component: MyComp1846Component;
  let fixture: ComponentFixture<MyComp1846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
