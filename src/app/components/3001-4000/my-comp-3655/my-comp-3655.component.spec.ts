import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3655Component } from './my-comp-3655.component';

describe('MyComp3655Component', () => {
  let component: MyComp3655Component;
  let fixture: ComponentFixture<MyComp3655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
