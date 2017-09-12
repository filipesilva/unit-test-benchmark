import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3747Component } from './my-comp-3747.component';

describe('MyComp3747Component', () => {
  let component: MyComp3747Component;
  let fixture: ComponentFixture<MyComp3747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
