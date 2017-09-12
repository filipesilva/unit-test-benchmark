import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7652Component } from './my-comp-7652.component';

describe('MyComp7652Component', () => {
  let component: MyComp7652Component;
  let fixture: ComponentFixture<MyComp7652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
