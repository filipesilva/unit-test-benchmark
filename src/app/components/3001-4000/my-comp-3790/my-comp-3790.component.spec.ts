import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3790Component } from './my-comp-3790.component';

describe('MyComp3790Component', () => {
  let component: MyComp3790Component;
  let fixture: ComponentFixture<MyComp3790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
