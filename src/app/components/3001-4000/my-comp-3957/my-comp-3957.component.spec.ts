import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3957Component } from './my-comp-3957.component';

describe('MyComp3957Component', () => {
  let component: MyComp3957Component;
  let fixture: ComponentFixture<MyComp3957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
