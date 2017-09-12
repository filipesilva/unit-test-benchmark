import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3174Component } from './my-comp-3174.component';

describe('MyComp3174Component', () => {
  let component: MyComp3174Component;
  let fixture: ComponentFixture<MyComp3174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
