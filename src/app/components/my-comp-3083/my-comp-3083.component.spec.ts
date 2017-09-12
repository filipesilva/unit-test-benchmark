import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3083Component } from './my-comp-3083.component';

describe('MyComp3083Component', () => {
  let component: MyComp3083Component;
  let fixture: ComponentFixture<MyComp3083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
