import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3193Component } from './my-comp-3193.component';

describe('MyComp3193Component', () => {
  let component: MyComp3193Component;
  let fixture: ComponentFixture<MyComp3193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
