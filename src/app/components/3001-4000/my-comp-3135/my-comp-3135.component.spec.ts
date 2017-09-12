import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3135Component } from './my-comp-3135.component';

describe('MyComp3135Component', () => {
  let component: MyComp3135Component;
  let fixture: ComponentFixture<MyComp3135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
