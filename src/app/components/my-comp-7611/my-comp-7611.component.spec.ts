import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7611Component } from './my-comp-7611.component';

describe('MyComp7611Component', () => {
  let component: MyComp7611Component;
  let fixture: ComponentFixture<MyComp7611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
