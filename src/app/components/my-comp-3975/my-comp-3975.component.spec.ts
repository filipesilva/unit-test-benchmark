import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3975Component } from './my-comp-3975.component';

describe('MyComp3975Component', () => {
  let component: MyComp3975Component;
  let fixture: ComponentFixture<MyComp3975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
