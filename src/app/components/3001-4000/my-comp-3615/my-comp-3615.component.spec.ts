import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3615Component } from './my-comp-3615.component';

describe('MyComp3615Component', () => {
  let component: MyComp3615Component;
  let fixture: ComponentFixture<MyComp3615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
