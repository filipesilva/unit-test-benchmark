import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3366Component } from './my-comp-3366.component';

describe('MyComp3366Component', () => {
  let component: MyComp3366Component;
  let fixture: ComponentFixture<MyComp3366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
