import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3928Component } from './my-comp-3928.component';

describe('MyComp3928Component', () => {
  let component: MyComp3928Component;
  let fixture: ComponentFixture<MyComp3928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
