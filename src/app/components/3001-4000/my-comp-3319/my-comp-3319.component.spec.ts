import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3319Component } from './my-comp-3319.component';

describe('MyComp3319Component', () => {
  let component: MyComp3319Component;
  let fixture: ComponentFixture<MyComp3319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
