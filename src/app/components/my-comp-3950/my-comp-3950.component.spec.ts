import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3950Component } from './my-comp-3950.component';

describe('MyComp3950Component', () => {
  let component: MyComp3950Component;
  let fixture: ComponentFixture<MyComp3950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
