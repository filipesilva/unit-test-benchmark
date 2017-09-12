import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3140Component } from './my-comp-3140.component';

describe('MyComp3140Component', () => {
  let component: MyComp3140Component;
  let fixture: ComponentFixture<MyComp3140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
