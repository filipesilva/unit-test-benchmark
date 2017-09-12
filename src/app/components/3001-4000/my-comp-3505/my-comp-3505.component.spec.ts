import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3505Component } from './my-comp-3505.component';

describe('MyComp3505Component', () => {
  let component: MyComp3505Component;
  let fixture: ComponentFixture<MyComp3505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
