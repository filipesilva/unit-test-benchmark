import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3033Component } from './my-comp-3033.component';

describe('MyComp3033Component', () => {
  let component: MyComp3033Component;
  let fixture: ComponentFixture<MyComp3033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
