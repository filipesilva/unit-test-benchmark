import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3924Component } from './my-comp-3924.component';

describe('MyComp3924Component', () => {
  let component: MyComp3924Component;
  let fixture: ComponentFixture<MyComp3924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
