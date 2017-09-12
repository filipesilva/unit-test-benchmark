import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3965Component } from './my-comp-3965.component';

describe('MyComp3965Component', () => {
  let component: MyComp3965Component;
  let fixture: ComponentFixture<MyComp3965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
