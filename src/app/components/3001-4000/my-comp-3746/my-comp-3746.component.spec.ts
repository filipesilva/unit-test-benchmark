import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3746Component } from './my-comp-3746.component';

describe('MyComp3746Component', () => {
  let component: MyComp3746Component;
  let fixture: ComponentFixture<MyComp3746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
