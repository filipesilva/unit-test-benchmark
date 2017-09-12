import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3582Component } from './my-comp-3582.component';

describe('MyComp3582Component', () => {
  let component: MyComp3582Component;
  let fixture: ComponentFixture<MyComp3582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
