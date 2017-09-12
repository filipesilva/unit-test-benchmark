import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3795Component } from './my-comp-3795.component';

describe('MyComp3795Component', () => {
  let component: MyComp3795Component;
  let fixture: ComponentFixture<MyComp3795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
