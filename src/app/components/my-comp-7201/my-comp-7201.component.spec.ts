import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7201Component } from './my-comp-7201.component';

describe('MyComp7201Component', () => {
  let component: MyComp7201Component;
  let fixture: ComponentFixture<MyComp7201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
