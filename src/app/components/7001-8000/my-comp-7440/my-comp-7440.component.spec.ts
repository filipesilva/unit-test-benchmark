import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7440Component } from './my-comp-7440.component';

describe('MyComp7440Component', () => {
  let component: MyComp7440Component;
  let fixture: ComponentFixture<MyComp7440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
