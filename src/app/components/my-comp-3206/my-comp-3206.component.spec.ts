import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3206Component } from './my-comp-3206.component';

describe('MyComp3206Component', () => {
  let component: MyComp3206Component;
  let fixture: ComponentFixture<MyComp3206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
