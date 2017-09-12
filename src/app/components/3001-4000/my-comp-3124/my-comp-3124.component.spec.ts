import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3124Component } from './my-comp-3124.component';

describe('MyComp3124Component', () => {
  let component: MyComp3124Component;
  let fixture: ComponentFixture<MyComp3124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
