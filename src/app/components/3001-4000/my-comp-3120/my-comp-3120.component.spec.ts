import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3120Component } from './my-comp-3120.component';

describe('MyComp3120Component', () => {
  let component: MyComp3120Component;
  let fixture: ComponentFixture<MyComp3120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
