import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3390Component } from './my-comp-3390.component';

describe('MyComp3390Component', () => {
  let component: MyComp3390Component;
  let fixture: ComponentFixture<MyComp3390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
