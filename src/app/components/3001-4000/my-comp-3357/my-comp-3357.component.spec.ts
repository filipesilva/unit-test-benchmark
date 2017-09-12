import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3357Component } from './my-comp-3357.component';

describe('MyComp3357Component', () => {
  let component: MyComp3357Component;
  let fixture: ComponentFixture<MyComp3357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
