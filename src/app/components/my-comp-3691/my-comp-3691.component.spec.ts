import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3691Component } from './my-comp-3691.component';

describe('MyComp3691Component', () => {
  let component: MyComp3691Component;
  let fixture: ComponentFixture<MyComp3691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
