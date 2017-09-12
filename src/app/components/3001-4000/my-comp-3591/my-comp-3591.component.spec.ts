import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3591Component } from './my-comp-3591.component';

describe('MyComp3591Component', () => {
  let component: MyComp3591Component;
  let fixture: ComponentFixture<MyComp3591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
