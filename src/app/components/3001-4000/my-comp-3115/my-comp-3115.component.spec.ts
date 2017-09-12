import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3115Component } from './my-comp-3115.component';

describe('MyComp3115Component', () => {
  let component: MyComp3115Component;
  let fixture: ComponentFixture<MyComp3115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
