import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3293Component } from './my-comp-3293.component';

describe('MyComp3293Component', () => {
  let component: MyComp3293Component;
  let fixture: ComponentFixture<MyComp3293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
