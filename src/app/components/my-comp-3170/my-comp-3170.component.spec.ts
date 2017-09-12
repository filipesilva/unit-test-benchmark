import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3170Component } from './my-comp-3170.component';

describe('MyComp3170Component', () => {
  let component: MyComp3170Component;
  let fixture: ComponentFixture<MyComp3170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
