import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3036Component } from './my-comp-3036.component';

describe('MyComp3036Component', () => {
  let component: MyComp3036Component;
  let fixture: ComponentFixture<MyComp3036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
