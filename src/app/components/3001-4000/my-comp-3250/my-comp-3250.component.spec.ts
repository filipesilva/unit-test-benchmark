import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3250Component } from './my-comp-3250.component';

describe('MyComp3250Component', () => {
  let component: MyComp3250Component;
  let fixture: ComponentFixture<MyComp3250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
