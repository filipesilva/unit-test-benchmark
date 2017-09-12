import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7572Component } from './my-comp-7572.component';

describe('MyComp7572Component', () => {
  let component: MyComp7572Component;
  let fixture: ComponentFixture<MyComp7572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
