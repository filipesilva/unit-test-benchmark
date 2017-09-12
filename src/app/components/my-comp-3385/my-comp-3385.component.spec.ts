import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3385Component } from './my-comp-3385.component';

describe('MyComp3385Component', () => {
  let component: MyComp3385Component;
  let fixture: ComponentFixture<MyComp3385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
