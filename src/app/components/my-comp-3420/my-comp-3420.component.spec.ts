import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3420Component } from './my-comp-3420.component';

describe('MyComp3420Component', () => {
  let component: MyComp3420Component;
  let fixture: ComponentFixture<MyComp3420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
