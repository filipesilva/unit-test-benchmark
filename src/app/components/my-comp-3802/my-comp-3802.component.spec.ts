import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3802Component } from './my-comp-3802.component';

describe('MyComp3802Component', () => {
  let component: MyComp3802Component;
  let fixture: ComponentFixture<MyComp3802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
