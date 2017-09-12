import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3213Component } from './my-comp-3213.component';

describe('MyComp3213Component', () => {
  let component: MyComp3213Component;
  let fixture: ComponentFixture<MyComp3213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
