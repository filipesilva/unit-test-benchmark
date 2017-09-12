import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3764Component } from './my-comp-3764.component';

describe('MyComp3764Component', () => {
  let component: MyComp3764Component;
  let fixture: ComponentFixture<MyComp3764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
