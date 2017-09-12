import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3969Component } from './my-comp-3969.component';

describe('MyComp3969Component', () => {
  let component: MyComp3969Component;
  let fixture: ComponentFixture<MyComp3969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
