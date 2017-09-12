import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3109Component } from './my-comp-3109.component';

describe('MyComp3109Component', () => {
  let component: MyComp3109Component;
  let fixture: ComponentFixture<MyComp3109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
