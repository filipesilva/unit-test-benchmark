import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3933Component } from './my-comp-3933.component';

describe('MyComp3933Component', () => {
  let component: MyComp3933Component;
  let fixture: ComponentFixture<MyComp3933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
