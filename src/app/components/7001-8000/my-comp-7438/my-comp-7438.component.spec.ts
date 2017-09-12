import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7438Component } from './my-comp-7438.component';

describe('MyComp7438Component', () => {
  let component: MyComp7438Component;
  let fixture: ComponentFixture<MyComp7438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
