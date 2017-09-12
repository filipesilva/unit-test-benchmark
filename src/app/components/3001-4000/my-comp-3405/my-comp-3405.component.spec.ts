import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3405Component } from './my-comp-3405.component';

describe('MyComp3405Component', () => {
  let component: MyComp3405Component;
  let fixture: ComponentFixture<MyComp3405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
