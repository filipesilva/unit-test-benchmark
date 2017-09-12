import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3799Component } from './my-comp-3799.component';

describe('MyComp3799Component', () => {
  let component: MyComp3799Component;
  let fixture: ComponentFixture<MyComp3799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
