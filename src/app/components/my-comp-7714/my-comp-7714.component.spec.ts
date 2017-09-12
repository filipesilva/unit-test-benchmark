import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7714Component } from './my-comp-7714.component';

describe('MyComp7714Component', () => {
  let component: MyComp7714Component;
  let fixture: ComponentFixture<MyComp7714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
