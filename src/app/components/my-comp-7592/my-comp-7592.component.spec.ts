import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7592Component } from './my-comp-7592.component';

describe('MyComp7592Component', () => {
  let component: MyComp7592Component;
  let fixture: ComponentFixture<MyComp7592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
