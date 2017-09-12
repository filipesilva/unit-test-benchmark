import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7903Component } from './my-comp-7903.component';

describe('MyComp7903Component', () => {
  let component: MyComp7903Component;
  let fixture: ComponentFixture<MyComp7903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
