import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3179Component } from './my-comp-3179.component';

describe('MyComp3179Component', () => {
  let component: MyComp3179Component;
  let fixture: ComponentFixture<MyComp3179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
