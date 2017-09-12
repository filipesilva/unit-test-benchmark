import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3838Component } from './my-comp-3838.component';

describe('MyComp3838Component', () => {
  let component: MyComp3838Component;
  let fixture: ComponentFixture<MyComp3838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
