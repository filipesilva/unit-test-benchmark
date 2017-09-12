import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3340Component } from './my-comp-3340.component';

describe('MyComp3340Component', () => {
  let component: MyComp3340Component;
  let fixture: ComponentFixture<MyComp3340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
