import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7595Component } from './my-comp-7595.component';

describe('MyComp7595Component', () => {
  let component: MyComp7595Component;
  let fixture: ComponentFixture<MyComp7595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
