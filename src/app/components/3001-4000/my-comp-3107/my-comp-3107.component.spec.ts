import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3107Component } from './my-comp-3107.component';

describe('MyComp3107Component', () => {
  let component: MyComp3107Component;
  let fixture: ComponentFixture<MyComp3107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
