import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3137Component } from './my-comp-3137.component';

describe('MyComp3137Component', () => {
  let component: MyComp3137Component;
  let fixture: ComponentFixture<MyComp3137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
