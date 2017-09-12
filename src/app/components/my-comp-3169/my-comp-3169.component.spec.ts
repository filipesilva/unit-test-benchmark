import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3169Component } from './my-comp-3169.component';

describe('MyComp3169Component', () => {
  let component: MyComp3169Component;
  let fixture: ComponentFixture<MyComp3169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
