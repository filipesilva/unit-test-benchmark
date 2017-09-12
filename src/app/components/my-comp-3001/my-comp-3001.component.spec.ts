import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3001Component } from './my-comp-3001.component';

describe('MyComp3001Component', () => {
  let component: MyComp3001Component;
  let fixture: ComponentFixture<MyComp3001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
