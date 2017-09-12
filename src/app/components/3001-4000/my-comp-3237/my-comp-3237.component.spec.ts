import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3237Component } from './my-comp-3237.component';

describe('MyComp3237Component', () => {
  let component: MyComp3237Component;
  let fixture: ComponentFixture<MyComp3237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
