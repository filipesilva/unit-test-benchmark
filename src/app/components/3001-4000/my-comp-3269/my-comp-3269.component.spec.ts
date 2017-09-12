import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3269Component } from './my-comp-3269.component';

describe('MyComp3269Component', () => {
  let component: MyComp3269Component;
  let fixture: ComponentFixture<MyComp3269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
