import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3251Component } from './my-comp-3251.component';

describe('MyComp3251Component', () => {
  let component: MyComp3251Component;
  let fixture: ComponentFixture<MyComp3251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
