import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3197Component } from './my-comp-3197.component';

describe('MyComp3197Component', () => {
  let component: MyComp3197Component;
  let fixture: ComponentFixture<MyComp3197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
