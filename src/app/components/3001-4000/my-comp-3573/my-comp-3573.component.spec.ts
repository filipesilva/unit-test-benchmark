import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3573Component } from './my-comp-3573.component';

describe('MyComp3573Component', () => {
  let component: MyComp3573Component;
  let fixture: ComponentFixture<MyComp3573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
