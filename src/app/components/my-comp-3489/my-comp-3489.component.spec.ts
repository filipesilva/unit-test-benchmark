import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3489Component } from './my-comp-3489.component';

describe('MyComp3489Component', () => {
  let component: MyComp3489Component;
  let fixture: ComponentFixture<MyComp3489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
