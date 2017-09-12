import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3281Component } from './my-comp-3281.component';

describe('MyComp3281Component', () => {
  let component: MyComp3281Component;
  let fixture: ComponentFixture<MyComp3281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
