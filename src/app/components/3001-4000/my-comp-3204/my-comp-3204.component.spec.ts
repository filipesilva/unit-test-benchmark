import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3204Component } from './my-comp-3204.component';

describe('MyComp3204Component', () => {
  let component: MyComp3204Component;
  let fixture: ComponentFixture<MyComp3204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
