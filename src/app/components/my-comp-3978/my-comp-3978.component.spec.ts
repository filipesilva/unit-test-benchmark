import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3978Component } from './my-comp-3978.component';

describe('MyComp3978Component', () => {
  let component: MyComp3978Component;
  let fixture: ComponentFixture<MyComp3978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
