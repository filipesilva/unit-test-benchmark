import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3652Component } from './my-comp-3652.component';

describe('MyComp3652Component', () => {
  let component: MyComp3652Component;
  let fixture: ComponentFixture<MyComp3652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
