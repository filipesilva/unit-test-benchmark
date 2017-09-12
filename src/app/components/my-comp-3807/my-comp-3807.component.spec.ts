import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3807Component } from './my-comp-3807.component';

describe('MyComp3807Component', () => {
  let component: MyComp3807Component;
  let fixture: ComponentFixture<MyComp3807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
