import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3493Component } from './my-comp-3493.component';

describe('MyComp3493Component', () => {
  let component: MyComp3493Component;
  let fixture: ComponentFixture<MyComp3493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
