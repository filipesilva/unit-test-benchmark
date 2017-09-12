import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3961Component } from './my-comp-3961.component';

describe('MyComp3961Component', () => {
  let component: MyComp3961Component;
  let fixture: ComponentFixture<MyComp3961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
