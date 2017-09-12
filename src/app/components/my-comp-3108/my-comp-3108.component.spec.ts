import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3108Component } from './my-comp-3108.component';

describe('MyComp3108Component', () => {
  let component: MyComp3108Component;
  let fixture: ComponentFixture<MyComp3108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
