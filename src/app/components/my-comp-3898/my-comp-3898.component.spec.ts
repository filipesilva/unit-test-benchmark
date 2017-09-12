import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3898Component } from './my-comp-3898.component';

describe('MyComp3898Component', () => {
  let component: MyComp3898Component;
  let fixture: ComponentFixture<MyComp3898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
