import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3152Component } from './my-comp-3152.component';

describe('MyComp3152Component', () => {
  let component: MyComp3152Component;
  let fixture: ComponentFixture<MyComp3152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
