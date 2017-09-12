import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3090Component } from './my-comp-3090.component';

describe('MyComp3090Component', () => {
  let component: MyComp3090Component;
  let fixture: ComponentFixture<MyComp3090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
