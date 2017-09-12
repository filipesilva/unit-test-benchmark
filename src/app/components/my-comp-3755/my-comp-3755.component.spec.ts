import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3755Component } from './my-comp-3755.component';

describe('MyComp3755Component', () => {
  let component: MyComp3755Component;
  let fixture: ComponentFixture<MyComp3755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
