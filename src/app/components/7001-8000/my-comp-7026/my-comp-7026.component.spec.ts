import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7026Component } from './my-comp-7026.component';

describe('MyComp7026Component', () => {
  let component: MyComp7026Component;
  let fixture: ComponentFixture<MyComp7026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
