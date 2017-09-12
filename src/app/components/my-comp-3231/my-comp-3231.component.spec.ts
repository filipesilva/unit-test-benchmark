import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3231Component } from './my-comp-3231.component';

describe('MyComp3231Component', () => {
  let component: MyComp3231Component;
  let fixture: ComponentFixture<MyComp3231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
