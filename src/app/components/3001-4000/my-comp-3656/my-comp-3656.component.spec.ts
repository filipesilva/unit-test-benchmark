import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3656Component } from './my-comp-3656.component';

describe('MyComp3656Component', () => {
  let component: MyComp3656Component;
  let fixture: ComponentFixture<MyComp3656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
