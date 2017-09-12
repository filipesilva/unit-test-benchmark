import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7194Component } from './my-comp-7194.component';

describe('MyComp7194Component', () => {
  let component: MyComp7194Component;
  let fixture: ComponentFixture<MyComp7194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
