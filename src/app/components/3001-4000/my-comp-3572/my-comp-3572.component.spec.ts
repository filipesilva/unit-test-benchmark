import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3572Component } from './my-comp-3572.component';

describe('MyComp3572Component', () => {
  let component: MyComp3572Component;
  let fixture: ComponentFixture<MyComp3572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
