import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3757Component } from './my-comp-3757.component';

describe('MyComp3757Component', () => {
  let component: MyComp3757Component;
  let fixture: ComponentFixture<MyComp3757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
