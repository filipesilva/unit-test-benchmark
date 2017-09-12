import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3909Component } from './my-comp-3909.component';

describe('MyComp3909Component', () => {
  let component: MyComp3909Component;
  let fixture: ComponentFixture<MyComp3909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
