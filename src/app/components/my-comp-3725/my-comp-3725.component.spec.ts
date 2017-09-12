import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3725Component } from './my-comp-3725.component';

describe('MyComp3725Component', () => {
  let component: MyComp3725Component;
  let fixture: ComponentFixture<MyComp3725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
