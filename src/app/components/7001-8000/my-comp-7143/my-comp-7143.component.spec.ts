import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7143Component } from './my-comp-7143.component';

describe('MyComp7143Component', () => {
  let component: MyComp7143Component;
  let fixture: ComponentFixture<MyComp7143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
