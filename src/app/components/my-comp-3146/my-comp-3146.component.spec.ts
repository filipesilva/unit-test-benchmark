import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3146Component } from './my-comp-3146.component';

describe('MyComp3146Component', () => {
  let component: MyComp3146Component;
  let fixture: ComponentFixture<MyComp3146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
