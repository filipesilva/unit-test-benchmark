import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3487Component } from './my-comp-3487.component';

describe('MyComp3487Component', () => {
  let component: MyComp3487Component;
  let fixture: ComponentFixture<MyComp3487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
