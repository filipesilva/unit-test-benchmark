import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7046Component } from './my-comp-7046.component';

describe('MyComp7046Component', () => {
  let component: MyComp7046Component;
  let fixture: ComponentFixture<MyComp7046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
