import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3897Component } from './my-comp-3897.component';

describe('MyComp3897Component', () => {
  let component: MyComp3897Component;
  let fixture: ComponentFixture<MyComp3897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
