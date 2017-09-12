import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3209Component } from './my-comp-3209.component';

describe('MyComp3209Component', () => {
  let component: MyComp3209Component;
  let fixture: ComponentFixture<MyComp3209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
